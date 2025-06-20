
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How I Built a Signature Verifier Using Vision Transformers",
      excerpt: "A deep dive into implementing signature verification using Vision Transformers, achieving 94% accuracy with custom preprocessing techniques.",
      author: "Rayi Gireesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Vision Transformers", "PyTorch", "Computer Vision"]
    },
    {
      id: 2,
      title: "Voice Translation Using LLMs: A Technical Journey",
      excerpt: "Building a real-time voice translation system using Large Language Models, exploring the challenges of speech processing and multilingual AI.",
      author: "Rayi Gireesh Kumar",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["LLMs", "Speech Processing", "Translation"]
    },
    {
      id: 3,
      title: "Blending AI with Indian Context: My Take",
      excerpt: "How traditional wisdom and modern AI can complement each other, creating solutions that respect culture while embracing innovation.",
      author: "Rayi Gireesh Kumar",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Philosophy",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      tags: ["Culture", "Innovation", "Philosophy"]
    },
    {
      id: 4,
      title: "Full-Stack Development with MERN: Lessons Learned",
      excerpt: "My experience building scalable web applications with MongoDB, Express, React, and Node.js, including performance optimization tips.",
      author: "Rayi Gireesh Kumar",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["MERN", "Full-Stack", "React", "Node.js"]
    },
    {
      id: 5,
      title: "What I Learned as an Intern at MSME Tech Center",
      excerpt: "Insights from my internship experience, working on real-world projects and understanding the intersection of technology and business.",
      author: "Rayi Gireesh Kumar",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      tags: ["Internship", "Experience", "Learning"]
    },
    {
      id: 6,
      title: "Design Systems in Modern Web Development",
      excerpt: "Creating consistent, scalable design systems that bridge the gap between design and development, ensuring better user experiences.",
      author: "Rayi Gireesh Kumar",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f",
      tags: ["Design Systems", "UI/UX", "Frontend"]
    }
  ];

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
            Insights & <span className="text-[#6C63FF]">Thoughts</span>
          </h1>
          <p className="text-xl text-[#B0B8C1] max-w-3xl mx-auto mb-8">
            Sharing my journey, learnings, and thoughts on AI, development, design, and the 
            intersection of technology with culture and tradition.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-[#2D1B69] border-[#6C63FF]/30 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="bg-[#6C63FF] text-white mb-4">Featured</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-[#B0B8C1] mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#B0B8C1] mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button className="bg-[#FFA726] hover:bg-[#FF9800] text-[#1A1F3C]">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-[#2D1B69] border-[#6C63FF]/30 hover:border-[#FFA726]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#6C63FF] text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-[#FFA726] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#B0B8C1] mb-4 text-sm flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-[#6C63FF]/20 text-[#6C63FF] text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-[#B0B8C1] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-[#1A1F3C] w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
