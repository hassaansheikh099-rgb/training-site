export interface Course {
  id: string;
  title: string;
  category: 'ai' | 'web' | 'cyber' | 'design' | 'mobile' | 'marketing' | 'data' | '3d';
  badge: string;
  badgeType: 'high-demand' | 'popular' | 'critical' | 'creative' | 'ecom' | 'cross-platform' | 'fast-track' | 'micro-degree';
  seatsLeftText: string;
  duration: string;
  durationCategory: 'fast-track' | 'bootcamp' | 'micro-degree';
  deliveryMode: 'campus' | 'online' | 'hybrid';
  modeText: string;
  image: string;
  imageAlt: string;
  bannerTags: string;
  description: string;
  techStack: string[];
  features: string[];
  avgPlacementSalary: string;
  placementRate: string;
  startDate: string;
  campusesAvailable: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    avatarAlt: string;
  };
  syllabusModules: {
    number: number;
    title: string;
    topics: string[];
  }[];
  curriculumOverview?: string;
}

export interface Campus {
  id: string;
  name: string;
  city: 'lahore' | 'karachi' | 'khanewal';
  cityName: string;
  badge: string;
  isFlagship?: boolean;
  address: string;
  phone: string;
  timings: string;
  image: string;
  imageAlt: string;
  amenities: { icon: string; label: string }[];
  hostedBootcamps: string[];
  mapUrl: string;
  mapEmbedQuery: string;
}

export interface AlumniStory {
  id: string;
  name: string;
  initials: string;
  batch: string;
  track: string;
  company: string;
  role: string;
  salaryHike: string;
  quote: string;
  avatar?: string;
  campus: string;
}

export const ACCREDITATIONS = [
  {
    code: 'NV',
    name: 'NAVTTC Approved',
    badgeText: 'OFFICIAL TRAINING PARTNER',
    description: "National Vocational & Technical Training Commission under Prime Minister's Youth Skill Development Program.",
    council: 'GOVERNMENT OF PAKISTAN'
  },
  {
    code: 'PS',
    name: 'PSDF Certified',
    badgeText: 'GOVERNMENT OF PUNJAB',
    description: 'Punjab Skills Development Fund accredited partner offering subsidized and funded modern technology courses.',
    council: 'PUNJAB SKILLS DEV FUND'
  },
  {
    code: 'TV',
    name: 'TEVTA Recognized',
    badgeText: 'TECHNICAL ACCREDITATION',
    description: 'Technical Education and Vocational Training Authority certified curricula matching strict industry criteria.',
    council: 'TEVTA PUNJAB'
  }
];

export const HIRING_PARTNERS = [
  { name: 'LUMS', tag: 'Academic Partner', color: 'text-on-surface' },
  { name: 'HBL', tag: 'Digital Banking', color: 'text-emerald-400' },
  { name: 'PureLogics', tag: 'Software Solutions', color: 'text-text-primary' },
  { name: 'PITB', tag: 'Govt of Punjab', color: 'text-on-surface' },
  { name: 'Systems Ltd', tag: 'Global Enterprise', color: 'text-sky-400' },
  { name: 'ProgrammersForce', tag: 'AI & FinTech', color: 'text-rose-400' },
  { name: 'Game Storm', tag: 'Gaming & VFX', color: 'text-on-surface' },
  { name: 'OziPub.io', tag: 'AdTech & Media', color: 'text-slate-300' },
  { name: 'Neksogix', tag: 'AI Web Platforms', color: 'text-rose-400' },
  { name: 'Pentabit Labs', tag: 'Cloud & DevOps', color: 'text-text-primary' },
  { name: 'Alkhidmat', tag: 'Youth Tech Outreach', color: 'text-emerald-400' },
  { name: 'Remotebase', tag: 'Global Remote Hub', color: 'text-sky-300' }
];

export const CAMPUSES: Campus[] = [
  {
    id: 'arfa-tower',
    name: 'Arfa Software Tech Park',
    city: 'lahore',
    cityName: 'Lahore Tech Corridor',
    badge: 'HEADQUARTERS',
    isFlagship: true,
    address: 'Arfa Tower, 2nd Floor, Main Ferozepur Road, Lahore, Pakistan',
    phone: '+92 309 666 3330',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzk2QyVLLzYEPohquXZ2bH7s5mwHbLsnlxiutFlug7GU3ftoekF7ScUIRTuVuT2CbM11oQ3q2gc0yp8jvp2tkpYZya1t0isxe9Cl6mrWgugQPWXP_BEQZVToj9MewlOdA60SlAzjgtFDcVVAzpJ4_FZhLUWL3nWO31iW_fk-oPWHRGRUMBX_k-05uVj2pceNEep2NB0RLcgktHI2q4nncMr9SSQFo11Y2W9SZgMGQeLFvI27Lg7Ia5',
    imageAlt: 'Arfa Software Technology Park interior workstations with AI coding monitors',
    amenities: [
      { icon: 'memory', label: '5 High-Tech AI Labs' },
      { icon: 'wifi', label: 'Gigabit Optical Fiber' },
      { icon: 'local_parking', label: 'Dedicated Parking' },
      { icon: 'rocket_launch', label: 'Tech Incubator' },
      { icon: 'coffee', label: 'Student Cafeteria' }
    ],
    hostedBootcamps: ['AI Development', 'Full Stack Web Dev', 'Advanced Cyber Security'],
    mapUrl: 'https://maps.app.goo.gl/eScw8ScfL5m1ojsY8',
    mapEmbedQuery: 'Arfa Software Technology Park, Lahore'
  },
  {
    id: 'karachi-parsa',
    name: 'Karachi PARSA Tower',
    city: 'karachi',
    cityName: 'Sindh Central Hub',
    badge: 'KARACHI HUB',
    address: 'Office #608, PARSA Tower, Main Shahrah-e-Faisal, PECHS Block 6, Karachi',
    phone: '+92 300 8565056',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMaJ4BYzFKBs30XW6GPtLmqWS2c6S6qU4vh9zZJ9sV9v2hKCTSz7HB0MJBSFoSfZYKueF3d4eaIIu9FphPNxDZ3v9WJx8feGz5NPfUiYQP0VoCTd4L_4IPggnEuNlYZo11kXCL1TWrqkO4qZSi87_KYowRmnplFPhJYe6VcCIsagetu1Foxj55k9PCAO-kWtfxhIr-Os8_sYpZcgBRTlW35oddt4oeTWc4rbmEm4HLu8XD7Xvh_EO',
    imageAlt: 'High rise corporate tech training suite at night in Karachi PARSA Tower',
    amenities: [
      { icon: 'apartment', label: 'Corporate Wing' },
      { icon: 'computer', label: 'High-Spec Workstations' },
      { icon: 'wifi', label: 'Fast High-Speed Net' },
      { icon: 'train', label: 'Metro Access' }
    ],
    hostedBootcamps: ['Full Stack AI', 'Cyber Security', 'Growth Marketing'],
    mapUrl: 'https://maps.app.goo.gl/KW6Pj3u2dBxDFXSm8',
    mapEmbedQuery: 'PARSA Tower, Main Shahrah-e-Faisal, Karachi'
  },
  {
    id: 'garden-town',
    name: 'New Garden Town Campus',
    city: 'lahore',
    cityName: 'Central Lahore Hub',
    badge: 'LAHORE CAMPUS',
    address: '14 Baber Block, New Garden Town, Lahore (Near Kalma Chowk Underpass)',
    phone: '+92 309 6663331',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHqLXQtnn4Z7YLRFn_YRGmnlyg6ZZqcow4rse4N-pfs8NUoIF1Oj1nPZGJvN5iOL_bU1gaAhiR4VUeGjmWLRGLD9srJT2cKu4wWxhg-uHvQm8Impaug2kvMTjCWgGDirBwNrSvgLjXhcmn3LQyBXrWpbYgMwyTtGnISMFFoPbe3wfmkPXctSbfRNkAaQh-2aUFF6qs2aF_5lp0LLnQEDLiSCrMQSFeo2zJ0LsXzcFxn8bKLYf_R0Rl',
    imageAlt: 'Modern computer lab and lecture space at New Garden Town Lahore',
    amenities: [
      { icon: 'computer', label: 'Modern PC Labs' },
      { icon: 'meeting_room', label: 'Event Hall' },
      { icon: 'local_cafe', label: 'Cafeteria & Study Hub' },
      { icon: 'local_parking', label: 'Free Parking & WiFi' }
    ],
    hostedBootcamps: ['Full Stack Web', 'UI/UX Design', 'Flutter Mobile App'],
    mapUrl: 'https://maps.app.goo.gl/RJpXJkd3ziQbBwe5A',
    mapEmbedQuery: '14 Baber Block, New Garden Town, Lahore'
  },
  {
    id: 'bahria-town',
    name: 'Bahria Town Campus',
    city: 'lahore',
    cityName: 'South Lahore Hub',
    badge: 'TECH STUDIOS HUB',
    address: 'Commercial Zone, Sector C, Bahria Town, Lahore',
    phone: '+92 329 6474862',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7rU053fMspLtRH7xaJMvaUkDjpd5WY-ZAnrULubRpJGpRR5EcUoUkRm9pqnOhQi_ibI2_LLJ9wh08X9OqQrHqM0tNnX1GXD4vpy2xAAep7B1MWKMMJq8zaqmkQvzxpwScYy5nYAKNmDk8qFbnckmg-0Ysr_5E2HIHIJDRlOaM3o0r58HsIsY1PCnrRRyOPNqHOfofBJQ1xGsU02iB6dSqbRmdojokQ70EHE56Bc4zZc5jivVhYFU0',
    imageAlt: 'Futuristic design and AI educational studio in Bahria Town Lahore',
    amenities: [
      { icon: 'terminal', label: 'Advanced IT Studios' },
      { icon: 'group_work', label: 'Incubation Pods' },
      { icon: 'bolt', label: '24/7 Power Backup' },
      { icon: 'palette', label: 'Creative Media Room' }
    ],
    hostedBootcamps: ['3D Game Dev & VFX', 'Graphic & UI/UX', 'Digital Marketing'],
    mapUrl: 'https://maps.app.goo.gl/RJpXJkd3ziQbBwe5A',
    mapEmbedQuery: 'Bahria Town Sector C, Lahore'
  },
  {
    id: 'mian-channu',
    name: 'Mian Channu Campus',
    city: 'khanewal',
    cityName: 'South Punjab Center',
    badge: 'SOUTH PUNJAB',
    address: 'Sanaullah Educational Complex, Bodla Memorial Hospital Rd, Mian Channu',
    phone: '+92 308 1186660',
    timings: 'Mon-Sun: 10:00 AM - 9:00 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJGKLyki8QRXSFBSdHvL_rQHlkRFLlepDh0lFbZ_89FHcGsTxXAPlFcn4ErYPv4w7TquPcOnG0sMdMjT8qFuEkqv3nUU7qQaE8W40zHx9jENE60N8useTmRzrFtT1wLiPlwhAOymFluDjqCDv6mr6igPMf646k2tLQG6GePLBy3vm6Zp7c8a7X3YVmSUzhtDybUwndNUgRCev-dK4QUMHeOArOdyqA2iW98aQKdbRbwTSBmonw1-_q',
    imageAlt: 'Youth technical education lab in South Punjab at Sanaullah Complex Mian Channu',
    amenities: [
      { icon: 'computer', label: 'Practical IT Labs' },
      { icon: 'support_agent', label: 'Dedicated Mentorship' },
      { icon: 'work', label: 'Career Center Desk' },
      { icon: 'wifi', label: 'Free Optical Wi-Fi' }
    ],
    hostedBootcamps: ['Web Development', 'Digital Marketing', 'Graphic Design with AI'],
    mapUrl: 'https://maps.app.goo.gl/WoYXUPDoryQjvXN27',
    mapEmbedQuery: 'Sanaullah Educational Complex, Mian Channu'
  }
];

export const COURSES: Course[] = [
  {
    id: 'full-stack-ai',
    title: 'Full Stack Artificial Intelligence & LLM Agents',
    category: 'ai',
    badge: 'HIGH DEMAND',
    badgeType: 'high-demand',
    seatsLeftText: 'Only 4 Seats Left',
    duration: '6 Months (24 Wks)',
    durationCategory: 'micro-degree',
    deliveryMode: 'hybrid',
    modeText: 'On-Campus & Online',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQl0QgYnOFLbbKt1VTGJ2TJfxgfpTcgy4tTQCA7lsy-KwNXOzgo4rU84nU50iltugwNakLFLghR0H-zD7qmyTny6C_hJR8b2wILQgYJlVujzbKSWw-WAwwvg_ejPcJCrYA8StNPhQ5G8nLlVf4JJNuzqDrI8wFoJJcvSggRgZ7CUxir07iVnQf2prWURIzV0t2JMh6c5u2sIwd50KZFaEWsXnETNqjj_uecOpN6lYahkPVVxw7axW',
    imageAlt: 'Futuristic high tech computer monitor displaying Python neural network code and LLM architecture pipelines in dark ambient room',
    bannerTags: 'LangChain • PyTorch • LLMs',
    description: 'Master Large Language Models (LLMs), Agentic AI architectures, RAG pipelines, Deep Learning with PyTorch, and AI microservices.',
    techStack: ['Python', 'LangChain', 'OpenAI API', 'Pinecone / Chroma', 'FastAPI', 'PyTorch', 'CrewAI'],
    features: ['Internship Included', 'NAVTTC Accredited', 'Silicon Valley Capstone'],
    avgPlacementSalary: 'PKR 140,000+',
    placementRate: '92% Placement',
    startDate: 'March 15, 2026',
    campusesAvailable: 'Arfa Tower + Live Online',
    instructor: {
      name: 'Dr. Hamza Tariq',
      role: 'Ex-Senior AI Researcher • Silicon Valley Advisor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg57AvYdi9VCPAtdtj-I8bEd1BqqlRbxOKBoxcuMaMoU83h9OAFWPWRGYetcZqFRA9wD9MqSktwyNSzgxaOsoUy8L3nc8tKwbJNhun_-WOz6x8bqEXkwuTxsdX5jmHVgfp1DmH2fOJgAuVeDQm2jnUS5iykbapcETsB5c_SNoh5KIy5vOrBlbkhdOX-msDo6o8GM54a7nubep3o6Z886u_eznY5G4skN4N4cCdcHmQIGr3FzNdO4YZ',
      avatarAlt: 'Dr. Hamza Tariq photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Advanced Python, PyTorch & Embedding Mathematics',
        topics: ['Modern Pythonic Architecture & Async IO', 'Tensors, Backpropagation & Custom Loss Functions', 'Vector Embeddings & Semantic Similarity Search', 'Data Wrangling with Polars & GPU acceleration']
      },
      {
        number: 2,
        title: 'LangChain, LlamaIndex & Hybrid RAG Systems',
        topics: ['Chunking Strategies & Context Compression', 'Dense & Sparse Retrieval with Pinecone & Qdrant', 'Rerankers (Cohere) & Hallucination Guardrails', 'Multi-tenant Document Question-Answering Engines']
      },
      {
        number: 3,
        title: 'Autonomous Agent Frameworks (CrewAI, AutoGen)',
        topics: ['Tool Calling & Structured JSON Schemas', 'Multi-Agent Collaboration & Role Delegation', 'Memory Architectures & Self-Correction Loops', 'Autonomous Code Generation & Web Scraping Agents']
      },
      {
        number: 4,
        title: 'Enterprise Production, Guardrails & Docker Ops',
        topics: ['High-Concurrency FastAPI Microservices', 'Streaming LLM Responses with WebSockets & SSE', 'Model Quantization (GGUF, vLLM, Ollama)', 'Dockerization, Kubernetes & AWS/GCP Model Serving']
      }
    ]
  },
  {
    id: 'web-dev-ai',
    title: 'Software Engineering & Web Dev with AI (Next.js 14)',
    category: 'web',
    badge: 'POPULAR TRACK',
    badgeType: 'popular',
    seatsLeftText: 'Only 6 Seats Left',
    duration: '4 Months (16 Wks)',
    durationCategory: 'bootcamp',
    deliveryMode: 'hybrid',
    modeText: 'Hands-on Labs • 10+ Live Projects',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoNzZ6z9lqVT-n2apriFtDAAuxMZ-WSbHcMX9rYVqjmZ6EDE4RIA_J7Nc61NHHsyTHrVl9e-EuztRoxu5kK1ELbHZcxA9Cbjj2hfBlNZr5mpYGBTTiIPVyRINX69ikPsi67ShSIS8-h_mlLxtYVZR8a5M5-FUBTNxgMO_hBnNIdKHY3ryM60MpVoIfq7_UjuAob9GdshwbJj453BIh38Mw0X2-sO6SJO28giwKX8mUenlW615Sloza',
    imageAlt: 'Modern web developer setup showing responsive Next.js and React dashboard with AI code tools',
    bannerTags: 'Next.js • MERN • Cloud',
    description: 'Build enterprise full-stack web applications using Next.js 15, TypeScript, Node.js, combined with autonomous coding agents.',
    techStack: ['React 19', 'Next.js 14', 'Node / Express', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    features: ['10+ Live Projects', 'GitHub CI/CD Reviews', 'Vercel & AWS Deployments'],
    avgPlacementSalary: 'PKR 110,000+',
    placementRate: '88% Placement',
    startDate: 'March 18, 2026',
    campusesAvailable: 'Arfa + Garden Town + Online',
    instructor: {
      name: 'Zainab Siddiqui',
      role: 'Principal Architect • 8+ Yrs Global Remote Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVmsJuBbJbdjiAQm2U1V1klpII6POtW-pdI-Tm-WOh5zWlASbEXQ-zoUrzDmSKbo8wPXdoWAp2qIu4f9lcXAvSFjxi_zelrV92Un_5h4Tsz8L67JZzbnWhffBR6rXKqw9Oq7fL7Sve6W0R5Jo4Lq4VjLojW1XjllKaE-6F-dR34EljVAaueWxhZYaDiVAxsIeBzBB-ddWnwTHhzCIqTXL_KC7FTYrC9H37kYlpJXT915WW8txbZ5DN',
      avatarAlt: 'Zainab Siddiqui photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Modern JS ES6+, TypeScript & UI Architecture',
        topics: ['Strict TypeScript Typing & Generics', 'Component Composition Patterns & State Modeling', 'Tailwind CSS v4 Design Tokens', 'Unit Testing with Vitest & React Testing Library']
      },
      {
        number: 2,
        title: 'React Server Components & Next.js App Router',
        topics: ['Server Actions, Optimistic UI & Transitions', 'Dynamic Route Handlers & Edge Runtime Caching', 'SEO, OpenGraph, JSON-LD Structured Data', 'Authentication with NextAuth & JWT RBAC']
      },
      {
        number: 3,
        title: 'REST & GraphQL AI-infused APIs with Prisma',
        topics: ['Express.js & NestJS Microservice Patterns', 'PostgreSQL Schema Design & Migrations', 'Prisma ORM & Connection Pooling', 'Integrating Gemini & OpenAI Streaming Endpoints']
      },
      {
        number: 4,
        title: 'CI/CD Pipelines, Microservices & Realtime WebSockets',
        topics: ['Socket.IO Real-time Messaging & Presence', 'Redis Caching & Background BullMQ Workers', 'Docker Containers & Docker Compose Stacks', 'Vercel, AWS ECS & Supabase Cloud Architectures']
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Advance Cyber Security & Ethical Hacking',
    category: 'cyber',
    badge: 'CRITICAL SKILL',
    badgeType: 'critical',
    seatsLeftText: 'Filling Fast',
    duration: '5 Months (20 Wks)',
    durationCategory: 'bootcamp',
    deliveryMode: 'hybrid',
    modeText: 'Govt Recognized • War-Game Labs',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMq4T1ANc0qIFOZxlX_U6ngwn6yUAqRtVu6upfnpBBsNapL1fpb6v0Eu2LzJCLJd-0TDDnp60iYWE41TX-itgyJui4glHwzBHqcy1BJLrhmJ0UhdM-anMFqJDlHGpQzn6CZyW9chaZCjPTD5Kf09y1z3uBCYOSNPwzCAlayC6PPyerVhFsrKz49YpI8tSgqt2wygeJCaASIOJSFKYFOn6GAgXdlNT3PxqcLcA2TTSkPJWionPqfrWW',
    imageAlt: 'Security Operations Center terminal displaying real-time cyber defense network telemetry',
    bannerTags: 'SOC • Pen Testing • Kali',
    description: 'Defend and analyze corporate infrastructure. Covers offensive security, web vulnerabilities, SOC analysis, and Bug Bounty hunts.',
    techStack: ['Kali Linux', 'Burp Suite Pro', 'Wireshark', 'Metasploit', 'OSINT', 'Splunk', 'Nmap'],
    features: ['HackerOne Bounty Guidance', 'Live CTF Challenges', 'CEH Certification Prep'],
    avgPlacementSalary: 'PKR 125,000+',
    placementRate: '90% Placement',
    startDate: 'March 22, 2026',
    campusesAvailable: 'Arfa + Karachi Lab',
    instructor: {
      name: 'Usman Farooq (CISSP)',
      role: 'Top 100 HackerOne Bug Hunter • Red Team Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs96NW-4ICZa7FEK3Ikj8Bl5bKYVovvuBmvnCKF2fWSMAiJ8Y4JNwvhmp6_sm4LXvViGFcAvlrlcPteoSL466jhPMsd0onvIyS-KL-n0QDGtQnxtN5LYRTEK8nAsIlUCc68cE7YvUA6SJq35C4LBSxqTx365M6RQYmmD9fOr91bznbjKe58xl4EIC8yA8qHIV2BzG9Pf0Fbwh9zTH6tK5_fdsZRZ25JFzTNrbFfrcbWzBAS0hcgR7o',
      avatarAlt: 'Usman Farooq photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Network Protocols, Reconnaissance & Kali Linux Setup',
        topics: ['TCP/IP Deep Packet Analysis with Wireshark', 'OSINT Frameworks & Passive Threat Intelligence', 'Nmap Scripting Engine & Firewall Evasion', 'Active Directory Architecture & Kerberos']
      },
      {
        number: 2,
        title: 'OWASP Top 10 Web App Pentesting & Burp Automation',
        topics: ['SQL Injections, Blind Injections & Time Delays', 'Cross-Site Scripting (XSS) & CSRF Exploitations', 'Server-Side Request Forgery (SSRF) & Insecure Deserialization', 'Burp Suite Intruder & Turbo Intruder Scripts']
      },
      {
        number: 3,
        title: 'Privilege Escalation, Active Directory & Exploitation',
        topics: ['Linux Kernel Exploitation & SUID Abuse', 'Windows Token Impersonation & Pass-The-Hash', 'Metasploit Framework Custom Payload Crafting', 'BloodHound AD Graph Reconnaissance']
      },
      {
        number: 4,
        title: 'Bug Bounty Methodology & Live Target Submissions',
        topics: ['HackerOne & Bugcrowd Scope Rules', 'Subdomain Enumeration at Scale', 'Responsible Disclosure & Proof-of-Concept Reports', 'SOC Blue Teaming: Splunk Telemetry & Alert Triaging']
      }
    ]
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Designing & Graphics with AI',
    category: 'design',
    badge: 'CREATIVE TECH',
    badgeType: 'creative',
    seatsLeftText: '8 Seats Left',
    duration: '3.5 Months (14 Wks)',
    durationCategory: 'fast-track',
    deliveryMode: 'hybrid',
    modeText: 'Portfolio Ready • Client Mentorship',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADrhsjkVx8SmPN58I-8LXu9ARsO38i96RxndyHyDKhyaFcc8PvZf4gD6MPox3HR4UKjvwVkW22V1GLyVCbadmR5Y5q1VAYdfb2UG2J4FQHjhCkT9gq06SnQwrf1-j7r80yCS-SQQA8DSLiRTVtIAcKQpv1D8kgZfO4q1oQCHm71PSXWqmprCQj6fdPDYGP9DDp2l17p2hr7gwx7DocUaOFpHqH7fSxL3i1HjQtlp6PkabRkCG-RgOX',
    imageAlt: 'Modern digital design workspace showcasing Figma user experience prototypes',
    bannerTags: 'Figma • Design Systems • 3D',
    description: 'Create high-conversion digital experiences. Master user research, high-fidelity interaction design, and Midjourney-assisted creative workflows.',
    techStack: ['Figma Pro', 'Design Tokens', 'Midjourney', 'Maze Testing', 'Adobe Illustrator', 'Spline 3D'],
    features: ['Case Studies for Dribbble', 'Client Pitch Sessions', 'Figma Certificate'],
    avgPlacementSalary: 'PKR 95,000+',
    placementRate: '86% Placement',
    startDate: 'March 10, 2026',
    campusesAvailable: 'All Campuses + Online',
    instructor: {
      name: 'Areeba Bilal',
      role: 'Lead Product Designer • Fintech UX Specialist',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbvYrwEdrtbfpsX2I883HOeuyL0J5i30LkCWP1krPrNMKnEWL3ADZ4pRNs2FXIDjC0QWfejIah7dYZs2XUXlvXdm80Umu5_6ESXH_PRG2aQGkgKp8-K7nzq3AFo9GI3xqduOFBrs_0jm_U9xNaQqVgZz3pdu6czrhtwyVuFpF0565l44pyxG5a5KH2PRovixiL2VktrMD_rcoXRVmSpEVXxXQxOUjzXahPfv4cxM4derYxCfviLIE-',
      avatarAlt: 'Areeba Bilal photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Product Discovery, User Journey & Mental Models',
        topics: ['User Persona Mapping & Empathy Workshops', 'Information Architecture & Wireframing', 'Heuristic Evaluation & Usability Audits', 'Formulating Behavioral Hypotheses']
      },
      {
        number: 2,
        title: 'Scalable Figma Systems, Autolayout & Variables',
        topics: ['Figma Variables (Color, Spacing, Typography)', 'Complex Auto Layout & Responsive Frame Nesting', 'Interactive Component States & Micro-animations', 'Design-to-Code Handoff with Storybook Cues']
      },
      {
        number: 3,
        title: 'AI Asset Generation, High-Fidelity Micro-interactions',
        topics: ['Midjourney & Stable Diffusion Prompt Engineering', 'Spline 3D Embedded Web Micro-models', 'Usability Testing with Maze & Heatmap Analysis', 'Polishing a 2-Project Behance/Dribbble Portfolio']
      }
    ]
  },
  {
    id: 'growth-marketing',
    title: 'Digital Growth Marketing & E-Commerce',
    category: 'marketing',
    badge: 'E-COMMERCE',
    badgeType: 'ecom',
    seatsLeftText: 'Batch Open',
    duration: '3 Months (12 Wks)',
    durationCategory: 'fast-track',
    deliveryMode: 'hybrid',
    modeText: 'Real Ad Budgets • Shopify Partner',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAELZRSDH8baKZH0ebYLIvdIVkqquAdTKrsJSqr2DlkxwNCqS2AiNzQKUqJzlj752Vf7Fmc36jQPjTgttJQ14MpwjDh6PKCvYLeXR_-Rtizo_IJLaGd96uhgQSspLFIogNyV3_lumCgnugFmpiXgaU-fC4-eqJVgef3PwZL-6_2hwjV73uX4mHkEbAZ7Y4IzcHPoK6iWH35WpRi8cKKneLESpw7MK7uwr2aH6Tpt9cl-TmNRonIorCj',
    imageAlt: 'Performance digital marketing agency analytics screen showing paid ad ROAS statistics',
    bannerTags: 'Shopify • Meta Ads • TikTok',
    description: 'Scale stores and SaaS products with AI-driven content generation, programmatic media buying, SEO/AIO, and conversion rate optimization.',
    techStack: ['Meta Ads Manager', 'Google P-Max', 'TikTok Ads', 'Shopify', 'GA4 Analytics', 'Klaviyo', 'Perplexity AEO'],
    features: ['Live Ad Spend Grants', 'Shopify Store Setup', 'Conversion Rate Audits'],
    avgPlacementSalary: 'PKR 100,000+',
    placementRate: '89% Placement',
    startDate: 'March 12, 2026',
    campusesAvailable: 'All Campuses + Live',
    instructor: {
      name: 'M. Bilal Chaudhry',
      role: 'Ex-Daraz Growth Lead • Managed $3M+ Ad Spends',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cr7j0N-SSWY3590V9fZQxfHdWmI_TzB_TfgOX4OHwqS12Z4n44S30y6zEWKjMm3OGgyXIre30aTwone5eJ-MNyhOExpcT6AnI9kWMepZxy-NM6qXNFnfCQn_SjiNjtRudijHEJlq7-Ns82U1UePEFbR8vIiU5f3Iqm1z0SP6f3j9QzCPxuQKrsbCoZJtrcU4PkRvZw8QD9l8wB59LEGcIo4uarWVptZRWIOt93zxAjDylakR77SZ',
      avatarAlt: 'M. Bilal Chaudhry photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Paid Traffic Funnels & High-Conversion Creative Copy',
        topics: ['Meta CBO/ABO Campaign Architectures', 'TikTok Spark Ads & Hook-to-Action Scripts', 'Google Performance Max & Smart Bidding Strategies', 'AI-assisted Ad Creatives using Runway & CapCut']
      },
      {
        number: 2,
        title: 'Next-Gen Search: LLM Search Optimization (Perplexity/ChatGPT)',
        topics: ['Answer Engine Optimization (AEO/GEO)', 'Schema.org JSON-LD Entities for Brand Visibility', 'Programmatic Long-Tail Content Generation', 'Technical SEO Audits with Screaming Frog']
      },
      {
        number: 3,
        title: 'Cross-Border E-Commerce, ROAS Scaling & Retention',
        topics: ['Shopify Liquid Themes & High-Converting Checkout', 'Email & SMS Automation with Klaviyo', 'GA4 Attribution Modeling & Server-Side Tracking', 'Scaling Product Spend from $50/day to $2,000/day']
      }
    ]
  },
  {
    id: 'flutter-mobile',
    title: 'Flutter & Mobile App Development with AI',
    category: 'mobile',
    badge: 'CROSS PLATFORM',
    badgeType: 'cross-platform',
    seatsLeftText: '5 Seats Left',
    duration: '4 Months (16 Wks)',
    durationCategory: 'bootcamp',
    deliveryMode: 'hybrid',
    modeText: 'Store Publishing • Incubation Ready',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArCWu50vCtUJUYHTSl5OdxfpHEeI5PX3GA4_VsjdosQrgDV3T9mW1prZiuVKIYJD6HP2I0UogfCcSH7wMRvrVxpw-AbU0O9ZgrKijGMvpeZ5wHuaN4Po1io9PopPT86UEu1LVU4wBBr-PFPl9pZnBmGXAzRu9nPvZfHQBowePflvE4MLTL_rD3T7XCqeUgYVnfJiuRz5pRZpap9s9f5RugBknCF8WP-Kh29euGX6jETFVjldJiFPED',
    imageAlt: 'Smartphone mockups floating above laptop demonstrating modern cross-platform iOS and Android mobile app interfaces',
    bannerTags: 'Flutter • Dart • Firebase',
    description: 'Engineer high-performance native iOS and Android apps using Flutter. Integrate on-device ML models, push services, and state architecture.',
    techStack: ['Flutter 3.x', 'Dart', 'Bloc Pattern', 'Firebase Cloud', 'On-Device AI', 'GraphQL', 'Riverpod'],
    features: ['Publish 2 Apps to Stores', 'On-Device LLM Integration', 'Fintech Clone Project'],
    avgPlacementSalary: 'PKR 105,000+',
    placementRate: '87% Placement',
    startDate: 'March 25, 2026',
    campusesAvailable: 'Arfa + Bahria Lahore',
    instructor: {
      name: 'Shahzaib Raza',
      role: 'Mobile Tech Lead • 40+ Apps Published',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfX1KPvy38pY3HSk9oF1eclQrm-v_SLhAPH-xDfUStpbAEp9n2C7qn67-zMZ_u9gag-XdBoidG3FxJHOXj1f8ndI3UqOLe0QcfpxKxLTp88uCijxk69N-rPKwy_TqbIFhX8ZWkhEDcVekgGokzdT9gQx79UF9caCLdaecppqlZa0GWFrTrYqMkCK43zP46FbhK8ubN_SHMltfw9Fk9YWeICLkPL5jvS2cZazNHj5BByYG0Yj4n6Zka',
      avatarAlt: 'Shahzaib Raza photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Dart OOP Fundamentals & Reactive UI Tree',
        topics: ['Dart Null Safety, Streams & Isolates', 'Stateless vs Stateful Widgets Internals', 'Custom Paint & High-Performance RenderObjects', 'AnimationController & Physics-based Transitions']
      },
      {
        number: 2,
        title: 'State Management: Provider & Flutter Bloc Architecture',
        topics: ['Events, States & BlocObserver', 'HydratedBloc for Offline Persistence', 'Clean Architecture (Data, Domain, Presentation Layers)', 'Dependency Injection with GetIt']
      },
      {
        number: 3,
        title: 'Local Storage, SQLite, REST Integration & Push Alarms',
        topics: ['Offline-First Caching with Hive & Isar', 'Dio HTTP Client with Interceptors & JWT Tokens', 'Firebase Auth, Firestore & Cloud Messaging (FCM)', 'Integrating TensorFlow Lite on iOS & Android']
      },
      {
        number: 4,
        title: 'App Store & Google Play Deployment + On-device LLM',
        topics: ['Fastlane Automation & Code Signing Certs', 'Play Console & App Store Connect Submission', 'Crashlytics, In-App Purchases & Monetization', 'Running Local Offline AI Chat Models in Flutter']
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Big Data Analytics',
    category: 'data',
    badge: 'MICRO-DEGREE',
    badgeType: 'micro-degree',
    seatsLeftText: 'Only 3 Seats Left',
    duration: '6 Months (24 Wks)',
    durationCategory: 'micro-degree',
    deliveryMode: 'hybrid',
    modeText: 'On-Campus & Online',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB39un-LtMzqUzoCVIsicY80-tgJDw9hg2nI8x0LFlwf1tjocBi3b5uSI6nJjWXKoUmD3V4ZEjsr8hzxfh4mj_vgFS_7EQbP-evwjrdx8YlQ4cY67s4Oz6ZAquh5zL0TemN2UoRtpZb5nFV_O-aRLkH__p3HkIKbPwzki6gMB6wyUTqYlwMW_34g0okSIESBAU9vIlNpf5LBOiEyzB4zoBUL3IpgShiAJJ_hNEcLR5-c8LFjEkyw1ox',
    imageAlt: 'Portrait of an experienced female data scientist with data analytics screens visible',
    bannerTags: 'Python • SQL • Tableau • Spark',
    description: 'Transform unstructured big data into actionable machine learning models using Python Pandas, SQL, Tableau, PowerBI, and AWS Spark.',
    techStack: ['Python & SciKit', 'SQL & NoSQL', 'PowerBI', 'Tableau', 'Apache Spark', 'Databricks'],
    features: ['Corporate Business Datasets', 'Kaggle Competition Mentorship', 'Direct Bank Hiring Pipeline'],
    avgPlacementSalary: 'PKR 130,000+',
    placementRate: '91% Placement',
    startDate: 'March 20, 2026',
    campusesAvailable: 'Arfa Tower + Online',
    instructor: {
      name: 'Dr. Nida Fatima',
      role: 'Chief Data Strategist • Telco Analytics Veteran',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB39un-LtMzqUzoCVIsicY80-tgJDw9hg2nI8x0LFlwf1tjocBi3b5uSI6nJjWXKoUmD3V4ZEjsr8hzxfh4mj_vgFS_7EQbP-evwjrdx8YlQ4cY67s4Oz6ZAquh5zL0TemN2UoRtpZb5nFV_O-aRLkH__p3HkIKbPwzki6gMB6wyUTqYlwMW_34g0okSIESBAU9vIlNpf5LBOiEyzB4zoBUL3IpgShiAJJ_hNEcLR5-c8LFjEkyw1ox',
      avatarAlt: 'Dr. Nida Fatima photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Advanced Statistical Analysis, Linear Algebra & Python',
        topics: ['Hypothesis Testing, P-values & A/B Experiments', 'Pandas & Polars Multi-million Row Vectorization', 'Exploratory Data Analysis (EDA) Best Practices', 'Data Cleaning & Outlier Imputation']
      },
      {
        number: 2,
        title: 'Relational Databases, Complex Queries & ETL Pipelines',
        topics: ['Window Functions, CTEs & Advanced Joins', 'PostgreSQL & Snowflake Cloud Warehousing', 'Building Automated Python Airflow ETL Pipelines', 'Connecting Databases to Live BI Feeds']
      },
      {
        number: 3,
        title: 'Supervised & Unsupervised Machine Learning Algorithms',
        topics: ['Random Forests, XGBoost & LightGBM Fine-Tuning', 'Clustering (K-Means, DBSCAN) for Customer Segmentation', 'Dimensionality Reduction (PCA, t-SNE)', 'Model Explainability with SHAP & LIME']
      },
      {
        number: 4,
        title: 'Executive Business Intelligence Dashboards & Cloud ML',
        topics: ['DAX Expressions & Real-time PowerBI Dashboards', 'Interactive Storytelling in Tableau Desktop', 'Big Data Streaming with PySpark', 'Deploying ML Models as Streamlit Cloud Apps']
      }
    ]
  },
  {
    id: 'game-dev-3d',
    title: '3D Animation, Game Dev & Cinematic VFX',
    category: '3d',
    badge: 'CREATIVE STUDIO TRACK',
    badgeType: 'creative',
    seatsLeftText: 'Weekend Batch Available',
    duration: '3 Months (12 Wks)',
    durationCategory: 'bootcamp',
    deliveryMode: 'campus',
    modeText: 'Arfa Tower Lab Only',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_WWGZHKmh1EOVT8sP4_wNcApGKmXAZ8wzpbm9Lw3ZZ7OvcYrrJUKL0vMQt2LVKwwHXF8nK4vb4-RNesd-imBxEbemd6gVBvPoxRd3qkcy-QWwW5awVpsL-VhbWqdsD-CI0CheJOHNkL69Ht9Qu1a7bS-_rivbMIYpW3vqkIivQraxlI_8StX0xHNPPlTnKkMeunAe6-YyBPzbuloxu53dDM8PHCGPpqzrZoM4kDRQFu-7kLJ7WgC',
    imageAlt: 'Experienced 3D CGI artist in dark lighting studio with 3D model viewport on monitor',
    bannerTags: 'Unreal Engine 5 • Blender • VFX',
    description: 'Industry pipeline standard 3D asset modeling, real-time lighting in Unreal Engine 5, character rigging, and high-impact VFX for games & CGI ads.',
    techStack: ['Unreal Engine 5', 'Blender 4', 'Autodesk Maya', 'Substance 3D', 'Houdini Intro', 'Lumen & Nanite'],
    features: ['RTX 4090 Dedicated Workstations', 'Direct Game Studio Job Fest', 'AAA Showreel Mentorship'],
    avgPlacementSalary: 'PKR 115,000+',
    placementRate: '84% Placement',
    startDate: 'March 28, 2026',
    campusesAvailable: 'Arfa Tower Lab Only',
    instructor: {
      name: 'Kamran Rafiq',
      role: 'Lead 3D Director • AAA Game Studio Veteran',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN_WWGZHKmh1EOVT8sP4_wNcApGKmXAZ8wzpbm9Lw3ZZ7OvcYrrJUKL0vMQt2LVKwwHXF8nK4vb4-RNesd-imBxEbemd6gVBvPoxRd3qkcy-QWwW5awVpsL-VhbWqdsD-CI0CheJOHNkL69Ht9Qu1a7bS-_rivbMIYpW3vqkIivQraxlI_8StX0xHNPPlTnKkMeunAe6-YyBPzbuloxu53dDM8PHCGPpqzrZoM4kDRQFu-7kLJ7WgC',
      avatarAlt: 'Kamran Rafiq photo'
    },
    syllabusModules: [
      {
        number: 1,
        title: 'Hard-Surface & Organic 3D Modeling Techniques',
        topics: ['Blender 4 Mesh Topology & Non-Destructive Modifiers', 'Subdivision Surface Sculpting in ZBrush/Blender', 'High-to-Low Poly Baking Workflows', 'Modular Environment Kit Creation']
      },
      {
        number: 2,
        title: 'PBR Texturing, UV Unwrapping & Substance Painter',
        topics: ['Texel Density & Efficient UV Packing', 'Physical Based Rendering (Albedo, Roughness, Normal, Metallic)', 'Procedural Smart Masks & Weathering in Substance 3D', 'Export Presets for Unreal Engine 5']
      },
      {
        number: 3,
        title: 'Character Rigging & Animation Timing Fundamentals',
        topics: ['Inverse Kinematics (IK/FK) Bone Setups in Maya', 'Weight Painting & Deformation Corrective Blendshapes', '12 Principles of Animation Applied to Game Sprites', 'Motion Capture Cleanup Workflows']
      },
      {
        number: 4,
        title: 'Unreal Engine Blueprints, Lumen Lighting & VFX Render',
        topics: ['UE5 Nanite Geometry & Lumen Global Illumination', 'Niagara Particle Systems (Fire, Explosions, Magic FX)', 'Visual Blueprint Scripting for Player Interaction', 'Cinematic Camera Sequencer Rendering for Game Showreel']
      }
    ]
  }
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    id: 'bilal-ahmed',
    name: 'Bilal Ahmed',
    initials: 'BA',
    batch: 'BATCH 2025',
    track: 'Full Stack AI Engineering',
    company: 'Systems Ltd',
    role: 'AI Engineer',
    salaryHike: '+280% SALARY HIKE',
    quote: '"I had zero coding background. After completing the 6-month Full Stack AI bootcamp, NexTalent scheduled 4 technical interviews. I was hired at Systems Ltd before graduation."',
    campus: 'Arfa Tower, Lahore'
  },
  {
    id: 'zainab-fatima',
    name: 'Zainab Fatima',
    initials: 'ZF',
    batch: 'BATCH 2024',
    track: 'Advance Cyber Security',
    company: 'Remote UK Client',
    role: 'SOC Analyst',
    salaryHike: 'REMOTE $1,800/MO',
    quote: '"The Cyber Security lab practicals and bug bounty exercises prepared me for real attacks. I achieved NAVTTC certification and now work as a SOC Analyst for a UK fintech client."',
    campus: 'Karachi Hub'
  },
  {
    id: 'muhammad-usman',
    name: 'Muhammad Usman',
    initials: 'MU',
    batch: 'BATCH 2025',
    track: 'Frontend & Full Stack Dev',
    company: 'PureLogics',
    role: 'Frontend Eng',
    salaryHike: '+180% SALARY HIKE',
    quote: '"The instructors at Arfa Tower pushed us beyond tutorials to real-world Next.js cloud production. The portfolio reviews and mock sessions completely changed my confidence."',
    campus: 'Garden Town, Lahore'
  },
  {
    id: 'hamza-malik',
    name: 'Hamza Malik',
    initials: 'HM',
    batch: 'Fall 2025',
    track: 'Full Stack AI Engineering',
    company: 'Systems Limited',
    role: 'Associate AI Dev',
    salaryHike: '+210% JUMP',
    quote: '"I was a non-CS graduate stuck in basic data entry. NexTalent not only taught me Python and LLM fine-tuning, but their mock interviews helped me crack Systems Limited in my very first technical loop."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB40hOq8ZmXG4eeVgoLY3MLwyyRVIwy6joQ3qrDgrVq4TcHwnYxnO3zdEDKIJJhYNiyXTF9vBy-NUG08I2TMYC_D5xRfruE_UZeX9xGWBOxAmk4QosOsE08vxe0dhFl_Brl8uikg5Rjvo74b73bPAHLQ1bIhfOTwXGtF4p7KR3fXjLlAmjoXgN1Z1wweETMJ3OPOTYTow_Ew2pNnfb4YwwfuI37fJyWZpS_82Kz3ooMCi6OlG_xh7sO',
    campus: 'Arfa Tower, Lahore'
  },
  {
    id: 'fatima-tariq',
    name: 'Fatima Tariq',
    initials: 'FT',
    batch: 'Summer 2025',
    track: 'Advance Cyber Security',
    company: 'Habib Bank Ltd (HBL)',
    role: 'SOC Security Analyst',
    salaryHike: '+175% JUMP',
    quote: '"The TEVTA and NAVTTC accredited penetration testing lab was an absolute game changer. NexSkill connected me directly with HBL’s cyber risk division during the Job Fest."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWpYc-Z3_yPed2eeWo0ekTaLWGqdYNSbIGPrBH97DRBWpxeYOp_dPj7DgRQTm9GHG7ZpEaA787gcbW7bGDT1zhvGE3o5Y3xpo1vlVmkRvfhPURDGhIl1wmXKOHb1whtG0gzyG6Bpvjl2UTgE7VS4c9Bw9axZKYh2LvdPwYtd-VWvpqFwaHYXjyTBV0K33E0TW-PfYZnGztbgpIPZSJiOqY-WMwrjjrVdBGMfxqibRn6_un2xApNdlE',
    campus: 'PARSA Tower, Karachi'
  },
  {
    id: 'zeeshan-ahmed',
    name: 'Zeeshan Ahmed',
    initials: 'ZA',
    batch: 'Spring 2025',
    track: 'Game Dev & 3D Modeling',
    company: 'The Game Storm Studios',
    role: 'Unity Gameplay Dev',
    salaryHike: '+190% JUMP',
    quote: '"NexTalent reviewed my Unity portfolio project-by-project. They knew exactly what Game Storm looks for in physics optimization and asset management. I had 2 offers within 10 days."',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHhu0invIEuHwbD7hc5JAzSSge8DyfPTqLwzf4UVg5UTVrf4CRhOvh7_DMlY3jBRVwRnC7TgaEIubbByRieyy1dgUfZh5bapLwsVEknY8Kf5FdDhqR1KqowrN5fx-UTKNaam6_60iA5-Rb-QhVqnO4t5ZAP72gvS-mmMGmJpBvocqP0sL4EgNVID5sC7zRqPsoSvkqXho-JvEuvk1jDJdP4spSiH-QGV6T85ZApU1daENUBQmnDo0P',
    campus: 'Arfa Tower, Lahore'
  }
];

export const SALARY_BENCHMARKS = [
  {
    track: 'Full Stack AI & Software Engineering',
    range: 'PKR 140,000 - 250,000 / mo',
    entry: 'Entry: PKR 90K',
    top: 'Top 10% Remote: PKR 350K+',
    barWidth: '88%',
    color: 'bg-primary-container'
  },
  {
    track: 'Advance Cyber Security & SOC',
    range: 'PKR 120,000 - 220,000 / mo',
    entry: 'Entry: PKR 85K',
    top: 'Top 10%: PKR 280K',
    barWidth: '78%',
    color: 'bg-tertiary-container'
  },
  {
    track: 'Digital Growth Marketing with AI',
    range: 'PKR 90,000 - 180,000 / mo',
    entry: 'Entry: PKR 75K',
    top: 'Freelance High: PKR 300K+',
    barWidth: '65%',
    color: 'bg-amber-500'
  },
  {
    track: 'Game Development (Unity/Unreal)',
    range: 'PKR 110,000 - 210,000 / mo',
    entry: 'Entry: PKR 80K',
    top: 'Studio Lead: PKR 260K',
    barWidth: '72%',
    color: 'bg-emerald-500'
  }
];
