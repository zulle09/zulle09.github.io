export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export interface Highlight {
  label: string;
  text: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  start: { iso: string; label: string };
  end?: { iso: string; label: string };
  highlights: Highlight[];
  tags: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'code' | 'paper';
}

export interface Project {
  index: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  glyph: 'graph' | 'cube' | 'chat' | 'wave';
  size: 'wide' | 'narrow';
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  start: { iso: string; label: string };
  end: { iso: string; label: string };
  thesis: string;
  courses: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const profile = {
  name: 'Riccardo Zuliani',
  role: 'Machine Learning Engineer',
  email: 'riccardo.zuliani99@gmail.com',
  description:
    'Portfolio of Riccardo Zuliani, a Machine Learning Engineer working on deep learning, time-series anomaly detection, computer vision and LLM-based agents.',
  tagline:
    'I take data-driven solutions from prototype to production: data pipelines, model training, LLM-based agents and RAG assistants, and deployed web and mobile applications.',
  summary: [
    'Machine Learning Engineer with a solid academic background and hands-on experience in deep learning, time-series anomaly detection, computer vision, and LLM-based agents. Skilled in Python, PyTorch, LangChain, and full-stack development, taking data-driven solutions from prototype to production: data pipelines, model training, RAG assistants, and deployed web and mobile applications.',
    'I am proactive, research-oriented, and passionate about AI in industrial contexts.',
  ],
  facts: [
    { label: 'Focus', value: 'Deep learning, time-series anomaly detection, computer vision, LLM agents' },
    { label: 'Current role', value: 'Freelance Software Engineer, The Italian Elixir & Training Hub' },
    { label: 'Education', value: 'MSc Computer Science, Ca’ Foscari University of Venice' },
  ],
  portraitAlt: 'Portrait of Riccardo Zuliani in a blue suit and a navy patterned tie',
} as const;

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/zulle09', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/riccardo-zuliani/', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

export const cv = {
  label: 'Download CV',
  href: '/Riccardo_Zuliani_CV.pdf',
} as const;

export const experience: ExperienceEntry[] = [
  {
    role: 'Freelance Software Engineer',
    organization: 'The Italian Elixir (THIE) & Training Hub',
    location: 'Remote',
    start: { iso: '2026-09', label: 'Sep 2026' },
    highlights: [
      {
        label: 'THIE Business Engines',
        text: 'Designed and built a suite of independent, test-driven TypeScript services for a hospitality business: quoting, booking operations, ads management, reviews and property library.',
      },
      {
        label: 'THIE Architecture',
        text: 'Defined domain boundaries, idempotent commands and optimistic concurrency, with provider-neutral adapters over Google Sheets, Apps Script and Wix.',
      },
      {
        label: 'THIE Operator Console',
        text: 'Delivered an internal console for staff to calculate and revise quotes, developed locally and published only after visual approval.',
      },
      {
        label: 'Training Hub',
        text: 'Built a coaching SaaS for strength coaches and athletes with Flask, PostgreSQL and htmx, shipped as a PWA and Capacitor iOS/Android app with offline logging, Stripe subscriptions, two-factor authentication, GDPR consent and an opt-in AI assistant.',
      },
    ],
    tags: ['TypeScript', 'Flask', 'PostgreSQL', 'htmx', 'PWA', 'Capacitor', 'Stripe'],
  },
  {
    role: 'Machine Learning Engineer & Researcher',
    organization: 'NAIS Engineering Srl',
    location: 'Bologna, Italy',
    start: { iso: '2024-10', label: 'Oct 2024' },
    end: { iso: '2026-06', label: 'Jun 2026' },
    highlights: [
      {
        label: 'Data Analysis',
        text: 'Developed multiple web applications with Dash Plotly to visualize project results and analyses.',
      },
      {
        label: 'Data Engineering',
        text: 'Built multiple aggregated datasets on Formula 1 engines at different levels of depth, with one record sampled every 0.005 seconds (200 Hz).',
      },
      {
        label: 'Neural Network Modeling',
        text: 'Developed and evaluated different anomaly detection models on time-series datasets.',
      },
      {
        label: 'SCADA Dashboard Development',
        text: 'Developed a SCADA dashboard from scratch using Ignition Perspective to automate PLC data collection, enabling downstream ML model development and anomaly detection pipelines.',
      },
    ],
    tags: ['Anomaly detection', 'Time-series', 'Dash Plotly', 'Ignition Perspective'],
  },
  {
    role: 'Probability and Statistics Tutor',
    organization: 'Ca’ Foscari University of Venice',
    location: 'Venice, Italy',
    start: { iso: '2023-11', label: 'Nov 2023' },
    end: { iso: '2024-01', label: 'Jan 2024' },
    highlights: [
      {
        label: 'Tutorials',
        text: 'Delivered 10 classes and assisted 30 students with probability and statistics problems, by hand and in R, including one-on-one support.',
      },
    ],
    tags: ['Probability', 'Statistics', 'R'],
  },
];

export const projects: Project[] = [
  {
    index: '01',
    title: 'Active Learning with Dynamical System',
    kicker: 'Master’s thesis',
    description:
      'A novel Active Learning methodology that uses the Graph Transduction Algorithm to select the most difficult samples from a subset and add them to the known set.',
    tags: ['Active learning', 'Graph transduction', 'Dynamical systems'],
    links: [
      { label: 'Code', href: 'https://github.com/zulle09/ALGTG', kind: 'code' },
      {
        label: 'Graph Transduction',
        href: 'https://ieeexplore.ieee.org/abstract/document/6797349',
        kind: 'paper',
      },
    ],
    glyph: 'graph',
    size: 'narrow',
  },
  {
    index: '02',
    title: 'Molino Bertolo: Website, Shop and AI Assistant',
    kicker: 'Full-stack · RAG agent',
    description:
      'A Next.js 16 and PostgreSQL storefront (235 static pages, admin dashboard, cart) with a ReAct RAG agent over 307 technical sheets and recipes (Pinecone, OpenAI) that recommends products and adds them to the cart.',
    tags: ['Next.js', 'PostgreSQL', 'RAG', 'ReAct agent', 'Pinecone', 'OpenAI'],
    links: [],
    glyph: 'chat',
    size: 'wide',
  },
  {
    index: '03',
    title: 'Strudel Assistant',
    kicker: 'LLM agent',
    description:
      'A documentation assistant for the Strudel live-coding language: hybrid BM25 and Pinecone retrieval, a ReAct agent that validates patterns in a Node sandbox, and melody transcription from humming with librosa.',
    tags: ['Hybrid retrieval', 'Pinecone', 'ReAct agent', 'librosa'],
    links: [],
    glyph: 'wave',
    size: 'wide',
  },
  {
    index: '04',
    title: 'Silhouette-Based Space Carving',
    kicker: 'Computer vision',
    description:
      'Reconstructs the 3D shape of an object by capturing it from multiple angles during rotation and progressively removing empty space based on its silhouettes.',
    tags: ['3D reconstruction', 'Computer vision'],
    links: [
      { label: 'Code', href: 'https://github.com/zulle09/Silhouette_Based_Space_Carving', kind: 'code' },
    ],
    glyph: 'cube',
    size: 'narrow',
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science in Computer Science',
    field: 'Data management and analysis',
    institution: 'Ca’ Foscari University of Venice',
    location: 'Italy',
    start: { iso: '2022-01', label: 'Jan 2022' },
    end: { iso: '2024-07', label: 'Jul 2024' },
    thesis: 'Active Learning with Dynamical System',
    courses: ['Artificial Intelligence', '3D Geometric Computer Vision', 'Statistical Inference'],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    field: 'Data Science',
    institution: 'Ca’ Foscari University of Venice',
    location: 'Italy',
    start: { iso: '2019-09', label: 'Sep 2019' },
    end: { iso: '2021-10', label: 'Oct 2021' },
    thesis: 'Dash AutoML Benchmark',
    courses: ['Algorithms and data structures', 'Databases', 'Data Analysis', 'Predictive Analytics'],
  },
];

export const skillGroups: SkillGroup[] = [
  { title: 'Programming languages', items: ['Python', 'TypeScript', 'C++', 'SQL', 'R'] },
  {
    title: 'Frameworks & libraries',
    items: [
      'PyTorch',
      'OpenCV',
      'Scikit-learn',
      'Hugging Face',
      'LangChain',
      'LangGraph',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Dash Plotly',
      'Flask',
      'FastAPI',
      'Next.js',
    ],
  },
  {
    title: 'Technologies',
    items: [
      'Deep Learning',
      'Machine Learning',
      'Computer Vision',
      'LLM Agents',
      'RAG',
      'PostgreSQL',
      'Pinecone',
      'Git',
      'Linux',
      'Docker',
      'AWS',
      'Ignition',
    ],
  },
  {
    title: 'Spoken languages',
    items: ['Italian (native)', 'English (B2+, upper-intermediate)'],
  },
];
