
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Optimized Signature Verification using Vision Transformers",
      description: "Advanced signature verification system using Vision Transformers for enhanced accuracy and fraud detection.",
      tech: ["Python", "PyTorch", "Vision Transformers", "Computer Vision"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Voice Translation Using LLMs",
      description: "Real-time voice translation system leveraging Large Language Models for seamless multilingual communication.",
      tech: ["Python", "Transformers", "Speech Processing", "NLP"],
      category: "NLP",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "AI-Powered Profile Matching System",
      description: "Intelligent matching algorithm for professional profiles using advanced ML techniques and similarity metrics.",
      tech: ["Machine Learning", "Python", "scikit-learn", "Data Analysis"],
      category: "ML",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    }
  ];

  const skills = [
    "Python", "TensorFlow", "PyTorch", "Transformers", "Computer Vision", 
    "NLP", "Machine Learning", "Deep Learning", "BERT", "YOLO", "GANs"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F3C] text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 w-full z-50 bg-[#1A1F3C]/90 backdrop-blur-md border-b border-[#6C63FF]/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-[#FFA726]"
            >
              Giri
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#FFA726" }}
                  className={`transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-[#FFA726] border-b-2 border-[#FFA726]' 
                      : 'text-[#ECECEC] hover:text-[#6C63FF]'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F3C] via-[#2D1B69] to-[#1A1F3C]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Hi, I'm <span className="text-[#6C63FF]">Giri</span> –<br />
                <span className="text-[#FFA726]">AI/ML Developer</span><br />
                & Legacy Breaker
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-[#B0B8C1] mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Building the future with intelligence, rooted in culture.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#6C63FF] hover:bg-[#5A52FF] text-white border-none px-8 py-6 text-lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-[#1A1F3C] px-8 py-6 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="flex flex-wrap gap-3"
              >
                {skills.slice(0, 6).map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Badge variant="secondary" className="bg-[#6C63FF]/20 text-[#6C63FF] border-[#6C63FF]/30 px-3 py-1">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-[#FFA726]" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F9FAFC] text-[#1A1F3C]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1A1F3C]">
              About <span className="text-[#6C63FF]">Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.p 
                  className="text-lg mb-6 text-[#4A5568]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I believe in building the future through intelligent solutions while honoring the wisdom of our past. 
                  As an AI/ML developer with a <span className="font-semibold text-[#6C63FF]">CGPA of 8.2</span>, 
                  I combine technical excellence with cultural understanding.
                </motion.p>
                
                <motion.blockquote 
                  className="text-xl italic text-[#FFA726] border-l-4 border-[#FFA726] pl-6 my-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  "We break legacies not out of rebellion, but to create new ones that last."
                </motion.blockquote>
                
                <motion.p 
                  className="text-lg text-[#4A5568]"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  My journey spans from signature verification systems using Vision Transformers to voice translation 
                  with LLMs. I'm passionate about solving real-world problems through AI while maintaining 
                  respect for tradition and culture.
                </motion.p>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#6C63FF]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-[#1A1F3C] mb-2">Education</h3>
                  <p className="text-[#4A5568]">B.Tech • CGPA: 8.2/10</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FFA726]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-[#1A1F3C] mb-2">Leadership</h3>
                  <p className="text-[#4A5568]">ISTE, STEPCONE Member</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#1A1F3C]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-[#6C63FF]">Projects</span>
            </h2>
            <p className="text-xl text-[#B0B8C1] max-w-2xl mx-auto">
              Showcasing my best work in AI/ML with real-world impact and innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-[#2D1B69] border-[#6C63FF]/30 hover:border-[#FFA726]/50 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3C] to-transparent opacity-60" />
                    <Badge className="absolute top-4 right-4 bg-[#6C63FF] text-white">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FFA726] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#B0B8C1] mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-[#6C63FF]/20 text-[#6C63FF] text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-[#1A1F3C] w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F9FAFC] text-[#1A1F3C]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Let's <span className="text-[#6C63FF]">Connect</span>
            </h2>
            
            <p className="text-xl text-[#4A5568] mb-12 max-w-2xl mx-auto">
              Ready to collaborate on innovative AI/ML projects or discuss how we can solve 
              real-world problems together? I'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.a
                href="mailto:gireeshkumarrayi@gmail.com"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#6C63FF]"
              >
                <Mail className="h-12 w-12 text-[#6C63FF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-[#4A5568]">gireeshkumarrayi@gmail.com</p>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FFA726]"
              >
                <Linkedin className="h-12 w-12 text-[#FFA726] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-[#4A5568]">Connect professionally</p>
              </motion.a>

              <motion.a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#6C63FF]"
              >
                <Github className="h-12 w-12 text-[#6C63FF] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-[#4A5568]">Explore my code</p>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-[#4A5568] mb-2">Phone: +91 7674877358</p>
              <p className="text-sm text-[#6B7280]">Available for internships and collaborative projects</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F3C] py-8 border-t border-[#6C63FF]/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#B0B8C1]">
            © 2024 Rayi Gireesh Kumar. Building the future with intelligence, rooted in culture.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
