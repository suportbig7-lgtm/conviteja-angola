# ConviteJá — Plataforma de eventos para Angola

Aplicação inicial inspirada nos fluxos de plataformas de convites e eventos, com identidade própria. Preparada para GitHub e deploy em Replit/Vercel.

## Estado do projeto

Esta é uma **base funcional de MVP**, não um produto de produção já integrado a pagamentos reais. Inclui:
- Interface responsiva em português (AO), moeda Kz.
- Página pública com eventos de demonstração, pesquisa e filtros.
- Dashboard do organizador com métricas e eventos.
- Criação de evento com persistência local no navegador.
- Página de detalhes de evento e confirmação RSVP demonstrativa.
- Página de planos.
- Geração de QR Code demonstrativo para evento/convite.
- Estrutura de aplicação Next.js, TypeScript e Tailwind.
- Exemplo de esquema SQL para Supabase.

Ainda precisa de backend, autenticação real, políticas RLS, emissão segura de bilhetes e integração contratada com gateway angolano antes de produção. Os pagamentos nesta versão **não são reais**.

## Requisitos

- Node.js 20.9+ (recomendado)
- npm

## Executar localmente ou num ambiente online

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir `http://localhost:3000`.

No Replit, importe o repositório ou carregue o ZIP, instale dependências e execute `npm run dev`.

## GitHub

1. Crie um repositório vazio no GitHub.
2. Extraia o ZIP.
3. Envie os ficheiros extraídos (incluindo `package.json` e `README.md`) para o repositório.
4. Nunca envie `.env.local`, tokens, senhas ou chaves secretas.

## Deploy

Compatível com Vercel e ambientes Node.js. Configure as variáveis de ambiente apenas quando os serviços correspondentes forem implementados.

## Próximas etapas recomendadas

1. Configurar Supabase Auth e PostgreSQL.
2. Aplicar `supabase/schema.sql` e políticas RLS.
3. Substituir `localStorage` por API/backend autenticado.
4. Implementar bilhetes individuais e QR Codes assinados/validados no servidor.
5. Integrar gateway angolano (por exemplo, após aprovação comercial) e validar pagamentos via webhook no servidor.
6. Adicionar testes, monitorização, proteção contra abuso e política de privacidade.

## Licença

Uso e modificação permitidos para este projeto. Ver `LICENSE`.
