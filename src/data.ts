export const profile = {
  name: 'Hi, I\'m Ryan!',
  role: 'Computer Engineering',
  school: 'Brown University',
  bio: [
    "I'm a student at Brown University pursuing a Sc.B. in Computer Engineering.",
    'Some of my hobbies include guitar, piano, and volleyball!',
  ],
  resumeUrl: '/resume.pdf',
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
    demoUrl: 'https://example.com/sensor-hub',
    repoUrl: 'https://github.com/alexrivera/sensor-hub',
  },
  {
    title: '5-Stage Pipelined RISC-V Processor',
    description:
      'A compact current and voltage logger for lab benches, with shunt sensing, OLED readout, and SD card session capture',
    imageUrl: '/projects/riscv-pipeline.svg',
    tech: ['Verilog', 'Vivado', 'CPU'],
    
    repoUrl: 'https://github.com/alexrivera/power-monitor',
  },
  {
    title: 'Remote Door Lock',
    description:
      'Created a smart lock system using an Arduino Uno R4 WiFi as an embedded HTTPS server, controlling a servo-actuated deadbolt via authenticated HTTP POST requests secured with SHA-256 hashing',
    imageUrl: '/projects/study-timer.svg',
    tech: ['Arduino', 'C', 'HTTP'],
    demoUrl: 'https://example.com/fpga-traffic',
    repoUrl: 'https://github.com/rmdang16/remote-door-lock',
  },
  {
    title: 'Pong',
    description:
      'A Verilog-based intersection controller simulated in ModelSim and demonstrated on a DE10-Lite with timing diagrams and hazard logic',
    imageUrl: '/projects/pong.svg',
    tech: ['Verilog', 'FPGA', 'Quartus', 'ModelSim'],
    demoUrl: 'https://example.com/fpga-traffic',
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
    role: 'Hardware Engineering Intern',
    organization: 'SignalForge',
    period: 'Summer 2025',
    description:
      'Assisted with schematic capture, brought up prototype boards, wrote bring-up scripts, and documented test procedures for a sensor subsystem.',
  },
  {
    role: 'Lab Assistant — Circuits I',
    organization: 'State University',
    period: '2024 — Present',
    description:
      'Help students with oscilloscope setup, breadboard debugging, and lab report expectations for introductory circuit analysis.',
  },
  {
    role: 'PCB Manufacturing Intern',
    organization: 'AA Technology',
    period: 'Summer 2024',
    description:
      'Owned motor driver firmware, sensor calibration routines, and hardware/software integration for the club competition robot.',
  },
]
