import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
export const metadata: Metadata = {
  title: 'ConviteJá — Eventos que aproximam',
  description: 'Crie convites digitais, gira confirmações e organize eventos em Angola.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO"><body><SiteHeader />{children}<Footer /></body></html>;
}
