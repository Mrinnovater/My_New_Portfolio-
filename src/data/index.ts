import { Project, Experience, Skill, Social } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Style Transfer for Art',
    description: 'Developed an AI-powered style transfer model using TensorFlow Hub and VGG19 to apply artistic styles to images. Utilized deep learning techniques to generate artistic transformations with optimized performance.Improved the model by adjusting VGG19’s layers to better capture artistic details. Used TensorFlow’s features and GPU support to speed up the process and make the transformations more efficient.',
    technologies: ['Python', 'TensorFlow', 'TensorFlow Hub', 'Keras', 'NumPy', 'Matplotlib'],
    liveLink: 'https://github.com/Mrinnovater/Generative-AI-Project',
    githubLink: 'https://github.com/Mrinnovater/Generative-AI-Project',
    image: 'https://drive.google.com/uc?export=view&id=1Vri43pvFbXEm8mOb4H8zovnWBZyUG8lS',
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
  { id: 8, name: 'Docker', icon: 'box', category: 'tools' },
  { id: 9, name: 'Git', icon: 'git-branch', category: 'tools' },
  { id: 10, name: 'AWS', icon: 'cloud', category: 'tools' },
  { id: 11, name: 'Scikit-learn', icon: 'brain', category: 'ai/ml' },
  { id: 12, name: 'FastAPI', icon: 'server', category: 'backend' },
  { id: 13, name: 'TypeScript', icon: 'code', category: 'frontend' },
  { id: 14, name: 'Kubernetes', icon: 'box', category: 'tools' },
  { id: 15, name: 'OpenCV', icon: 'camera', category: 'ai/ml' },
];

export const socials: Social[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { id: 3, name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  { id: 4, name: 'Email', url: 'mailto:your.email@example.com', icon: 'mail' },
];

export const about = {
  name: 'Ch Venkata Shiva Sri',
  title: 'B.Tech Student | AI/ML Specialist | Software Developer',
  description: `As a passionate third-year B.Tech student specializing in Computer Science with AI/ML, I combine theoretical knowledge with practical experience to create innovative solutions. My academic journey has been marked by a deep dive into artificial intelligence, machine learning, and software development.

Through multiple internships and projects, I've gained hands-on experience in developing AI/ML models, building scalable applications, and solving complex technical challenges. I'm particularly interested in computer vision, natural language processing, and the application of AI in healthcare and finance.

I'm constantly exploring new technologies and methodologies, believing that continuous learning is key to staying at the forefront of technological innovation. My goal is to leverage AI/ML technologies to create solutions that make a meaningful impact on society.`,
  education: {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering (AI/ML)',
    university: 'Your University Name',
    year: '2021 - 2025',
  },
  resumeLink: 'https://example.com/your-resume.pdf',
  profileImage: 'https://drive.google.com/file/d/1xfBCpOMou7rtWFnyhfb86K0p5SCfP_sp/view?usp=sharing',
  location: 'Your City, Country',
  languages: ['English', 'Hindi', 'Telugu'],
  interests: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Open Source'],
};
