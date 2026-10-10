import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', description: 'Primary language for ML, GenAI & backend logic' },
      { name: 'SQL', description: 'Relational data querying and structured persistence' },
      { name: 'Java', description: 'Object-oriented application architecture & Android logic' },
    ],
  },
  {
    category: 'Generative AI',
    skills: [
      { name: 'Prompt Engineering', description: 'System prompts, few-shot conditioning & evaluation' },
      { name: 'Large Language Models (LLMs)', description: 'Context windows, reasoning pipelines & agent orchestration' },
      { name: 'ChromaDB', description: 'Vector embeddings, semantic retrieval & vector index management' },
    ],
  },
  {
    category: 'Machine Learning & Computer Vision',
    skills: [
      { name: 'YOLOv10', description: 'Real-time end-to-end object detection & edge inference' },
      { name: 'LSTM', description: 'Temporal sequence modeling & sequential activity recognition' },
      { name: 'OpenCV', description: 'Image processing, video stream pipelines & computer vision' },
      { name: 'PyTorch', description: 'Deep learning neural network design and tensor computation' },
      { name: 'TensorFlow', description: 'Model optimization, graph export & inference deployment' },
    ],
  },
  {
    category: 'Embedded & Application Development',
    skills: [
      { name: 'ESP32', description: 'IoT microcontrollers, sensor telemetry & edge communication' },
      { name: 'Android', description: 'Mobile client interfaces, telemetry dashboards & user alerts' },
    ],
  },
];
