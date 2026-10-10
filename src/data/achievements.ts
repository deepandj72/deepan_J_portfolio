import type { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'ai-agentic-hackathon',
    title: 'AI Agentic Hackathon — Special Prize',
    organization: 'IIT Mandi iHub & HCI Foundation',
    description:
      'Awarded a Special Prize at the national AI Agentic Hackathon organized by IIT Mandi iHub & HCI Foundation for building autonomous agentic AI workflows.',
    type: 'award',
    badge: 'Special Prize',
  },
  {
    id: 'genai-business-innovation',
    title: 'GenAI for Business Innovation (100-Hour Program)',
    organization: 'Industry-Accredited Program',
    description:
      'Completed an intensive 100-hour professional program mastering Generative AI architectures, prompt optimization, RAG, and business application deployment.',
    type: 'certification',
    badge: '100-Hour Certification',
  },
  {
    id: 'intellina-2k26',
    title: 'INTELLINA 2K26 National-Level Tech Fest',
    organization: 'Coimbatore Institute of Technology (CIT)',
    description:
      'Participated in the premier national-level technical fest INTELLINA 2K26 hosted by CIT, competing rigorously in the GPTATHON and Murder Mystery AI challenges.',
    type: 'competition',
    badge: 'National Finalist',
  },
];
