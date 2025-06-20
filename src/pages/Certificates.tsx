
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'technical', 'design', 'workshops', 'challenges'];

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      platform: "Amazon Web Services",
      category: "technical",
      date: "2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      description: "Cloud computing fundamentals and AWS services",
      credentialId: "AWS-CCP-2024-001"
    },
    {
      id: 2,
      title: "React.js Complete Course",
      platform: "Coursera",
      category: "technical",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      description: "Complete React.js development with hooks and context",
      credentialId: "COURSERA-REACT-2023"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      platform: "Google",
      category: "design",
      date: "2023",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f",
      description: "User experience design and interface principles",
      credentialId: "GOOGLE-UX-2023"
    },
    {
      id: 4,
      title: "Machine Learning Workshop",
      platform: "IEEE",
      category: "workshops",
      date: "2023",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description: "Hands-on ML workshop with real-world applications",
      credentialId: "IEEE-ML-WORKSHOP-2023"
    },
    {
      id: 5,
      title: "Python Programming Challenge",
      platform: "HackerRank",
      category: "challenges",
      date: "2023",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      description: "Advanced Python programming and algorithms",
      credentialId: "HACKERRANK-PY-5STAR"
    },
    {
      id: 6,
      title: "Cisco Networking Essentials",
      platform: "Cisco",
      category: "technical",
      date: "2022",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      description: "Network fundamentals and routing protocols",
      credentialId: "CISCO-NET-2022"
    }
  ];

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#1A1F3C] text-white pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="text-[#6C63FF]">Learning</span>
          </h1>
          <p className="text-xl text-[#B0B8C1] max-w-3xl mx-auto mb-8">
            Continuous learning drives innovation. Here are my certifications and achievements 
            that demonstrate my commitment to growth and technical excellence.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`capitalize ${
                activeCategory === category
                  ? "bg-[#6C63FF] hover:bg-[#5A52FF]"
                  : "border-[#6C63FF]/30 text-[#6C63FF] hover:bg-[#6C63FF]/20"
              }`}
            >
              <Award className="mr-2 h-4 w-4" />
              {category === 'all' ? 'All Certificates' : category}
            </Button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-[#2D1B69] border-[#6C63FF]/30 hover:border-[#FFA726]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3C] to-transparent opacity-60" />
                  <Badge className="absolute top-4 right-4 bg-[#FFA726] text-[#1A1F3C]">
                    {cert.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-[#FFA726]" />
                    <span className="text-sm text-[#FFA726] font-medium">{cert.platform}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-[#B0B8C1] mb-4 text-sm flex-1">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-[#B0B8C1] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                    <span className="text-xs">ID: {cert.credentialId}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-[#1A1F3C]">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify
                    </Button>
                    <Button size="sm" variant="outline" className="border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
