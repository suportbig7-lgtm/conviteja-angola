'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { CalendarDays, MapPin, Users, ArrowLeft, CheckCircle2, Ticket } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { seedEvents, EventItem, formatDate, formatKz } from '@/lib/events';
export default function EventDetailPage() {
  const params=useParams<{id:string}>();
  const event=useMemo(()=>{
    let all:EventItem[]=[...seedEvents];
    try {all=[...JSON.parse(localStorage.getItem('conviteja-events')||'[]'),...all]}catch{}
    return all.find(e=>e.id===params.id);
  },[params.id]);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [confirmed,setConfirmed]=useState(false);
  const [ticketId]=useState(()=>`CJ-${Math.random().toString(36).slice(2,9).toUpperCase()}`);
  if(!event) return <main className="container" style={{padding:'70px 0'}}><Link href="/events" className="btn btn-light"><ArrowLeft size={16}/> Voltar aos eventos</Link><h1>Evento não encontrado</h1><p className="muted">Este evento pode ter sido removido ou não está disponível neste navegador.</p></main>;
  return <main className="container" style={{padding:'36px 0 80px'}}>
    <Link href="/events" className="muted" style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:13,marginBottom:24}}><ArrowLeft size={16}/> Todos os eventos</Link>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.35fr) minmax(290px,.65fr)',gap:26,alignItems:'start'}}>
      <div><div style={{height:300,borderRadius:22,background:'linear-gradient(135deg,#f8b36c,#ed795d 54%,#713f67)',display:'grid',placeItems:'center',fontSize:100,marginBottom:28}}>{event.emoji}</div><span className="eyebrow">{event.category}</span><h1 style={{fontSize:'clamp(32px,4vw,46px)',letterSpacing:'-1.6px',margin:'10px 0 18px'}}>{event.title}</h1><p className="muted" style={{lineHeight:1.8}}>{event.description}</p>
      <div className="surface" style={{padding:20,display:'grid',gap:16,marginTop:24}}><div style={{display:'flex',gap:12,alignItems:'center'}}><CalendarDays color="#13856a"/><div><strong style={{fontSize:14,display:'block'}}>{formatDate(event.date)} · {event.time}</strong><span className="muted" style={{fontSize:12}}>Data e hora do evento</span></div></div><div style={{display:'flex',gap:12,alignItems:'center'}}><MapPin color="#13856a"/><div><strong style={{fontSize:14,display:'block'}}>{event.venue}</strong><span className="muted" style={{fontSize:12}}>{event.city}, Angola</span></div></div><div style={{display:'flex',gap:12,alignItems:'center'}}><Users color="#13856a"/><div><strong style={{fontSize:14,display:'block'}}>Capacidade: {event.capacity} pessoas</strong><span className="muted" style={{fontSize:12}}>Disponibilidade sujeita a confirmação</span></div></div></div></div>
      <aside className="surface" style={{padding:23,position:'sticky',top:95}}>{!confirmed?<><span className="muted" style={{fontSize:12}}>Preço por pessoa</span><div style={{fontSize:28,fontWeight:900,letterSpacing:'-1px',margin:'4px 0 20px'}}>{event.price===0?'Gratuito':formatKz(event.price)}</div><h3 style={{fontSize:17,margin:'0 0 7px'}}>Confirma a tua presença</h3><p className="muted" style={{fontSize:12,lineHeight:1.6,margin:'0 0 18px'}}>Preenche os teus dados para registar uma confirmação de demonstração.</p><form onSubmit={e=>{e.preventDefault();setConfirmed(true)}} style={{display:'grid',gap:12}}><label style={{fontSize:12,fontWeight:700}}>Nome completo<input required className="field" value={name} onChange={e=>setName(e.target.value)} placeholder="O teu nome" style={{marginTop:6}}/></label><label style={{fontSize:12,fontWeight:700}}>Telemóvel<input required className="field" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+244 9XX XXX XXX" style={{marginTop:6}}/></label><button className="btn btn-primary" type="submit" style={{width:'100%',marginTop:5}}><CheckCircle2 size={17}/> Confirmar presença</button></form><p className="muted" style={{fontSize:10,lineHeight:1.5,marginTop:13}}>Demonstração: os dados ficam apenas nesta sessão e não são enviados a um servidor.</p></>:<div style={{textAlign:'center'}}><CheckCircle2 size={38} color="#13856a"/><h3>Confirmação registada!</h3><p className="muted" style={{fontSize:13}}>Olá, {name}. Este é um QR Code de demonstração, ainda não é um bilhete válido.</p><div style={{padding:16,display:'inline-block',border:'1px solid #e6ece9',borderRadius:14,margin:'10px auto'}}><QRCodeSVG value={`DEMO:${event.id}:${ticketId}`} size={150}/><div style={{fontSize:11,fontWeight:800,marginTop:8}}>{ticketId}</div></div><button className="btn btn-light" onClick={()=>window.print()} style={{width:'100%'}}><Ticket size={16}/> Imprimir confirmação</button></div>}</aside>
    </div><style jsx>{`@media(max-width:800px){main>div:last-of-type{grid-template-columns:1fr!important}aside{position:static!important}}@media print{header,button{display:none!important}}`}</style>
  </main>;
}
