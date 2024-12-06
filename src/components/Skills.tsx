import { motion } from 'framer-motion';

const skills = {
  "Programming Languages": ["JavaScript", "C++", "Java (Familiar)", "Python (Familiar)"],
  "Libraries/Frameworks": ["React", "Next", "Tailwind CSS", "Bootstrap", "NodeJS", "Express"],
  "Databases": ["MySQL", "MongoDB", "Mongoose"],
  "Web Development": ["Full Stack Development", "Responsive Design", "RESTful Services"],
  "Tools & Platforms": ["Git", "Vercel","Render"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Effective Communication"],
  "CS Fundamentals": ["Data Structures", "Algorithms", "OOPs", "Computer Networks", "DBMS", "Operating Systems"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-border"
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-accent via-accent/70 to-accent/50 bg-clip-text text-transparent">
               
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}