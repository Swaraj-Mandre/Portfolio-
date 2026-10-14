export const caseStudies = {
  recruitsheriff: {
    device: 'document', heading: 'A decision with a traceable reason.',
    detail: 'The local model proposes a judgement. Python checks the supporting quote and computes the weighted score, making each stage easier to inspect.',
    steps: ['Resume + job requirements', 'Local model: verdict + quote', 'Python: quote check + weighted score'],
    metrics: [['80% → 92%', 'Verdict agreement'], ['6% → 2%', 'Unsupported quotes'], ['58 / 10', 'Synthetic resumes / job descriptions']],
    metricNote: 'Saved synthetic evaluation. These figures do not establish hiring performance or fairness.',
  },
  'vidhya-setu': {
    device: 'laptop', heading: 'Follow the gap back to its roots.',
    detail: 'A learning session starts with a question, builds a bounded prerequisite path, and records progress. The current concept stays visible beside the explanation.',
    gallery: [
      {src: '/images/cases/vidhya-start.jpg', title: 'A quiet starting point', text: 'The question entry screen before a learning session begins.', device: 'laptop'},
      {src: '/images/cases/vidhya-session.jpg', title: 'Progress that can be inspected', text: 'A saved session record exposes the concept path and state behind the conversation.', device: 'document'},
    ],
    metrics: [['175', 'Concepts'], ['197', 'Prerequisite links'], ['301', 'Textbook passages']],
    metricNote: 'Current two-chapter prototype. These captures document behaviour, not validated teaching quality.',
  },
  'rag-knowledge-system': {
    device: 'laptop', heading: 'Read beyond the text layer.',
    detail: 'Diagrams can hold information that text extraction misses. This pipeline brings visual content into the same retrieval flow as text and tables.',
    gallery: [
      {src: '/images/cases/rag-ingestion.jpg', title: 'Inside the document workspace', text: 'An earlier recorded application state from the supplied project proofs.', device: 'laptop'},
      {src: '/images/cases/rag-workspace.jpg', title: 'A second view of the prototype', text: 'Another captured interface state. These captures show the application, not a measured answer-quality result.', device: 'laptop'},
    ],
    steps: ['Text, tables + visual content', 'FAISS retrieval', 'Answer with page / slide references'],
  },
  medcare24: {
    device: 'laptop', heading: 'From a shared dashboard to visible security.',
    detail: 'The ambulance and hospital designs establish the information flow. The later implementation adds encrypted messages and a Security Lab.',
    gallery: [
      {src: '/images/security.png', title: 'Make security checks visible', text: 'Replay, tampering, and spoofing checks with demonstration data.', device: 'laptop'},
      {src: '/images/cases/medcare-ambulance.jpg', title: 'The ambulance perspective', text: 'Original Figma overview from the hackathon design stage.', device: 'document'},
      {src: '/images/cases/medcare-hospital.jpg', title: 'The receiving team', text: 'The companion hospital overview connects both sides of the proposed flow.', device: 'document'},
    ],
  },
  luxe: {
    device: 'phone', heading: 'One visual language, across the shopping journey.',
    detail: 'Warm surfaces, product imagery, and persistent navigation connect discovery, selection, saved items, and delivery.',
    gallery: [
      {src: '/images/cases/luxe-product.png', title: 'Choose the details', text: 'Product options and the purchase action sit together in the selection screen.', device: 'phone'},
      {src: '/images/cases/luxe-favourites.png', title: 'Keep something for later', text: 'Saved products return to the browsing journey.', device: 'phone'},
      {src: '/images/cases/luxe-tracking.png', title: 'After the purchase', text: 'An order timeline explores how delivery progress could be communicated.', device: 'phone'},
    ],
  },
  storybook: {
    device: 'phone', heading: 'Discover. Read. Listen. Return.',
    detail: 'Reading and listening have their own controls, while a personal shelf provides a familiar place to return.',
    gallery: [
      {src: '/images/cases/storybook-reading.png', title: 'Space for the story', text: 'The reading view shifts attention from discovery to the page itself.', device: 'phone'},
      {src: '/images/cases/storybook-listening.png', title: 'A different pace', text: 'Playback offers another way to experience a title.', device: 'phone'},
      {src: '/images/cases/storybook-shelf.png', title: 'A place to return', text: 'The personal shelf brings the collection into one view.', device: 'phone'},
    ],
  },
  'uav-pollination': {
    device: 'document', heading: 'Connecting perception with a physical apparatus.',
    detail: 'My contribution spans CAD assemblies and apparatus integration, alongside flower-detection work and field-image collection. This overview describes research areas, not a validated autonomous flight system.',
    steps: ['Flower images: collection + detection', 'Fusion 360: assemblies + integration', 'Pollination apparatus: collaborative research'],
    metrics: [['202421044528', 'Indian application number'], ['8', 'Named co-inventors'], ['CAD + vision', 'My contribution areas']],
    metricNote: 'Application and contribution summary. CAD renders and field footage have not yet been supplied.',
  },
};
