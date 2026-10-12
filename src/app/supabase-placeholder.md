# Backend a implementar

O MVP atual usa dados de demonstração e localStorage no navegador. Para produção:
- instalar `@supabase/supabase-js`;
- configurar variáveis em `.env.local`;
- aplicar `supabase/schema.sql`;
- ativar RLS e políticas de acesso por organizador;
- substituir gravações locais por operações autenticadas;
- nunca expor service-role key no cliente.
