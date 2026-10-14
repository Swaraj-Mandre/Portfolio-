'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const stops = [[0, [25,43,37]], [5, [36,57,48]], [7, [186,191,166]], [10, [227,228,211]], [13, [243,240,227]], [16, [232,228,211]], [18, [185,185,151]], [20, [63,79,61]], [23, [27,45,38]]];
const luminance = rgb => rgb.map(v => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((sum,v,i) => sum + v * [.2126,.7152,.0722][i], 0);
function hsl(rgb) {
  const [r,g,b] = rgb.map(v => v / 255), max = Math.max(r,g,b), min = Math.min(r,g,b), d = max-min, l=(max+min)/2;
  let h=0, s=0;
  if(d) { s=d/(1-Math.abs(2*l-1)); h=max===r?((g-b)/d)%6:max===g?(b-r)/d+2:(r-g)/d+4; h=(h*60+360)%360; }
  return `${h.toFixed(1)} ${(s*100).toFixed(1)}% ${(l*100).toFixed(1)}%`;
}
function colours(hour) {
  let a=stops[0],b=stops[1];
  for(let i=0;i<stops.length-1;i++) if(hour>=stops[i][0]&&hour<=stops[i+1][0]) {a=stops[i];b=stops[i+1];break;}
  const t=(hour-a[0])/(b[0]-a[0]), bg=a[1].map((v,i)=>Math.round(v+(b[1][i]-v)*t));
  const dark=[29,49,39],light=[244,240,224],l=luminance(bg),dc=(l+.05)/(luminance(dark)+.05),lc=(luminance(light)+.05)/(l+.05);
  const ink=Math.max(dc,lc)<4.5?(l>.179?[0,0,0]:[255,255,255]):dc>=lc?dark:light;
  return {bg:hsl(bg),ink:hsl(ink),border:hsl(bg.map((v,i)=>Math.round(v*.72+ink[i]*.28)))};
}

export function LightDial() {
  const [hour,setHour]=useState(15);
  useEffect(()=> {try {const saved=localStorage.getItem('swaraj-light-hour');if(saved!==null&&Number.isInteger(Number(saved))&&Number(saved)>=0&&Number(saved)<=23)setHour(Number(saved));}catch{}},[]);
  useEffect(()=> {const c=colours(hour),style=document.documentElement.style;for(const name of ['background','card','popover','muted','accent','secondary'])style.setProperty('--'+name,c.bg);for(const name of ['foreground','card-foreground','popover-foreground','muted-foreground','accent-foreground','secondary-foreground'])style.setProperty('--'+name,c.ink);style.setProperty('--border',c.border);style.setProperty('--input',c.border);style.setProperty('--ring',c.ink);style.setProperty('--window-light',String(Math.max(.03,Math.sin((hour-6)/12*Math.PI)*.6)));},[hour]);
  const label=hour<5||hour>=21?'Night':hour<8?'Dawn':hour<12?'Morning':hour<17?'Afternoon':hour<20?'Golden hour':'Evening';
  return <section className='light-control' aria-label='Appearance'>
    <div className='light-caption'><label htmlFor='light-hour'>Set the light</label><output htmlFor='light-hour'>{String(hour).padStart(2,'0')}:00 / {label}</output></div>
    <div className='light-dial' style={{'--dial-position':`${hour/23*100}%`}}>
      <div className='light-ticks' aria-hidden='true'>{Array.from({length:24},(_,i)=><i key={i} className={i===hour?'selected':''}/>)}</div>
      <span className='light-marker' aria-hidden='true'>{hour<6||hour>=20?<Moon size={20}/>:<Sun size={20}/>}</span>
      <input id='light-hour' type='range' min='0' max='23' step='1' value={hour} aria-label='Time of day theme' aria-valuetext={`${hour}:00, ${label}`} onChange={e=>{const value=Number(e.target.value);setHour(value);try{localStorage.setItem('swaraj-light-hour',String(value));}catch{}}}/>
    </div>
  </section>;
}
