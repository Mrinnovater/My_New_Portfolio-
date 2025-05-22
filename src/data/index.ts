import { Project, Experience, Skill, Social } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Image Recognition',
    description: 'Built a deep learning model using TensorFlow and Python to classify images with 98% accuracy. Implemented a web interface for real-time predictions.',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    liveLink: 'https://ai-image-recognition.example.com',
    githubLink: 'https://github.com/username/ai-image-recognition',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  },
  {
    id: 2,
    title: 'Smart Healthcare Platform',
    description: 'Developed a healthcare platform that uses ML algorithms to predict patient conditions. Features include real-time monitoring and automated alerts.',
    technologies: ['Python', 'Scikit-learn', 'MongoDB', 'React'],
    liveLink: 'https://smart-healthcare.example.com',
    githubLink: 'https://github.com/username/smart-healthcare',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg',
  },
  {
    id: 3,
    title: 'Blockchain Supply Chain',
    description: 'Created a blockchain-based supply chain tracking system using Ethereum smart contracts. Implemented real-time tracking and verification.',
    technologies: ['Solidity', 'React', 'Node.js', 'Web3.js'],
    liveLink: 'https://supply-chain.example.com',
    githubLink: 'https://github.com/username/blockchain-supply',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
  },
  {
    id: 4,
    title: 'Automated Trading Bot',
    description: 'Developed an automated trading bot using Python that analyzes market trends and executes trades. Achieved 15% better returns than market average.',
    technologies: ['Python', 'pandas', 'NumPy', 'APIs'],
    liveLink: 'https://trading-bot.example.com',
    githubLink: 'https://github.com/username/trading-bot',
    image: 'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'AI Research Lab',
    position: 'Machine Learning Research Intern',
    duration: 'May 2023 - Aug 2023',
    description: [
      'Developed novel deep learning architectures for computer vision tasks',
      'Improved model accuracy by 25% through innovative preprocessing techniques',
      'Published research paper at international ML conference',
      'Collaborated with team of 5 researchers on state-of-the-art AI models',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Computer Vision'],
  },
  {
    id: 2,
    company: 'HealthTech Innovations',
    position: 'AI/ML Engineering Intern',
    duration: 'Jan 2023 - Apr 2023',
    description: [
      'Built ML models for medical image analysis with 95% accuracy',
      'Implemented real-time patient monitoring system using IoT sensors',
      'Reduced diagnosis time by 40% through automated analysis',
      'Worked with medical professionals to optimize model performance',
    ],
    technologies: ['Python', 'Scikit-learn', 'OpenCV', 'TensorFlow'],
  },
  {
    id: 3,
    company: 'Tech Solutions Inc',
    position: 'Software Development Intern',
    duration: 'May 2022 - Aug 2022',
    description: [
      'Developed full-stack web applications using React and Node.js',
      'Implemented CI/CD pipeline reducing deployment time by 50%',
      'Created RESTful APIs handling 100K+ daily requests',
      'Optimized database queries improving response time by 30%',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
];

export const skills: Skill[] = [
  { id: 1, name: 'Python', icon: 'code', category: 'backend' },
  { id: 2, name: 'TensorFlow', icon: 'brain', category: 'ai/ml' },
  { id: 3, name: 'PyTorch', icon: 'brain', category: 'ai/ml' },
  { id: 4, name: 'React', icon: 'code', category: 'frontend' },
  { id: 5, name: 'Node.js', icon: 'server', category: 'backend' },
  { id: 6, name: 'MongoDB', icon: 'database', category: 'backend' },
  { id: 7, name: 'SQL', icon: 'database', category: 'backend' },
  { id: 8, name: 'php', icon: 'code', category: 'backend' },
  { id: 9, name: 'Git', icon: 'git-branch', category: 'tools' },
  { id: 10, name: 'Java', icon: 'code', category: 'backend' },
  { id: 11, name: 'Scikit-learn', icon: 'brain', category: 'ai/ml' },
  { id: 12, name: 'C', icon: 'code', category: 'backend' },
  { id: 13, name: 'C++', icon: 'code', category: 'backend' },
  { id: 14, name: 'BootStrap', icon: 'box', category: 'tools' },
  { id: 15, name: 'OpenCV', icon: 'camera', category: 'ai/ml' },
  { id: 16, name: 'AI', icon: 'code', category: 'ai/ml' },
  { id: 17, name: 'Machine Learning', icon: 'code', category: 'ai/ml' },
  { id: 18, name: 'Deep Learning', icon: 'code', category: 'ai/ml' },
  { id: 19, name: 'Generative AI', icon: 'code', category: 'ai/ml' },

];

export const socials: Social[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com/Mrinnovater', icon: 'github' },
  { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ch-venkata-shiva-sri-976245296/', icon: 'linkedin' },
  { id: 3, name: 'Twitter', url: 'https://x.com/Shivashetty786', icon: 'twitter' },
  { id: 4, name: 'Email', url: 'mailto:shivamchodisetty333@gmail.com', icon: 'mail' },
];

export const about = {
  name: 'Venkata Shiva Sri Chodisetty',
  title: 'Frontend Developer | Backend Developer | AI & ML Enthusiast',
  description: `As a dedicated B.Tech student and AI & ML enthusiast, I have been consistently sharpening my skills in coding and software development sector through rigid practice and real-time projects. Eager to Apply My Skills in Innovative & Creative Software Development and AI & ML.
My passion for AI & ML has led me to build innovative projects during my internship at NxtWave, Google for Developers and I have also developed a range of projects showcased on my GitHub profile.`,
  education: {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering (AI&ML)',
    university: 'SR University',
    year: '2022 - 2026',
  },
  resumeLink: 'https://drive.google.com/file/d/1qN-5WamqIpQMK6phdQNVJAmwES53s8PN/view?usp=drive_link',
  profileImage: 'https://drive.google.com/file/d/1xfBCpOMou7rtWFnyhfb86K0p5SCfP_sp/view?usp=drive_link',
  location: 'Kodad, Suryapet District, Telangana, India',
  languages: ['English', 'Hindi', 'Telugu'],
  interests: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Innovative Researchs'],
};
