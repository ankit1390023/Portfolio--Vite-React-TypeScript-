import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-8 md:pt-16 px-4">
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center items-center order-first md:order-last"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Spinning Border */}
              <div className="absolute inset-0 rounded-full border-[6px] border-t-sky-400 border-b-sky-400 border-l-transparent border-r-transparent animate-spin-slow"></div>

              {/* Profile Image */}
              <img
                src="ankitFormal.png"
                alt="Profile"
                className="absolute inset-1 w-[98%] h-[98%] rounded-full object-cover"
              />

              {/* Glow Animation */}
              <div className="absolute inset-0 w-full h-full border-0 border-sky-500 rounded-full animate-glow"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-last md:order-first"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground">Ankit </span>
              <span className="bg-gradient-to-r from-accent via-accent/70 to-accent/50 bg-clip-text text-transparent">
                Srivastav
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              B.Tech in Computer Science Engineering
            </motion.h2>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com/in/linkedinuserid' },
                { icon: Code2, href: 'https://leetcode.com' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-6 sm:p-8 max-w-xl animate-glow"
            >
              <div className="space-y-4 text-foreground">
                <p className="text-lg">023.ankitsrivastav@gmail.com | +91-9598579077</p>
                <p className="text-lg">Chhatrapati Shahuji Maharaj University, Kanpur</p>
                <p>Current SPI: 7.1 | Expected Graduation: May, 2025</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
