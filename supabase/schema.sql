-- Esquema inicial de referência. Rever e aplicar RLS antes de produção.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  role text not null default 'organizer' check (role in ('organizer','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  organizer_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  slug text unique not null,
  event_type text not null,
  description text,
  venue text,
  city text not null default 'Luanda',
  starts_at timestamptz not null,
  capacity integer check (capacity is null or capacity > 0),
  price_aoa bigint not null default 0 check (price_aoa >= 0),
  visibility text not null default 'private' check (visibility in ('private','public')),
  status text not null default 'draft' check (status in ('draft','published','cancelled')),
  allow_companions boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  full_name text not null,
  phone text,
  email text,
  party_size integer not null default 1 check (party_size > 0),
  rsvp_status text not null default 'pending' check (rsvp_status in ('pending','confirmed','declined')),
  created_at timestamptz not null default now()
);

create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  price_aoa bigint not null default 0 check (price_aoa >= 0),
  guest_limit integer,
  features jsonb not null default '{}'::jsonb,
  active boolean not null default true
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  plan_id uuid not null references public.plans(id),
  status text not null default 'pending' check (status in ('pending','active','past_due','cancelled','expired')),
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  event_id uuid references public.events(id),
  plan_id uuid references public.plans(id),
  subscription_id uuid references public.subscriptions(id),
  amount_aoa bigint not null check (amount_aoa >= 0),
  currency text not null default 'AOA' check (currency = 'AOA'),
  provider text not null,
  provider_reference text unique,
  status text not null default 'pending' check (status in ('pending','paid','failed','refunded')),
  confirmed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  guest_id uuid references public.guests(id) on delete set null,
  payment_id uuid references public.payments(id),
  ticket_code text not null unique,
  qr_token_hash text not null unique,
  status text not null default 'valid' check (status in ('valid','used','cancelled','refunded')),
  issued_at timestamptz not null default now()
);

create table if not exists public.check_ins (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references public.tickets(id),
  checked_in_by uuid references public.profiles(id),
  checked_in_at timestamptz not null default now(),
  device_label text
);

create index if not exists events_organizer_idx on public.events(organizer_id);
create index if not exists events_public_idx on public.events(visibility, status, starts_at);
create index if not exists guests_event_idx on public.guests(event_id);
create index if not exists payments_user_idx on public.payments(user_id, status);
create index if not exists tickets_event_idx on public.tickets(event_id, status);

-- Segurança pendente: ativar RLS e criar políticas específicas antes de produção.
-- Não ativar o acesso público de escrita a guests, payments, tickets ou check_ins.
