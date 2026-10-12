import Link from 'next/link';
import { ArrowRight, CalendarCheck, QrCode, ShieldCheck, Sparkles, Users, CheckCircle2 } from 'lucide-react';
import { seedEvents, formatKz } from '@/lib/events';
import { EventCard } from '@/components/event-card';
export default function HomePage() {
  return <main>
    <section style={{background:'radial-gradient(ellipse at 80% 10%,#d9f0e7 0,transparent 36%),linear-gradient(180deg,#f3faf7,#fbfcfb)',padding:'72px 0 66px'}}>
      <div className="container" style={{display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(300px,.95fr)',alignItems:'center',gap:48}}>
        <div>
          <div className="eyebrow" style={{display:'inline-flex',alignItems:'center',gap:7,background:'#e0f3ec',padding:'8px 12px',borderRadius:30}}><Sparkles size={14}/> Eventos especiais começam aqui</div>
          <h1 style={{fontSize:'clamp(42px,5.4vw,66px)',lineHeight:1.04,letterSpacing:'-3px',margin:'22px 0 20px',fontWeight:900,maxWidth:650}}>Cada encontro merece um <span style={{color:'#13856a'}}>convite memorável.</span></h1>
          <p className="muted" style={{fontSize:17,lineHeight:1.8,maxWidth:560,margin:'0 0 28px'}}>Cria convites digitais, organiza convidados e acompanha confirmações num só lugar. Simples, elegante e feito para eventos em Angola.</p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Link className="btn btn-primary" href="/dashboard">Criar o meu evento <ArrowRight size={17}/></Link><Link className="btn btn-light" href="/events">Explorar eventos</Link></div>
          <div style={{display:'flex',gap:20,flexWrap:'wrap',marginTop:28,fontSize:12,color:'#61756e'}}><span style={{display:'flex',alignItems:'center',gap:6}}><CheckCircle2 size={15} color="#13856a"/> Convites digitais</span><span style={{display:'flex',alignItems:'center',gap:6}}><CheckCircle2 size={15} color="#13856a"/> RSVP simples</span><span style={{display:'flex',alignItems:'center',gap:6}}><CheckCircle2 size={15} color="#13856a"/> QR Code</span></div>
        </div>
        <div style={{position:'relative',minHeight:365,display:'grid',placeItems:'center'}}>
          <div style={{position:'absolute',width:'82%',height:310,borderRadius:35,background:'linear-gradient(135deg,#b5e3d4,#e7f5ef)',transform:'rotate(5deg)'}}/>
          <div className="surface" style={{position:'relative',width:'min(360px,100%)',padding:22,boxShadow:'0 25px 65px #174e3b20',transform:'rotate(-2deg)'}}>
            <div style={{height:165,borderRadius:15,background:'linear-gradient(135deg,#f4b57b,#e97962 52%,#784d71)',display:'grid',placeItems:'center',fontSize:72,position:'relative',overflow:'hidden'}}><span>🥂</span><span style={{position:'absolute',top:12,left:13,background:'#ffffffdc',borderRadius:30,padding:'6px 10px',fontSize:10,fontWeight:800,color:'#23443a'}}>CONVITE ESPECIAL</span></div>
            <div style={{padding:'17px 2px 3px'}}><div className="eyebrow">Está convidado</div><h3 style={{fontSize:23,margin:'8px 0 6px',letterSpacing:'-.7px'}}>Uma noite para recordar</h3><p className="muted" style={{fontSize:12,margin:0}}>Sábado · 19:00 · Luanda</p>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:18,paddingTop:15,borderTop:'1px solid #edf1ef'}}><span style={{fontSize:12,fontWeight:700}}>Confirme a sua presença</span><span style={{background:'#13856a',color:'white',padding:'8px 11px',borderRadius:8,fontSize:11,fontWeight:800}}>Vou participar ✓</span></div>
            </div>
          </div>
          <div style={{position:'absolute',right:-2,bottom:10,background:'white',padding:'13px 16px',borderRadius:15,boxShadow:'0 12px 35px #174e3b15',display:'flex',gap:10,alignItems:'center'}}><span style={{background:'#e0f3ec',padding:9,borderRadius:10,color:'#13856a'}}><Users size={20}/></span><span><strong style={{display:'block',fontSize:14}}>Confirmações</strong><span className="muted" style={{fontSize:11}}>Tudo organizado num só lugar</span></span></div>
        </div>
      </div>
      <style jsx>{`@media(max-width:800px){section>div{grid-template-columns:1fr!important}.container>div:nth-child(2){min-height:340px!important}}`}</style>
    </section>
    <section className="container" style={{padding:'42px 0 18px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
        {[{icon:<CalendarCheck size={21}/>,title:'Cria em minutos',desc:'Configura o evento e partilha o link.'},{icon:<Users size={21}/>,title:'Organiza convidados',desc:'Acompanha respostas e acompanhantes.'},{icon:<QrCode size={21}/>,title:'Entrada simplificada',desc:'Prepara check-in por QR Code.'}].map(x=><div key={x.title} className="surface" style={{padding:19,display:'flex',gap:13,alignItems:'flex-start'}}><span style={{background:'#e5f5ef',color:'#13856a',padding:10,borderRadius:11}}>{x.icon}</span><div><strong style={{fontSize:14}}>{x.title}</strong><p className="muted" style={{fontSize:12,lineHeight:1.6,margin:'5px 0 0'}}>{x.desc}</p></div></div>)}
      </div>
    </section>
    <section className="container" style={{padding:'58px 0 72px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:20,marginBottom:24}}><div><div className="eyebrow">Descobre experiências</div><h2 style={{fontSize:32,letterSpacing:'-1.2px',margin:'9px 0 0'}}>Eventos em destaque</h2></div><Link href="/events" style={{fontWeight:800,fontSize:13,color:'#13856a',display:'flex',alignItems:'center',gap:6}}>Ver todos <ArrowRight size={16}/></Link></div>
      <div className="event-grid">{seedEvents.slice(0,3).map(e=><EventCard key={e.id} event={e}/>)}</div>
    </section>
    <section style={{background:'#103b34',color:'white',padding:'50px 0'}}><div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}><div><div style={{color:'#9fe0ca',fontSize:11,fontWeight:800,letterSpacing:2}}>PRONTO PARA COMEÇAR?</div><h2 style={{fontSize:30,letterSpacing:'-1px',margin:'9px 0'}}>O teu próximo evento começa aqui.</h2><p style={{color:'#c1d7cf',margin:0,fontSize:14}}>Organiza melhor. Partilha com facilidade. Celebra mais.</p></div><Link className="btn" style={{background:'white',color:'#103b34'}} href="/dashboard">Criar evento grátis <ArrowRight size={17}/></Link></div></section>
    <style jsx>{`.event-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}@media(max-width:800px){.event-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.event-grid{grid-template-columns:1fr}section.container>div:first-child{align-items:start!important}}`}</style>
  </main>;
}
