import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceCard } from '../components/ExperienceCard';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EXPERIENCE"
          title="Industry Internship &amp; Research"
          subtitle="Real-world engineering experience developing edge computer vision, sequence models, and sensor integrations."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
