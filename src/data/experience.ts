import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'lyanaa-ai',
    role: 'Machine Learning Engineer — Intern',
    organization: 'Lyanaa AI',
    employmentType: 'Internship',
    period: 'Internship Duration (Configurable)',
    description:
      'Engineered an edge-AI pipeline uniting computer vision and deep sequence networks to deliver an intelligent, real-time safety and healthcare assistance system for elderly care.',
    responsibilities: [
      'Developed an AI-based elderly assistance system integrating YOLOv10 object detection and LSTM activity recognition for real-time object tracking, fall detection, and health monitoring.',
      'Implemented an edge-AI pipeline using Python, OpenCV, PyTorch, TensorFlow, ESP32, and Android.',
      'Worked on real-time sensor processing, voice assistance, GPS tracking, and caregiver alerts.',
    ],
    technologies: [
      'Python',
      'YOLOv10',
      'LSTM',
      'OpenCV',
      'PyTorch',
      'TensorFlow',
      'ESP32',
      'Android',
    ],
  },
];
