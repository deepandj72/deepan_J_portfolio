import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'shopwise-ai',
    title: 'Shopwise AI',
    category: 'AI-Powered Product Review Analysis',
    description:
      'An AI-powered chatbot that analyzes product reviews and generates concise, context-aware insights to help users understand customer opinions and product strengths.',
    problemStatement:
      'Modern e-commerce consumers face review overload, often reading hundreds of mixed opinions with unclear consensus before making purchasing decisions.',
    solution:
      'Shopwise AI leverages natural language processing and sentiment summarization pipelines to synthesize thousands of customer reviews into actionable pros, cons, and context-aware buying recommendations.',
    keyContributions: [
      'Implemented sentiment analysis and review summarization to identify customer opinions and product strengths.',
      'Applied NLP techniques to process high-volume customer review texts and extract core thematic insights.',
      'Generated actionable, personalized product recommendations derived directly from review insights.',
    ],
    tags: ['AI Chatbot', 'NLP', 'Sentiment Analysis', 'Review Summarization'],
    // Configurable URLs - Set to repository and demo when deployed, leave undefined or empty to hide placeholder
    githubUrl: 'https://github.com/deepandj72',
    demoUrl: '',
    isExperienceLinked: false,
    visualType: 'review-nlp',
  },
  {
    id: 'hill-aware-driver-assistance',
    title: 'Hill-Aware Load Adaptive Driver Assistance System',
    category: 'Embedded Systems · Intelligent Driver Assistance',
    description:
      'An ESP32-based advisory system that monitors vehicle load, road slope, and speed to assess heavy-vehicle risk and provide contextual driving alerts.',
    problemStatement:
      'Heavy commercial vehicles navigating steep gradients face heightened risks of brake fading, rollover, and loss of control when dynamic road slope and variable freight load are not factored together in real time.',
    solution:
      'An intelligent embedded safety platform that continuously monitors multi-sensor telemetry—including payload mass, grade angle, and velocity—running an on-device risk assessment algorithm and rendering real-time alerts on a driver HMI console.',
    keyContributions: [
      'Integrated load, slope, and speed monitoring into a synchronized telemetry pipeline.',
      'Implemented multi-parameter risk evaluation calculating real-time safety thresholds.',
      'Developed context-aware proactive alerts for speed reduction and low-gear adjustments.',
      'Designed a real-time human-machine interface (HMI) dashboard with risk index, artificial horizon, and road inclination visualization.',
    ],
    tags: ['ESP32', 'Sensors', 'Embedded Systems', 'Risk Evaluation', 'HMI Dashboard'],
    githubUrl: 'https://github.com/deepandj72',
    demoUrl: '',
    isExperienceLinked: false,
    visualType: 'hmi-dashboard',
  },
  {
    id: 'elderly-assistance-system',
    title: 'AI-Based Elderly Assistance System',
    category: 'Edge AI · Healthcare & Assistive Systems',
    description:
      'An AI-based assistance system combining object detection, activity recognition, and sensor-driven monitoring to support elderly safety.',
    problemStatement:
      'Solitary elderly individuals face critical safety hazards from sudden falls, mobility obstructions, and unmonitored health crises where immediate automated detection is vital.',
    solution:
      'An integrated edge-AI pipeline developed at Lyanaa AI uniting vision models (YOLOv10) with sequence models (LSTM) and microcontrollers to detect falls, recognize activities, track obstacles, and dispatch instantaneous caregiver notifications.',
    keyContributions: [
      'Engineered an edge-AI pipeline fusing YOLOv10 for real-time obstacle tracking and LSTM for human activity recognition.',
      'Built multi-modal alerts integrating fall detection, vital sensor ingestion, and GPS tracking.',
      'Connected edge processing (ESP32) with a companion Android interface for real-time caregiver monitoring.',
      'Implemented offline-capable voice assistance triggers for hands-free emergency requests.',
    ],
    keyCapabilities: [
      'Real-time object tracking',
      'Fall detection',
      'Activity recognition',
      'Health monitoring',
      'Voice assistance',
      'GPS tracking',
      'Caregiver alerts',
    ],
    tags: ['YOLOv10', 'LSTM', 'Python', 'OpenCV', 'PyTorch', 'TensorFlow', 'ESP32', 'Android'],
    githubUrl: 'https://github.com/deepandj72',
    demoUrl: '',
    isExperienceLinked: true,
    experienceLabel: 'Developed during Internship at Lyanaa AI',
    visualType: 'edge-ai',
  },
];
