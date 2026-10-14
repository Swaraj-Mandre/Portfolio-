'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './vidhya-showcase.css';

const asset = name => `/images/vidhya-story/${name}.png`;
const chapters = [
  {name:'Ask',title:'A question is just the beginning.',text:'Start with a topic. The tutor looks for the concepts underneath it.',images:['empty']},
  {name:'Find the path',title:'Build the foundations first.',text:'For acceleration, the recorded path starts at mass and moves through eight connected concepts.',images:['path']},
  {name:'Step back',title:'Confused? Take one step back.',text:'This captured exchange moves from motion back to mass and records the backtrack.',images:['before','after','status']},
  {name:'Explain',title:'An explanation. Then a check.',text:'A later screen explains acceleration and includes a question to check understanding.',images:['teach']},
];

function Laptop({ children, className = '' }) {
  return <div className={`vs-laptop ${className}`}><div className='vs-lid'><div className='vs-camera' aria-hidden='true'/><div className='vs-screen'>{children}</div></div><div className='vs-keyboard' aria-hidden='true'><div className='vs-keys'/><div className='vs-trackpad'/></div><div className='vs-lip' aria-hidden='true'/></div>;
}

function Capture({name, alt}) {
  return <Image src={asset(name)} alt={alt} width={720} height={400} unoptimized />;
}

export function VidhyaShowcase({project}) {
  const [step,setStep] = useState(1);
  const [playing,setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      if (step === chapters.length - 1) setPlaying(false);
      else setStep(step + 1);
    }, 4000);
    return () => clearTimeout(timer);
  }, [playing, step]);
  const chapter = chapters[step];
  return <div className='vs-story'>
    <div className='vs-intro'><p>An offline tutor that finds the missing step.</p><span>Local AI / Learning graphs / Research prototype</span></div>
    <section className='vs-theatre' aria-label='Vidhya-Setu screenshot walkthrough'>
      <div className='vs-stage-top'><span><i/> Inside Vidhya-Setu</span><span>Captured prototype · 4 moments</span></div>
      <div className='vs-scene'>
        <div className='vs-main-device'><Laptop><div key={step} className={`vs-capture vs-capture-${step}`}>
          <div className='vs-appbar'>Vidhya-Setu <span>Offline AI tutor</span></div>
          {chapter.images.map(name => <Capture key={name} name={name} alt={`${chapter.name}: recorded ${name} interface crop`}/>)}
        </div></Laptop><span className='vs-device-shadow' aria-hidden='true'/></div>
        <div className='vs-narrative' aria-live={playing ? 'off' : 'polite'}><span className='vs-count'>0{step+1} / 04</span><h2>{chapter.title}</h2><p>{chapter.text}</p><button className='vs-play' onClick={() => {if(playing) setPlaying(false);else {setStep(0);setPlaying(true);}}}>{playing ? 'Ⅱ Pause walkthrough' : '▷ Play 16-second walkthrough'}</button><a href={asset(chapter.images[0])} target='_blank' rel='noreferrer'>Inspect this capture ↗</a></div>
      </div>
      <div className='vs-chapters' aria-label='Walkthrough steps'>{chapters.map((item,index) => <button key={item.name} aria-pressed={index===step} onClick={() => {setPlaying(false);setStep(index);}}><span>0{index+1}</span>{item.name}<i className={playing && index===step ? 'vs-progress' : ''}/></button>)}</div>
      <p className='vs-disclosure'>A sequence of original screenshots, not a live app recording.</p>
    </section>
    <section className='vs-paths' aria-label='Different questions and learning paths'>
      <div className='vs-section-heading'><p>Same tutor. Different starting points.</p><span>Two captured sessions, side by side.</span></div>
      <div className='vs-duo'>
        <figure><Laptop className='vs-angle-left'><div className='vs-mini-capture'><Capture name='studentA' alt='Acceleration question and its prerequisite path'/></div></Laptop><figcaption><span>01 / Acceleration</span><p>From mass to motion, then onward.</p></figcaption></figure>
        <figure><Laptop className='vs-angle-right'><div className='vs-mini-capture'><Capture name='studentB' alt='Friction question and its prerequisite path'/></div></Laptop><figcaption><span>02 / Friction</span><p>A different question changes the path.</p></figcaption></figure>
      </div>
    </section>
    <section className='vs-engineering'><div><span>Under the surface</span><p><strong>175</strong> concepts <b>·</b> <strong>197</strong> links <b>·</b> <strong>301</strong> passages</p></div><p>Textbook retrieval + a prerequisite graph + local Phi-3 explanations.</p></section>
    <details className='vs-notes'><summary>My contribution, evidence and what needs work <span>+</span></summary><div><section><h3>My approach</h3><p>{project.approach}</p></section><section><h3>Current scope</h3><p>{project.limits}</p><p>{project.next}</p></section></div></details>
  </div>;
}
