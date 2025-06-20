
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Designs = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'posters', 'cards', 'banners', 'ebooks', 'social', 'wallpapers'];

  const designs = [
    {
      id: 1,
      title: "Tech Conference Poster",
      category: "posters",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      tools: ["Figma", "Photoshop"],
      description: "Modern tech conference promotional poster with vibrant gradients"
    },
    {
      id: 2,
      title: "AI Workshop Banner",
      category: "banners",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      tools: ["Canva", "Figma"],
      description: "Long banner design for AI/ML workshop promotion"
    },
    {
      id: 3,
      title: "Event Invitation Card",
      category: "cards",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      tools: ["Figma"],
      description: "Elegant invitation card with cultural elements"
    },
    {
      id: 4,
      title: "Machine Learning eBook Cover",
      category: "ebooks",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      tools: ["Photoshop", "Illustrator"],
      description: "Professional eBook cover design with technical aesthetics"
    },
    {
      id: 5,
      title: "Instagram Tech Post",
      category: "social",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      tools: ["Canva", "Figma"],
      description: "Social media post template for tech content"
    },
    {
      id: 6,
      title: "Abstract Tech Wallpaper",
      category: "wallpapers",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      tools: ["Photoshop"],
      description: "High-resolution wallpaper with geometric patterns"
    }
  ];

  const filteredDesigns = activeFilter === 'all' 
    ? designs 
    : designs.filter(design => design.category === activeFilter);

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
            My <span className="text-[#6C63FF]">Creative</span> Works
          </h1>
          <p className="text-xl text-[#B0B8C1] max-w-3xl mx-auto mb-8">
            Design is where logic meets emotion. I create thoughtful, impactful designs — 
            from digital posters to eBooks — blending creativity with structure.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`capitalize ${
                activeFilter === category
                  ? "bg-[#6C63FF] hover:bg-[#5A52FF]"
                  : "border-[#6C63FF]/30 text-[#6C63FF] hover:bg-[#6C63FF]/20"
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category === 'all' ? 'All Works' : category}
            </Button>
          ))}
        </motion.div>

        {/* Design Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="bg-[#2D1B69] border-[#6C63FF]/30 hover:border-[#FFA726]/50 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F3C] to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FFA726] transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-[#B0B8C1] mb-4 text-sm">
                    {design.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {design.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-[#6C63FF]/20 text-[#6C63FF] text-xs">
                        {tool}
                      </Badge>
                    ))}
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

export default Designs;
