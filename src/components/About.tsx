import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 my-50 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto order-first md:order-first w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]"
          >
            {/* Spinning Sky Blue Border */}
            <div className="absolute inset-0 rounded-full border-[4px] border-t-sky-400 border-b-sky-400 border-l-transparent border-r-transparent animate-spin-slow"></div>

            {/* Profile Image Positioned Dynamically */}
            <img
              src="ankitFormal.png"
              alt="Profile"
              className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover"
            />

            {/* Animated Border */}
            <div className="absolute inset-0 w-full h-full border-4 border-sky-500 rounded-full"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-foreground text-center md:text-left order-last md:order-last"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-foreground/80 mb-6">
              I'm a Computer Science Engineering student passionate about building innovative solutions
              and exploring new technologies. With a strong foundation in full-stack development and
              a keen interest in problem-solving, I strive to create impactful applications that make
              a difference.
            </p>
            <p className="text-foreground/80 mb-8">
              Currently pursuing my B.Tech with a focus on modern web technologies and software
              development practices. I enjoy working on challenging projects that push my boundaries
              and help me grow as a developer.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
