import { Project, Experience, Skill, Social } from '../types';

export const projects: Project[] = [
  {
    id:1 ,
    title: '🧠 Reuters Word Explorer',
    description: 'Developed an interactive NLP tool using Word2Vec embeddings and the Reuters dataset, visualizing word relationships and similarities in real-time with Streamlit for an intuitive user experience.',
    technologies: ['Python', 'NLP', 'Vectorization', 'Scikit-learn','NLTK','NumPy','Text Classification'],
    liveLink: 'https://mrinnovaterreuterswordexplorer.streamlit.app/',
    githubLink: 'https://github.com/Mrinnovater/Reuters_word_explorer',
    image: 'https://drive.google.com/uc?export=view&id=1SEP7aF-fo8u0X8tN2pPGAnpXq1kkLm',
    screenshots: [
      'https://drive.google.com/uc?export=view&id=1SEP7aF-fo8u0X8tN2pPGAnpXq1kkLm',
      'https://drive.google.com/uc?export=view&id=1SEP7aF-fo8u0X8tN2pPGAnpXq1kkLm',
      'https://drive.google.com/uc?export=view&id=1SEP7aF-fo8u0X8tN2pPGAnpXq1kkLm'
    ]
  },
    {
    id:2 ,
    title: 'Chat Bot Development',
    description: 'Developed and deployed a real-time NLP-powered chatbot for SR University using Python, enhancing the onboarding experience for incoming B.Tech students by providing accurate and accessible responses to their queries.',
    technologies: ['Python', 'NLP', 'VECTORIZATION', 'Streamlit'],
    liveLink: 'https://mrinnovaterchatbotforsru.streamlit.app/',
    githubLink: 'https://github.com/Mrinnovater/AIML_Project',
    image: 'srubot.png',
  },
  {
    id:3 ,
    title: 'Style Transfer for Art',
    description: 'Developed an optimized AI-powered style transfer model using TensorFlow Hub and VGG19, leveraging deep learning and GPU acceleration to efficiently apply and enhance artistic transformations in images.',
    technologies: ['Python', 'TensorFlow', 'TensorFlow Hub', 'Keras', 'NumPy','Matplotlib'],
    liveLink: 'https://github.com/Mrinnovater/Generative-AI-Project',
    githubLink: 'https://github.com/Mrinnovater/Generative-AI-Project',
    image: 'generated_img.jpg',
  },
    {
    id:4 ,
    title: 'Smart Wearable Health Monitoring System',
    description: 'Developed an intelligent Flask-based wearable health monitoring system integrating a Random Forest model and real-time data analysis to predict health metrics, assess stress levels, and deliver personalized recommendations through RESTful APIs and WebSocket-powered dynamic interfaces.',
    technologies: ['Python', 'SQL', 'JavaScript', 'scikit-learn','Pandas','NumPy','SocketIO','Flask'],
    liveLink: 'https://smart-wearable-health-monitoring-system-yw5l.onrender.com/',
    githubLink: 'https://github.com/Mrinnovater/Smart-Wearable-Health-Monitoring-System',
    image: 'Smart Wearable Health Monitoring System.png',
  },
   {
    id:5 ,
    title: 'NLP Healthcare Chatbot',
    description: 'Built an NLP-based healthcare chatbot that identifies potential conditions from symptoms and provides personalized advice, enhancing user interaction with real-time, human-like responses.',
    technologies: ['Python', 'NLP', 'Regular Expressions', 're'],
    liveLink: 'https://github.com/Mrinnovater/NLP_Healthcare_Chatbot',
    githubLink: 'https://github.com/Mrinnovater/NLP_Healthcare_Chatbot',
    image: 'nlphealthcarechatbot.png',
  },
  {
    id:6 ,
    title: 'Nxt Wave Talks (Web Clone Project)',
    description: 'Developed a responsive web clone of the NxtWave Talks website, replicating its design and functionality with optimized layout and user experience using modern web development practices.',
    technologies: ['HTML', 'CSS', 'BootStrap'],
    liveLink: 'https://mrinnovater.github.io/Web-Clone-Project/code.html',
    githubLink: 'https://github.com/Mrinnovater/Web-Clone-Project',
    image: 'web clone ss.png',
  },
    {
    id:7 ,
    title: 'Temperature Converter',
    description: 'Developed a responsive web app for seamless conversion between Celsius, Fahrenheit, and Kelvin, featuring a clean interface, instant results, and smooth performance, deployed on Render for easy access.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Visual Studio'],
    liveLink: 'https://temperature-converter-d0yz.onrender.com/',
    githubLink: 'https://github.com/Mrinnovater/Temperature_Converter',
    image: 'tempconv.png',
  },
  {
    id:8 ,
    title: 'Give me a hint on my number',
    description: 'Developed an interactive number guessing game in Python with dynamic feedback, attempt tracking, and user prompts, revealing the correct number if attempts are exhausted.',
    technologies: ['Python', 'Thonny'],
    liveLink: 'https://guess-gamess.onrender.com/',
    githubLink: 'https://github.com/Mrinnovater/Guess_game',
    image: 'guessgame.png',
  },
  {
    id:9 ,
    title: 'Learning Website',
    description: 'Designed a student-focused educational website offering a judgment-free space for doubt resolution across all academic levels, with personalized resources, stage-specific guidance, and a clear, welcoming interface to support confident learning.',
    technologies: ['HTML', 'CSS', 'Visual Studio'],
    liveLink: 'https://mrinnovater.github.io/Learning-website/homepage.html',
    githubLink: 'https://github.com/Mrinnovater/Learning-website',
    image: 'learningwebsite.png',
  },
  {
    id:10 ,
    title: 'Flat Booking',
    description: 'Developed a user-centric flat booking website enabling customers to explore and reserve 2BHK, 3BHK, and 4BHK apartments, with streamlined navigation, detailed listings, and a seamless booking experience.',
    technologies: ['HTML', 'CSS', 'Visual Studio'],
    liveLink: 'https://mrinnovater.github.io/Flat-booking/flatbooking.html',
    githubLink: 'https://github.com/Mrinnovater/Flat-booking',
    image: 'faltbooking.png',
  },
    {
    id:11 ,
    title: 'Transportation',
    description: 'Developed a comprehensive transportation application in C with dynamic mode selection and fare calculation, enabling users to plan travel efficiently through an intuitive interface.',
    technologies: ['C', 'Dev C++'],
    liveLink: 'https://github.com/Mrinnovater/Transportation-',
    githubLink: 'https://github.com/Mrinnovater/Transportation-',
    image: 'transportation.png',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Nxt Wave',
    position: 'Web Clone Intern',
    duration: 'Dec 2024 - Jan 2025',
    description: [
      'Developed a responsive web clone of the NxtWave Talks website, replicating its design and functionality with a structured layout.',
      'Optimized responsiveness and user experience using modern web development best practices.',
      'Gained practical experience in all aspects of software development, from design to deployment.',
    ],
    technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'VISUAL STUDIO'],
  },
  {
    id: 2,
    company: 'Google For Developers',
    position: 'AI-ML Intern',
    duration: 'July 2024 - Sep 2024',
    description: [
      'Developed Proficiency in AI-ML Fundamentals: Gained hands-on experience with key AI and ML concepts, enhancing skills in data processing, model training, and evaluation using Google developer tools.',
      'Implemented Real-World AI Solutions: Built and deployed machine learning models addressing practical challenges, applying knowledge in supervised and unsupervised learning to create data-driven insights.',
      'Enhanced Technical Collaboration: Collaborated within the Google for Developers community, receiving mentorship and feedback, which improved teamwork and advanced problem-solving in AI-ML applications.',
    ],
    technologies: ['Python', 'Scikit-learn', 'OpenCV', 'TensorFlow','NLP','Vectorization','NumPy','Text Classification'],
  },
  {
    id: 3,
    company: 'Skill Craft Technology.',
    position: 'Software Developer Intern',
    duration: 'July 2024– August 2024',
    description: [
      'Completed four independent software projects, showcasing strong problem-solving and development skills.',
      'Gained practical experience in all aspects of software development, from design to deployment.',
      'Developed to produce software that is both efficient and reliable.',
    ],
    technologies: ['Python', 'Thonny', 'Innovative approach'],
  },
  {
    id: 4,
    company: ' Bharat Intern.',
    position: 'ML Intern',
    duration: 'Nov 2023– Dec 2023',
    description: [
      'Machine Learning Projects: Constructed and applied machine learning models for a range of projects, including house price prediction and iris flower classification and Movie ticket recommendations systems.',
      'House Price Prediction: Created a predictive model to estimate house prices based on different features, resulting in improved accuracy in real estate evaluations.',
      'Iris Flower Classification: Demonstrated proficiency in data preprocessing and model selection by applying classification algorithms to accurately identify iris flower species.',
      'Movie Ticket Recommendation: A recommendation system was developed and implemented to suggest movie tickets based on user preferences, improving the user’s experience.',
    ],
    technologies: ['Python', 'NLP', 'Vectorisation', 'Scikit-learn','TensorFlow','NumPy'],
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
  { id: 15, name: 'DSA', icon: 'code', category: 'backend' },
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

 

  title: 'Frontend Developer | Backend Developer | AI & ML Enthusiast | Problem Solver | Smart Working Personality | Intern at NXT Wave | Intern at Google for Developers',
  description: `As a dedicated B.Tech student and AI & ML enthusiast, I have been consistently sharpening my skills in coding and software development sector through rigid practice and real-time projects. Eager to Apply My Skills in Innovative & Creative Software Development and AI & ML.
My passion for AI & ML has led me to build innovative projects during my internship at NxtWave, Google for Developers and I have also developed a range of projects showcased on my GitHub profile.`,
  education: {
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering (AI&ML)',
    university: 'SR University',
    year: '2022 - 2026',
  },
  resumeLink: 'https://drive.google.com/uc?export=view&id=1qN-5WamqIpQMK6phdQNVJAmwES53s8PN',
  profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGlXv3LtlJtn0nC4bTH_wVxWd6vvC-tDTTw&s',
  location: 'Kodad, Suryapet District, Telangana, India',
  languages: ['English', 'Hindi', 'Telugu'],
  interests: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Innovative Researchs'],
};
