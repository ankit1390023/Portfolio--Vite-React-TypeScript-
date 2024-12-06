import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Experience</h2>
        
        <VerticalTimeline lineColor="hsl(var(--accent))">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'hsl(var(--secondary))',
              color: 'hsl(var(--foreground))',
              boxShadow: '0 3px 0 hsl(var(--accent))'
            }}
            contentArrowStyle={{ borderRight: '7px solid hsl(var(--secondary))' }}
            date="June 2024 - July 2024"
            iconStyle={{ background: 'hsl(var(--accent))', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">Industrial Virtual Internship Program</h3>
            <h4 className="vertical-timeline-element-subtitle mt-2 text-accent">Oasis Infobyte</h4>
            <ul className="mt-4 list-disc list-inside text-foreground/80">
              <li>Developed and updated a web application using HTML, CSS, and JavaScript</li>
              <li>Designed responsive UI elements using CSS Flexbox and Grid</li>
              <li>Integrated JavaScript DOM manipulation for interactive features</li>
              <li>Participated in code reviews and version control with Git</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </section>
  );
}