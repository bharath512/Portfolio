/**
 * Single source of truth for every piece of content on the site.
 * Edit text, links and lists here — no markup changes needed.
 *
 * Rules for this file:
 *  - Pure data, no imports of images/assets (vite.config.js reads `site` from here).
 *  - Images are referenced by path relative to src/assets/img/ (see src/utils/assets.js).
 *  - Anything marked TODO is missing from the resume and needs your input.
 */

const url = 'https://rbharath.netlify.app'; // TODO(verify): taken from the old site's "Website" field

/* -------------------------------------------------------------------------- */
/* Site / SEO (injected into <head> by vite.config.js at build time)           */
/* -------------------------------------------------------------------------- */
export const site = {
  url,
  name: 'Bharath R',
  title: 'Bharath R | DevSecOps Engineer · Cloud Security · AWS',
  description:
    'DevSecOps Engineer securing and automating a 9,000+ server hybrid AWS and on-premise estate at 99.8% uptime. IAM, Infrastructure as Code, CI/CD and cloud security.',
  certificatesTitle: 'Certificates | Bharath R',
  certificatesDescription:
    'Certifications and course completions earned by Bharath R, including AWS Certified Solutions Architect – Associate.',
  ogImage: `${url}/og-image.jpg`,
  ogImageAlt: 'Portrait of Bharath R, DevSecOps Engineer',
  themeColor: '#00002e',
};

/* -------------------------------------------------------------------------- */
/* Profile / hero                                                              */
/* -------------------------------------------------------------------------- */
export const profile = {
  name: 'Bharath R',
  role: 'DevSecOps Engineer',
  // Rotated by the hero typing effect. Taken from the resume headline.
  headline: ['DevSecOps Engineer', 'Cloud Security', 'Infrastructure as Code', 'CI/CD', 'AWS'],
  location: 'Chennai, India',
  email: 'rbharath0512@gmail.com', // resume value (the old site used bharathr512@duck.com)
  phone: '+91 86809 83112',
  phoneHref: 'tel:+918680983112',
  // TODO: date of birth is intentionally omitted (the reference design shows one; your resume does not).
  photo: {
    src: 'profile-portrait.webp',
    alt: 'Portrait of Bharath R, wearing glasses and a lavender hoodie, with green hills behind him',
    width: 874,
    height: 969,
  },
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/r-bharath/',
  github: 'https://github.com/bharath512',
  // TODO: put Bharath_R_DevSecOps_Resume.pdf in /public and change this to '/Bharath_R_DevSecOps_Resume.pdf'.
  // Until then this is the Google Drive folder from the old site.
  resume: 'https://drive.google.com/drive/folders/1pPumxFxdVbWE2jqz5159bYRYSihpIZky',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/* -------------------------------------------------------------------------- */
/* About                                                                       */
/* -------------------------------------------------------------------------- */
export const about = {
  heading: 'About',
  subtitle: 'Systems Engineer at TCS · Delta Air Lines account',
  summary: [
    'DevSecOps Engineer with 5 years at TCS on the Delta Air Lines account, securing and automating a 9,000+ server hybrid estate across on-premise and AWS at 99.8% uptime.',
    'AWS Certified Solutions Architect with hands-on depth in IAM least-privilege design, patch and vulnerability management, and Infrastructure as Code (Terraform, CloudFormation, Ansible).',
    'Cut manual effort by 75% through automation, reduced MTTR by 40%, and shipped self-healing serverless remediation that extended 1,500 servers with no human involvement.',
  ],
  highlights: [
    { value: '9,000+', label: 'servers in the hybrid estate' },
    { value: '99.8%', label: 'uptime' },
    { value: '75%', label: 'less manual effort via automation' },
    { value: '40%', label: 'lower MTTR' },
    { value: '1,500', label: 'servers extended hands-free' },
  ],
  photo: {
    src: 'profile-landscape.webp',
    alt: 'Bharath R sitting on a rock above a green valley under a cloudy sky',
    width: 1200,
    height: 1200,
  },
};

/* -------------------------------------------------------------------------- */
/* Skills (grouped exactly as on the resume)                                   */
/* An item is either a string, or { name, level } where level is 0-100 and     */
/* renders an animated proficiency bar. Your resume has no proficiency numbers,*/
/* so no bars are shown until you add some.                                    */
/* TODO: add `level` to any skill you want shown as a bar, e.g.               */
/*       { name: 'Python', level: 90 }                                        */
/* -------------------------------------------------------------------------- */
export const skills = {
  heading: 'Technical Skills',
  groups: [
    {
      title: 'Cloud & Cloud Security',
      items: [
        'AWS EC2', 'Lambda', 'IAM', 'SSM', 'CloudFormation', 'CloudWatch', 'VPC', 'S3',
        'IAM least-privilege policy design', 'Role-based access control', 'Secure remote execution with SSM',
      ],
    },
    {
      title: 'Infrastructure as Code & Configuration',
      items: ['Terraform', 'AWS CloudFormation', 'Ansible'],
    },
    {
      title: 'Containers & CI/CD',
      items: [
        'Docker (Dockerfiles, image builds, image hardening)', 'CI/CD pipelines',
        'Bash (50+ production scripts)', 'Python automation', 'Event-driven serverless remediation',
      ],
    },
    {
      title: 'Web & Application Security',
      items: ['OWASP Top 10', 'Secure REST API design', 'Token-based authentication', 'Input validation', 'Secrets handling'],
    },
    {
      title: 'Linux Security & Infrastructure',
      items: [
        'RHEL', 'CentOS', 'Ubuntu', 'Patch and vulnerability management', 'User and permission management',
        'Kernel and file system troubleshooting', 'OS upgrades', 'VMware vCenter', 'Nutanix', 'HP/IBM servers',
      ],
    },
    {
      title: 'Incident Response & Process',
      items: ['ITIL incident management', 'Root cause analysis', 'SLA-driven escalation', 'CloudWatch monitoring', 'Technical documentation'],
    },
    {
      title: 'AI-Driven Operations',
      items: [
        'AWS Bedrock (Knowledge Bases, Guardrails)', 'Amazon Q', 'LangChain', 'LangGraph', 'RAG', 'Function calling',
        'FAISS', 'Vector databases', 'Claude', 'DeepSeek', 'Prompt engineering', 'Evaluation pipelines',
        'SageMaker', 'MLflow', 'PyTorch', 'TensorFlow',
      ],
    },
    {
      title: 'Languages, Backend & Data',
      items: [
        'Python (OOP, async)', 'SQL', 'Bash', 'FastAPI', 'Flask', 'Pydantic',
        'PostgreSQL (schema design, normalization)', 'MongoDB', 'ETL / data pipelines',
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */
export const experience = {
  heading: 'Experience',
  company: 'Tata Consultancy Services',
  client: 'Delta Air Lines',
  location: 'Chennai, India',
  period: 'Dec 2021 – Present',
  roles: [
    {
      title: 'Systems Engineer – DevSecOps & Cloud Automation',
      period: 'Jan 2024 – Present',
      bullets: [
        'SME for AWS infrastructure and major-incident response across a 9,000+ server hybrid estate (HP/IBM physical, VMware/Nutanix virtual, AWS EC2) at 99.8% uptime, directing L1/L2 engineers through business-critical escalations.',
        'Ran OS patching, vulnerability remediation and upgrade cycles across RHEL, CentOS and Ubuntu fleets; enforced least-privilege access through fleet-wide user, group and permission management and scoped IAM roles for automation.',
        'Built the compliance data foundation: a normalized PostgreSQL schema unifying AWS SSM, on-premise patch and CMDB inventory for 8,000+ servers, fed by Python pipelines that de-duplicate host records and validate data quality, plus SQL compliance reporting that replaced a manual spreadsheet process.',
        'Shipped event-driven file system auto-extension on AWS Lambda, IAM and SSM Automation, used to extend 1,500 servers in a single project with no human involvement.',
        // TODO(verify): the resume PDF shows "N25 engineer-hours per month" (likely "~25"). Confirm the exact figure.
        'Led the design, build and deployment of a production AI troubleshooting agent (Python, LangChain, function calling, Claude) that classifies incidents, runs first-level diagnostics, resolves roughly half on its own and escalates the rest, cutting L1 resolution from 30 minutes to 10 and returning ~25 engineer-hours per month.',
        'Built a RAG knowledge assistant over 200+ internal SOPs (LangChain, FAISS, PostgreSQL, Claude) with every answer traceable to a source SOP; productionized GenAI on AWS Bedrock with Guardrails and integrated Amazon Q for automated analysis of infrastructure events.',
        'Built secure REST APIs with FastAPI and Pydantic, using token-based authentication and strict input validation.',
        'Monitored workloads with AWS CloudWatch to catch anomalies before business impact, and tuned EC2 workloads to improve utilization and reduce latency.',
        'Mentor engineers and run workshops on AWS best practices, automation tooling and incident response across infrastructure and application teams.',
      ],
    },
    {
      title: 'Assistant System Engineer',
      period: 'Dec 2021 – Dec 2023',
      bullets: [
        'Provisioned repeatable infrastructure with AWS CloudFormation across physical, virtual and cloud server fleets.',
        'Automated Linux fleet operations with 50+ Bash scripts and Ansible playbooks for configuration management and automated remediation, cutting manual effort by 75%.',
        'Reduced MTTR by 40% through root cause analysis at kernel, file system and service level, feeding each finding back into automation.',
        'Followed ITIL-aligned incident management within defined SLAs; authored RCA reports and permanent fixes adopted across support teams.',
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* `links` is [{ label, href }]. The first four come from the resume; the      */
/* resume gives no URLs for them.                                              */
/* TODO: add repo / write-up links to the resume projects (or leave empty).    */
/* -------------------------------------------------------------------------- */
export const projects = {
  heading: 'Projects',
  items: [
    {
      title: 'Serverless File System Auto-Extension',
      description:
        'Event-driven self-healing remediation that extends file systems on threshold breach using scoped IAM roles and SSM Automation; extended 1,500 servers in one project with zero manual effort.',
      tags: ['AWS Lambda', 'IAM', 'SSM Automation', 'CloudWatch', 'Python'],
      links: [],
    },
    {
      title: 'Fleet Operations & Patching Platform',
      description:
        'Full-stack platform centralising patch state, scheduling and compliance reporting for 8,000+ servers on a normalized PostgreSQL schema fed by three-plus upstream sources.',
      tags: ['Python', 'Flask', 'PostgreSQL', 'SQL', 'JavaScript'],
      links: [],
    },
    {
      title: 'AI Troubleshooting Agent',
      status: 'In production',
      description:
        'Classifies an incident, retrieves the matching SOP, runs diagnostics, then resolves or escalates with findings.',
      tags: ['Python', 'LangChain', 'Function calling', 'Claude', 'AWS Bedrock'],
      links: [],
    },
    {
      title: 'RAG Knowledge Assistant',
      status: 'In production',
      description: 'Document-grounded chatbot over 200+ SOPs for live incident resolution.',
      tags: ['Python', 'LangChain', 'FAISS', 'Bedrock Knowledge Bases', 'PostgreSQL'],
      links: [],
    },

    // ---- Carried over from the previous site (NOT on the resume) ----------
    // TODO(verify): keep, edit or delete these three Python security tools.
    {
      title: 'ARP Spoofing Tool (MITM)',
      description:
        'Python-based ARP spoofing tool. It spoofs the victim machine into connecting to us instead of the gateway, and the gateway into connecting to us instead of the victim machine.',
      tags: ['Python'],
      links: [
        { label: 'GitHub', href: 'https://github.com/bharath512/python_cybersecurity_tools/blob/main/arp_spoof.py' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/r-bharath/details/projects/' },
      ],
    },
    {
      title: 'Network Scanner',
      description:
        'Python script to perform comprehensive network scanning and list the MAC addresses mapped to the IP addresses of associated devices.',
      tags: ['Python'],
      links: [{ label: 'GitHub', href: 'https://github.com/bharath512/python_cybersecurity_tools/blob/main/networkscanner.py' }],
    },
    {
      title: 'MAC Changer',
      description: 'Automated script for modifying the MAC address of a specified network adapter at OS level.',
      tags: ['Python'],
      links: [{ label: 'GitHub', href: 'https://github.com/bharath512/python_cybersecurity_tools/blob/main/macchanger.py' }],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Education & certifications (home-page section — from the resume)            */
/* -------------------------------------------------------------------------- */
export const education = {
  heading: 'Education & Certifications',
  degrees: [
    {
      title: 'B.E. Electronics and Instrumentation Engineering',
      school: 'KCG College of Technology, Chennai',
      period: '2021',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: 'Nov 2024', // resume says Nov 2024; the old site said Dec 2024 — TODO(verify)
      href: 'https://www.credly.com/badges/c8b7c600-5ddb-41bf-a597-58ca39cd6a9e/public_url',
    },
    {
      name: 'Hands-on Approach to Advanced AI for Real-World Applications (HAAI++)',
      issuer: 'IIT Kharagpur',
      date: 'Oct 2026',
    },
    {
      name: 'TCS Wings 1 – Digital',
      issuer: 'Tata Consultancy Services',
      // TODO: the resume gives no date for this one.
    },
  ],
  galleryLabel: 'View all certificates and course completions',
};

/* -------------------------------------------------------------------------- */
/* Certificate gallery (certificates.html)                                     */
/* Carried over from the previous site (NOT on the resume, except AWS).        */
/* `image` is relative to src/assets/img/. `category` must match a key in      */
/* `certificateCategories`.                                                    */
/* TODO(verify): keep, edit or delete any of these; add images for HAAI++ and  */
/*               TCS Wings if you have them.                                   */
/* -------------------------------------------------------------------------- */
export const certificateCategories = {
  google: 'Google Certs',
  tcm: 'TCM Security Certs',
  thm: 'TryHackMe Certs',
  other: 'Other',
};

export const certificates = {
  heading: 'Certificates',
  items: [
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services (AWS)', date: 'Nov 2024', category: 'other', image: 'certificates/aws-certified-solutions-architect-associate.webp', href: 'https://www.credly.com/badges/c8b7c600-5ddb-41bf-a597-58ca39cd6a9e/public_url' },
    { name: 'CompTIA Network+', issuer: 'Udemy', date: 'Jun 2024', category: 'other', image: 'certificates/networkplus.webp' },
    { name: 'Jr. Penetration Tester', issuer: 'TryHackMe', date: 'Apr 2024', category: 'thm', image: 'certificates/jr-pentester.webp' },
    { name: 'Practical Ethical Hacking', issuer: 'TCM Security', date: 'Oct 2023', category: 'tcm', image: 'certificates/peh.webp' },
    { name: 'Linux Privilege Escalation', issuer: 'TCM Security', date: 'Nov 2023', category: 'tcm', image: 'certificates/linuxprivesc.webp' },
    { name: 'Windows Privilege Escalation', issuer: 'TCM Security', date: 'Dec 2023', category: 'tcm', image: 'certificates/winprivesc.webp' },
    { name: 'Foundations of Cybersecurity', issuer: 'Google | Coursera', date: 'Jan 2024', category: 'google', image: 'certificates/foundations-of-cybersecurity.webp' },
    { name: 'Play It Safe: Manage Security Risks', issuer: 'Google | Coursera', date: 'Jan 2024', category: 'google', image: 'certificates/managing-security-risks.webp' },
    { name: 'Networks and Network Security', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/network-security.webp' },
    { name: 'Tools of the Trade: Linux and SQL', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/linux-and-sql.webp' },
    { name: 'Assets, Threats, and Vulnerabilities', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/atv.webp' },
    { name: 'Sound the Alarm: Detection and Response', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/detandres.webp' },
    { name: 'Automate Cybersecurity Tasks with Python', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/python.webp' },
    { name: 'Put It to Work: Prepare for Cybersecurity Jobs', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/put-it-to-work-prepare-for-cybersecurity-jobs.webp' },
    { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google | Coursera', date: 'Feb 2024', category: 'google', image: 'certificates/google-cybersecurity-certificate.webp' },
    { name: 'Introduction to Cyber Security', issuer: 'TryHackMe', date: 'Mar 2024', category: 'thm', image: 'certificates/intro-to-cyber-security.webp' },
    { name: 'Pre Security', issuer: 'TryHackMe', date: 'Mar 2024', category: 'thm', image: 'certificates/pre-security.webp' },
    { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', category: 'other', image: 'certificates/networking-essentials.webp' },
    { name: 'Network Virtualization Concepts', issuer: 'VMware', category: 'other', image: 'certificates/it-academy-network-virtualization-concepts.webp' },
  ],
};

/* -------------------------------------------------------------------------- */
/* Contact & footer                                                            */
/* -------------------------------------------------------------------------- */
export const contact = {
  heading: 'Contact',
  blurb: 'Wanna join for a tech convo? Ping me.', // wording from the old site's "Facts" section
};

export const footer = {
  text: 'Bharath R',
};
