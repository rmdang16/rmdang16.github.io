export const profile = {
  name: 'Hi, I\'m Ryan!',
  role: 'Computer Engineering',
  school: 'Brown University',
  bio: [
    "I'm a student at Brown University pursuing a Sc.B. in Computer Engineering.",
    'Some of my hobbies include guitar, piano, and volleyball!',
  ],
  resumeUrl: '/Ryan Dang Resume.pdf',
  portraitUrl: '/portillo.JPEG',
  email: 'ryan_dang@brown.edu',
}

export const social = {
  github: 'https://github.com/rmdang16',
  linkedin: 'https://www.linkedin.com/in/ryan-dang-brown/',
}

export type Project = {
  title: string
  description: string
  imageUrl: string
  tech: string[]
  demoUrl?: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Reimbursement Dashboard',
    description:
      'Built a Next.js/Supabase reimbursement dashboard that syncs Google Form submissions, enforces role-based approvals, stores receipts securely, and tracks club spending and balance.',
    imageUrl: '/projects/reimbursement-dashboard.png',
    tech: ['Next.js', 'REST APIs', 'SQL'],
    demoUrl: 'https://reimbursement-dash.vercel.app/login',
    repoUrl: 'https://github.com/rmdang16/reimbursement-dashboard',
  },
  {
    title: '5-Stage Pipelined RISC-V Processor',
    description:
      'Designed a 5-stage RISC-V pipeline in Verilog with hazard detection, data forwarding, branch resolution, and a self-checking testbench verifying functional correctness against expected register and memory state.',
    imageUrl: '/projects/riscv-pipeline.svg',
    tech: ['Verilog', 'Vivado', 'CPU'],
    
    
  },
  {
    title: 'Remote Door Lock',
    description:
      'Created a smart lock system using an Arduino Uno R4 WiFi as an embedded HTTPS server, controlling a servo-actuated deadbolt via authenticated HTTP POST requests secured with SHA-256 hashing',
    imageUrl: '/projects/study-timer.svg',
    tech: ['Arduino', 'C', 'HTTP'],
    
    repoUrl: 'https://github.com/rmdang16/remote-door-lock',
  },
  {
    title: 'Pong',
    description:
      'A Verilog-based intersection controller simulated in ModelSim and demonstrated on a DE10-Lite with timing diagrams and hazard logic',
    imageUrl: '/projects/pong.svg',
    tech: ['Verilog', 'FPGA', 'Quartus', 'ModelSim'],
    
    repoUrl: 'https://github.com/rmdang16/pong',
  },
]

export type Experience = {
  role: string
  organization: string
  period: string
  description: string
}

export const experience: Experience[] = [
  {
    role: 'Product Engineer',
    organization: 'Kyron Medical',
    period: 'Summer 2026',
    description:
      'Assisted with schematic capture, brought up prototype boards, wrote bring-up scripts, and documented test procedures for a sensor subsystem.',
  },
  {
    role: 'Hardware Security Research Intern',
    organization: 'Wright State University Research Experience for Undergraduates (REU) ',
    period: 'Summer 2025',
    description:
      'Implemented a Ring Oscillator Network (RON) on a Basys 3 Artix-7 FPGA in Vivado for hardware Trojan detection using side-channel analysis and measuring frequencies to detect localized power anomalies. Applied machine learning (SVM and Random Forest) with scikit-learn and pandas for hardware Trojan detection, achieving 98.8% accuracy and 2% false positive rate, improving robustness over prior methods',
  },
  {
    role: 'ENGN 0040 Dynamics and Vibrations Teaching Assistant',
    organization: 'Brown University',
    period: 'Spring Semester 2025',
    description:
      'Led office hours for 20+ students to clarify concepts in kinematics, force balance, and harmonic motion',
  },
  {
    role: 'PCB Manufacturing Intern',
    organization: 'AA Technology',
    period: 'Summer 2024',
    description:
      'Increased conformal coating throughput by 1.5x by optimizing motion paths and programming for a robotic arm Achieved a 5% reduction in lead time by interpreting PCB schematics, developing a bill of materials in Excel, and cross-referencing customer part specifications with datasheets to ensure accuracy with design requirements',
  },
]
