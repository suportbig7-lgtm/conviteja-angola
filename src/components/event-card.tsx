import Link from 'next/link';
import { CalendarDays, MapPin, ArrowUpRight } from 'lucide-react';
import { EventItem, formatDate, formatKz } from '@/lib/events';
const palettes: Record<string, string> = {
  sunset:'linear-gradient(135deg,#f8b36c,#ed795d 54%,#713f67)',
  culture:'linear-gradient(135deg,#f4d68b,#e88c63 55%,#ac4d55)',
  business:'linear-gradient(135deg,#9fd8c4,#399e8d 55%,#235b69)',
  wedding:'linear-gradient(135deg,#f4dce2,#e9b8bd 55%,#a77591)',
  tech:'linear-gradient(135deg,#b8d8ed,#729bd0 55%,#4a5a91)',
  family:'linear-gradient(135deg,#c9e3a7,#7eb98a 55%,#478e77)',
};
export function EventCard({event}:{event:EventItem}) {
  return <article className="surface" style={{overflow:'hidden',transition:'transform .2s,box-shadow .2s'}}>
    <Link href={`/events/${event.id}`} aria-label={`Ver ${event.title}`}>
      <div style={{height:172,background:palettes[event.color]||palettes.sunset,position:'relative',display:'grid',placeItems:'center',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 25% 20%,#ffffff6b,transparent 34%),linear-gradient(120deg,transparent,#00000012)'}}/>
        <span style={{fontSize:65,filter:'drop-shadow(0 8px 10px #0002)',zIndex:1}}>{event.emoji}</span>
        <span style={{position:'absolute',left:14,top:14,padding:'6px 10px',borderRadius:20,background:'#ffffffdf',fontSize:11,fontWeight:800}}>{event.category}</span>
      </div>
      <div style={{padding:18}}>
        <div className="muted" style={{display:'flex',alignItems:'center',gap:7,fontSize:12,marginBottom:10}}><CalendarDays size={14}/>{formatDate(event.date)} · {event.time}</div>
        <h3 style={{fontSize:18,letterSpacing:'-.4px',lineHeight:1.3,margin:'0 0 8px',fontWeight:800}}>{event.title}</h3>
        <p className="muted" style={{fontSize:13,display:'flex',alignItems:'center',gap:6,margin:'0 0 17px'}}><MapPin size={14}/>{event.venue}, {event.city}</p>
        <div style={{borderTop:'1px solid #edf1ef',paddingTop:14,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><div className="muted" style={{fontSize:11,marginBottom:3}}>A partir de</div><strong style={{fontSize:16}}>{event.price===0?'Gratuito':formatKz(event.price)}</strong></div>
          <span style={{width:34,height:34,border:'1px solid #e6ece9',borderRadius:10,display:'grid',placeItems:'center'}}><ArrowUpRight size={17}/></span>
        </div>
      </div>
    </Link>
  </article>;
}
