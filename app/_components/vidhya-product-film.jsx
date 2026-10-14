'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './vidhya-product-film.css';

export function ProjectShowcase({ project, story }) {
  const video = useRef(null);
  const media = useRef({ request: null, url: null, controller: null });
  const [playing,setPlaying] = useState(false);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  useEffect(() => {
    const resource = media.current;
    return () => {
      resource.controller?.abort();
      if (resource.url) URL.revokeObjectURL(resource.url);
    };
  }, []);
  async function play(time) {
    const player=video.current;
    const resource=media.current;
    setLoading(true);
    try {
      // The public static host serves MP4s without a seekable byte range.
      // Load the short film once on demand so chapter controls can seek locally.
      if (!resource.request) {
        resource.controller = new AbortController();
        resource.request = fetch(story.video, { signal: resource.controller.signal })
          .then(response => {
            if (!response.ok) throw new Error('Film could not load.');
            return response.blob();
          })
          .then(blob => {
            resource.controller.signal.throwIfAborted();
            resource.url = URL.createObjectURL(blob);
            return resource.url;
          });
      }
      const src = await resource.request;
      if (player.src !== src) player.src = src;
      await player.play();
      if (typeof time === 'number') player.currentTime=time;
      setError('');
    } catch (failure) {
      if (failure.name !== 'AbortError') {
        if (!resource.url) resource.request=null;
        setError('The film could not load. Please try again.');
      }
    } finally { setLoading(false); }
  }
  return <div className={story.device === 'phone' ? 'vf-story vf-phone-story' : 'vf-story'}>
    <div className='vf-intro'><p>{story.tagline}</p><div>{project.category}<br/>{project.tools.slice(0,3).join(' · ')}</div></div>
    <figure className='vf-stage'>
      <video ref={video} controls={Boolean(media.current.url)} playsInline preload='metadata' poster={story.poster} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)} aria-label={`${project.title} edited showcase`}>
        <source src={story.video} type='video/mp4'/>
        Your browser does not support this video. <a href={story.video}>Open the demonstration</a>.
      </video>
      <figcaption><span>{project.title.toUpperCase()} / PROJECT FILM</span><button disabled={loading} onClick={()=>playing ? video.current.pause() : play()}>{loading ? 'Loading film…' : playing ? 'Ⅱ Pause film' : `▷ Play ${story.duration}-second film`}</button></figcaption>
    </figure>
    <nav className='vf-moments' style={{'--chapter-count':story.chapters.length}} aria-label='Film chapters'>{story.chapters.map((moment,index)=><button key={moment.time} onClick={()=>play(moment.time)}><span>0{index+1}</span>{moment.label}<small>00:{String(moment.time).padStart(2,'0')} ↗</small></button>)}</nav>
    {error && <p role='status'>{error}</p>}
    <p className='vf-disclosure'>{story.note}</p>
    <section className='vf-features' aria-label='Two project details'>{story.features.map((feature,index)=><figure key={feature.image} className='vf-feature'><div className='vf-feature-image'><Image src={feature.image} alt={`${project.title}: ${feature.title}`} width={feature.width || 1536} height={feature.height || 1024} unoptimized /></div><figcaption><span>0{index+1} / IN FOCUS</span><h2>{feature.title}</h2><p>{feature.text}</p><a href={feature.image} target='_blank' rel='noreferrer'>View detail ↗</a></figcaption></figure>)}</section>
    <details className='vf-notes'><summary>My contribution, evidence and current limitations <span>+</span></summary><div><p>{project.approach}</p><p>{project.evidence}</p><p>{project.limits}</p><p>{project.next}</p></div></details>
  </div>;
}
