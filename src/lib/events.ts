export type EventItem = {
  id: string; title: string; category: string; date: string; time: string;
  venue: string; city: string; price: number; capacity: number;
  description: string; emoji: string; color: string; status: 'Publicado' | 'Rascunho';
};
export const seedEvents: EventItem[] = [
  { id:'luanda-sunset', title:'Luanda Sunset Experience', category:'Música', date:'2026-11-07', time:'17:00', venue:'Marginal de Luanda', city:'Luanda', price:5000, capacity:350, description:'Uma experiência ao pôr do sol com música, gastronomia e encontros inesquecíveis.', emoji:'🌅', color:'sunset', status:'Publicado' },
  { id:'noite-angolana', title:'Noite de Cultura Angolana', category:'Cultura', date:'2026-11-14', time:'19:00', venue:'Palácio de Ferro', city:'Luanda', price:2500, capacity:180, description:'Celebra a música, a dança, os sabores e a criatividade angolana.', emoji:'🎶', color:'culture', status:'Publicado' },
  { id:'business-connect', title:'Angola Business Connect', category:'Networking', date:'2026-11-21', time:'09:00', venue:'Centro de Convenções de Talatona', city:'Talatona', price:15000, capacity:240, description:'Uma manhã de ideias, parcerias e oportunidades para empreendedores.', emoji:'🤝', color:'business', status:'Publicado' },
  { id:'wedding-inspiration', title:'Wedding Inspiration Luanda', category:'Casamento', date:'2026-12-05', time:'15:00', venue:'Hotel em Talatona', city:'Luanda', price:0, capacity:100, description:'Inspiração, fornecedores e ideias para celebrações especiais.', emoji:'💍', color:'wedding', status:'Publicado' },
  { id:'tech-meetup', title:'Tech Meetup Angola', category:'Tecnologia', date:'2026-12-12', time:'10:00', venue:'Belas Business Park', city:'Luanda', price:3000, capacity:120, description:'Comunidade, produtos digitais e o futuro da tecnologia em Angola.', emoji:'💡', color:'tech', status:'Publicado' },
  { id:'family-picnic', title:'Picnic em Família', category:'Família', date:'2026-12-19', time:'11:00', venue:'Jardim da Cidade', city:'Luanda', price:1500, capacity:90, description:'Um dia descontraído com jogos, comida e atividades para todas as idades.', emoji:'🌿', color:'family', status:'Publicado' },
];
export function formatKz(value: number) {
  return new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA', maximumFractionDigits: 0 }).format(value).replace('AOA', 'Kz');
}
export function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-AO', { day:'2-digit', month:'short', year:'numeric' }).format(new Date(`${value}T12:00:00`));
}
