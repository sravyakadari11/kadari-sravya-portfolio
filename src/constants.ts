import { Project, SkillGroup, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Kadari Sravya",
  title: "Software Developer | AI & ML Enthusiast",
  email: "sravyakadari09@gmail.com",
  phone: "+91 9866103922",
  linkedin: "linkedin.com/in/sravyakadari",
  github: "github.com/sravyakadari11",
  website: "sravyakadari09.com",
  about: "I am a student who loves building software and learning about AI. I am currently studying Computer Science and have experience in building web apps and working with deep learning. I enjoy solving problems and creating smart tools that help people.",
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML", "CSS", "TypeScript"]
  },
  {
    category: "Frameworks",
    skills: ["React.js", "OpenCV", "TensorFlow"]
  },
  {
    category: "Tools",
    skills: ["MySQL", "GitHub", "VS Code", "Operating Systems"]
  },
  {
    category: "AI Tools",
    skills: ["ChatGPT", "Gemini", "Hostinger"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Ambulance Tracking System",
    description: "A smart system that tracks ambulances in real-time and predicts when they will be available using AI.",
    tech: ["Python", "OpenCV", "Deep Learning"],
  },
  {
    title: "Virtual Mouse",
    description: "A tool that lets you control your computer mouse using hand gestures. No need to touch the mouse!",
    tech: ["Python", "OpenCV"],
  },
  {
    title: "Habit Tracker App",
    description: "A simple app that helps you build good habits by tracking your progress and giving you smart tips.",
    tech: ["React", "JavaScript", "MySQL", "Node.js"],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Tap Academy",
    role: "Java Development Intern",
    period: "Mar 2025 – Aug 2025",
    description: [
      "Built a food delivery website from scratch.",
      "Learned how to use Java and MySQL to build real apps.",
      "Improved my coding skills and learned how to work in a team."
    ]
  },
  {
    company: "Academic Research",
    role: "Research Intern",
    period: "Jan 2025 – Jun 2025",
    description: [
      "Worked on AI models that can detect things in real-time.",
      "Learned how to test and improve AI systems.",
      "Studied how different AI models behave in different situations."
    ]
  }
];

export const EDUCATION: Education = {
  degree: "B.Tech in Computer Science (AI & ML)",
  institution: "Siddhartha Institute of Technology and Sciences",
  period: "2021 – 2025",
  grade: "CGPA: 7.54"
};
