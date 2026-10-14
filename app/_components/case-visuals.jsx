import Image from 'next/image';

function Device({ src, alt, device, priority = false }) {
  return <div className={`device device-${device}`}>
    <div className='device-screen'><Image src={src} alt={alt} width={1440} height={1000} unoptimized priority={priority} /></div>
    {device === 'laptop' && <div className='device-base' aria-hidden='true' />}
  </div>;
}

export function CaseVisuals({ project, study }) {
  return <>
    <figure className={`case-stage stage-${study.device}`}>
      <Device src={project.image} alt={project.imageAlt} device={study.device} priority />
      <figcaption>{project.caption}</figcaption>
    </figure>
    <section className='visual-intro'><p className='case-eyebrow'>Inside the project</p><div><h2>{study.heading}</h2><p>{study.detail}</p></div></section>
    {study.gallery && <div className={`visual-gallery ${study.device === 'phone' ? 'phone-gallery' : ''}`}>
      {study.gallery.map((item, index) => <figure className='visual-feature' key={item.src}>
        <div className='visual-display'><Device src={item.src} alt={item.title} device={item.device} /></div>
        <figcaption><span className='visual-index'>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a href={item.src} target='_blank' rel='noreferrer'>View full image ↗</a></figcaption>
      </figure>)}
    </div>}
    {study.steps && <section className='process-panel' aria-label='Project process overview'><p className='case-eyebrow'>Process overview · explanatory diagram</p><ol>{study.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><h3>{step}</h3></li>)}</ol></section>}
    {study.metrics && <section className='evidence-panel' aria-label='Recorded project evidence'><div>{study.metrics.map(([value, label]) => <p key={label}><strong>{value}</strong><span>{label}</span></p>)}</div><p className='evidence-note'>{study.metricNote}</p></section>}
  </>;
}
