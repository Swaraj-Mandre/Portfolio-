// Feature-specific explanations grounded in the supplied project records.
export const featureDetails = {
  recruitsheriff: [
    {
      overview: 'Screening starts with the requirements, before a candidate receives a score. The editable checklist gives the reviewer a chance to inspect what the job description has been turned into.',
      steps: ['Turn the job description into a requirement list.', 'Review and edit that list before screening begins.', 'Assess resume evidence against those requirements so the result can be traced back to the original brief.'],
      why: 'Making the criteria visible helps a reviewer notice an unclear or misplaced requirement before it affects the assessment.',
      scope: 'This is a screening-assistance workflow. Its small, synthetic evaluation does not establish hiring performance or fairness.'
    },
    {
      overview: 'The score is accompanied by requirement-level verdicts and supporting resume quotes. The reviewer can inspect the reasoning instead of treating the ranking as the whole answer.',
      steps: ['The locally served Qwen3-4B model proposes a verdict and a supporting quote.', 'Python checks the quote and calculates the weighted score separately from the model.', 'The assessment view presents the verdicts, evidence and interview questions for review.'],
      why: 'Separating language-model judgement from scoring makes it easier to identify whether a problem comes from the evidence, the verdict or the calculation.',
      scope: 'A matching quote only shows that text appears in a resume. It does not verify the candidate claim. Saved synthetic results are not proof of bias-free decisions.'
    }
  ],
  'vidhya-setu': [
    {
      overview: 'A question can depend on concepts the learner has not understood yet. Vidhya-Setu makes those prerequisites visible as a short learning path before explaining the current concept.',
      steps: ['Retrieve relevant textbook material using embeddings and BM25 keyword matching.', 'Use a deterministic planner to select a path of up to eight concepts from the prerequisite graph.', 'Let the local Phi-3 Mini model explain the current concept while the path remains visible.'],
      why: 'The learner gets a sequence to follow, and the developer can inspect the chosen path independently of the generated explanation.',
      scope: 'The current corpus covers two NCERT Class 9 chapters: 175 concepts, 197 prerequisite links and 301 passages. It is not a validated learning intervention.'
    },
    {
      overview: 'The tutor explores changing direction when a learner signals confusion. The captured session state shows a response routing the session back to an earlier concept.',
      steps: ['The learner replies in the current learning session.', 'Rules interpret the response and update the session route.', 'The session record exposes the concept path and state so that a backward step can be inspected.'],
      why: 'A visible change in direction is easier to understand than simply receiving a longer answer to the same question.',
      scope: 'The capture demonstrates one recorded behaviour. A documented backtracking issue and factual weaknesses in explanations remain; the project does not establish improved learning outcomes.'
    }
  ],
  'rag-knowledge-system': [
    {
      overview: 'An answer becomes more useful when the reader can return to its source. This view connects generated responses to page or slide references from the retrieved documents.',
      steps: ['Read text, tables and visual content during document ingestion.', 'Index the resulting passages with FAISS and retrieve evidence for the question.', 'Pass that evidence to the answering model with page and slide references.'],
      why: 'References give the reader a practical way to check context. Including visual content also lets diagrams and image-only slides participate in retrieval.',
      scope: 'The recorded evaluation measures retrieval on a small authored set. It does not establish generated-answer accuracy or whether every citation fully supports its answer. The application uses external AI services.'
    },
    {
      overview: 'Sometimes the uploaded documents do not contain the answer. The captured refusal illustrates a case where the system indicated that the requested information was missing.',
      steps: ['Ask a question against the available document collection.', 'Retrieve candidate evidence from that collection.', 'When the captured case lacked the requested answer, the interface showed a refusal instead of presenting a supported answer.'],
      why: 'An explicit boundary helps the reader distinguish an answer grounded in the collection from information that would need another source.',
      scope: 'This is an observed example, not a guarantee of reliable refusal. Testing unsupported questions on unfamiliar documents is still needed.'
    }
  ],
  medcare24: [
    {
      overview: 'The receiving dashboard brings incoming vitals and alerts into a shared view. It explores the handover between an ambulance and a hospital team.',
      steps: ['The prototype sends encrypted demonstration readings.', 'The hospital dashboard polls for updates and presents the incoming information.', 'The paired ambulance and hospital designs describe the two sides of the proposed handover.'],
      why: 'Keeping readings and alerts together is intended to make incoming information easier for the receiving team to inspect.',
      scope: 'All shown readings are simulated. The hackathon design and later web implementation are distinct stages; this is not a clinically validated or deployed medical system.'
    },
    {
      overview: 'The Security Lab makes message-validation behaviour visible. It demonstrates how the implemented workflow handles replayed, modified and spoofed messages.',
      steps: ['Inspect the encrypted-message workflow used by the prototype.', 'Use the demonstration cases for replay, tampering and spoofing.', 'Review the recorded rejection behaviour in the Security Lab interface.'],
      why: 'Visible checks make security behaviour easier to explain and examine alongside the dashboard, instead of leaving it as an unseen implementation detail.',
      scope: 'These are prototype demonstrations with simulated data. They do not establish a complete security audit, clinical readiness or operational reliability.'
    }
  ],
  luxe: [
    {
      overview: 'The product-selection screen brings imagery, size choices and the purchase action into one focused mobile view. It is part of a connected fashion-marketplace design journey.',
      steps: ['Explore the product through its imagery.', 'Review the available choices on the selection screen.', 'Find the purchase action alongside those choices, within the same visual language as the browsing screens.'],
      why: 'The layout is intended to keep the decision and the next action close together. Palette, typography and experience mapping were part of my internship contribution.',
      scope: 'This is a Figma design from the Laveric project, presented here as LUXE. It does not demonstrate a shipped marketplace, working payment integration or measured conversion improvement.'
    },
    {
      overview: 'The order timeline extends the design beyond checkout. It explores how a shopper could follow delivery progress without leaving the product experience.',
      steps: ['Move from the shopping journey to the order-tracking view.', 'Read the stages presented in the delivery timeline.', 'Use the consistent typography and navigation to stay oriented within the same design system.'],
      why: 'The design treats delivery as part of the shopping journey. The timeline aims to make progress understandable after the purchase decision.',
      scope: 'The supplied export is interface-design evidence. It does not represent a live courier connection or verified delivery updates.'
    }
  ],
  storybook: [
    {
      overview: 'The reading screen shifts attention from discovering a title to spending time with its text. The surrounding interface becomes quieter so the page can lead.',
      steps: ['Discover a title through the product’s browsing and search designs.', 'Enter a dedicated reading view with its own visual focus.', 'Keep that view consistent with the typography, spacing, navigation and progress rules in the component library.'],
      why: 'Giving reading its own screen separates choosing a story from consuming it while preserving a familiar product identity.',
      scope: 'StoryBook is a mobile design concept. Some exported text is placeholder content, and no user study or shipped reading application is established by the supplied work.'
    },
    {
      overview: 'The listening screen offers another way to experience a title. Audio has its own controls while sharing the same visual language as discovery, reading and the personal shelf.',
      steps: ['Explore the title through the book and audio-detail designs.', 'Use the dedicated listening screen and its playback controls.', 'Return to the personal-library experience shown in the companion shelf designs.'],
      why: 'Separate reading and listening controls acknowledge different activities without making them feel like unrelated products.',
      scope: 'These are designed interface states, not a running audio application. Audio delivery and synchronized reading/listening progress are not demonstrated by the exports.'
    }
  ],
  'uav-pollination': [
    {
      overview: 'The research considers how a multi-rotor UAV and a pollination apparatus could form one physical system. My recorded contribution includes Fusion 360 assemblies and apparatus integration.',
      steps: ['Develop and examine CAD assemblies in Fusion 360.', 'Work on how the apparatus fits into the larger system.', 'Contribute to the collaborative technical research recorded with the invention.'],
      why: 'Mechanical integration connects the proposed mechanism to a physical arrangement. It is a separate contribution from the flower-detection work.',
      scope: 'I am one of eight named co-inventors on Indian patent application 202421044528. The portfolio diagrams are explanatory, not supplied CAD renders or evidence of a working flight. A granted patent is not claimed.'
    },
    {
      overview: 'Flower detection is the perception side of the proposed pollination system. My recorded work includes field-image collection and exploration with YOLO and OpenCV.',
      steps: ['Collect flower images to support the vision work.', 'Explore detection using YOLO and image-processing work with OpenCV.', 'Consider the perception work alongside the CAD and apparatus-integration research.'],
      why: 'The research brings visual detection and a physical mechanism into the same project, while keeping their individual contributions clear.',
      scope: 'The supplied material does not establish targeting accuracy, autonomous flight performance or agricultural yield improvements. The visual shown is a research overview.'
    }
  ]
};
