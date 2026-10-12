'use client';
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, MapPin, CalendarDays } from 'lucide-react';
import { seedEvents, EventItem } from '@/lib/events';
import { EventCard } from '@/components/event-card';
export default function EventsPage() {
  const [query,setQuery] = useState('');
  const [category,setCategory] = useState('Todos');
  const [price,setPrice] = useState('Todos');
  const [city,setCity] = useState('Todas');
  const events = useMemo(()=>{
    let all: EventItem[] = [...seedEvents];
    try { const saved = JSON.parse(localStorage.getItem('conviteja-events')||'[]') as EventItem[]; all=[...saved,...all]; } catch {}
    return all.filter(e=>(category==='Todos'||e.category===category)&&(city==='Todas'||e.city===city)&&(price==='Todos'||(price==='Gratuito'?e.price===0:e.price>0))&&`${e.title} ${e.venue} ${e.category}`.toLowerCase().includes(query.toLowerCase()));
  },[query,category,price,city]);
  const categories=['Todos','Música','Cultura','Networking','Casamento','Tecnologia','Família'];
  return <main className="container" style={{padding:'52px 0 80px'}}>
    <div className="eyebrow">Agenda de experiências</div><h1 style={{fontSize:'clamp(34px,4vw,46px)',letterSpacing:'-1.7px',margin:'10px 0'}}>Explora eventos</h1><p className="muted" style={{margin:'0 0 30px',lineHeight:1.7}}>Encontra o teu próximo momento especial em Angola.</p>
    <div className="surface" style={{padding:14,display:'grid',gridTemplateColumns:'minmax(180px,2fr) repeat(3,minmax(130px,1fr))',gap:10,marginBottom:24}}>
      <label style={{position:'relative'}}><Search size={17} style={{position:'absolute',left:12,top:14,color:'#80918a'}}/><input className="field" aria-label="Pesquisar eventos" placeholder="Pesquisar evento..." value={query} onChange={e=>setQuery(e.target.value)} style={{paddingLeft:38}}/></label>
      <select className="field" aria-label="Categoria" value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select>
      <select className="field" aria-label="Preço" value={price} onChange={e=>setPrice(e.target.value)}><option>Todos</option><option>Gratuito</option><option>Pago</option></select>
      <select className="field" aria-label="Cidade" value={city} onChange={e=>setCity(e.target.value)}><option>Todas</option><option>Luanda</option><option>Talatona</option></select>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}><span className="muted" style={{fontSize:13}}><strong style={{color:'#18352f'}}>{events.length}</strong> eventos encontrados</span><span className="muted" style={{display:'flex',gap:6,alignItems:'center',fontSize:12}}><MapPin size={14}/> Angola</span></div>
    {events.length?<div className="event-grid">{events.map(e=><EventCard key={e.id} event={e}/>)}</div>:<div className="surface" style={{padding:45,textAlign:'center'}}><SlidersHorizontal size={30} color="#13856a"/><h3>Nenhum evento encontrado</h3><p className="muted">Tenta alterar a pesquisa ou os filtros.</p><button className="btn btn-light" onClick={()=>{setQuery('');setCategory('Todos');setPrice('Todos');setCity('Todas')}}>Limpar filtros</button></div>}
    <style jsx>{`.event-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}@media(max-width:850px){.event-grid{grid-template-columns:repeat(2,minmax(0,1fr))}main>div:nth-of-type(3){grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:600px){.event-grid{grid-template-columns:1fr}main>div:nth-of-type(3){grid-template-columns:1fr!important}}`}</style>
  </main>;
}
