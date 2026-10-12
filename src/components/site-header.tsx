'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CalendarDays, Menu, X, Ticket, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [{href:'/events',label:'Explorar eventos'}, {href:'/plans',label:'Planos'}, {href:'/dashboard',label:'Painel'}];
  return <header style={{background:'rgba(255,255,255,.92)',borderBottom:'1px solid #e6ece9',position:'sticky',top:0,zIndex:30,backdropFilter:'blur(14px)'}}>
    <div className="container" style={{height:72,display:'flex',alignItems:'center',justifyContent:'space-between',gap:20}}>
      <Link href="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:900,fontSize:21,letterSpacing:'-.7px'}}>
        <span style={{width:38,height:38,borderRadius:12,background:'#13856a',color:'white',display:'grid',placeItems:'center'}}><CalendarDays size={21}/></span>
        <span>convite<span style={{color:'#13856a'}}>já</span></span>
      </Link>
      <nav className="desktop-nav" style={{display:'flex',alignItems:'center',gap:28,fontSize:14,fontWeight:650}}>
        {links.map(link=><Link key={link.href} href={link.href} style={{color:pathname===link.href?'#13856a':'#52645e'}}>{link.label}</Link>)}
      </nav>
      <div className="desktop-actions" style={{display:'flex',gap:9,alignItems:'center'}}>
        <Link href="/dashboard" className="btn btn-light" style={{fontSize:13}}>Entrar</Link>
        <Link href="/dashboard" className="btn btn-primary" style={{fontSize:13}}>Criar evento <Ticket size={16}/></Link>
      </div>
      <button aria-label="Abrir menu" onClick={()=>setOpen(!open)} className="mobile-menu" style={{display:'none',background:'white',border:'1px solid #e6ece9',padding:9,borderRadius:10}}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<nav style={{padding:'0 20px 18px',display:'grid',gap:14}}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}</nav>}
    <style jsx>{`@media(max-width:700px){.desktop-nav,.desktop-actions{display:none!important}.mobile-menu{display:block!important}}`}</style>
  </header>;
}
