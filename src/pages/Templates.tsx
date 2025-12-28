import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "A contemporary design with vibrant teal accents. Perfect for tech, design, and creative roles.",
    color: "from-cyan-600 to-teal-500",
    features: ["Clean layout", "ATS-friendly", "Teal color scheme", "Perfect for tech roles"],
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional and professional layout that works across all industries and career levels.",
    color: "from-gray-700 to-gray-900",
    features: ["Timeless design", "Highly readable", "Universal appeal", "Executive-ready"],
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple, clean, and elegant. Let your experience speak for itself with this refined template.",
    color: "from-gray-400 to-gray-600",
    features: ["Elegant simplicity", "Maximum readability", "Distraction-free", "Modern aesthetic"],
  },
  {
    id: "creative",
    name: "Creative",
    description: "Stand out with bold colors and dynamic layout. Ideal for marketing, design, and media roles.",
    color: "from-purple-600 to-pink-500",
    features: ["Eye-catching design", "Vibrant colors", "Creative layout", "Perfect for creatives"],
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Choose Your{" "}
              <span className="gradient-text">Template</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select from our professionally designed templates. Each one is ATS-optimized and fully customizable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {templates.map((template) => (
              <div
                key={template.id}
                className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {/* Template Preview */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-80`} />
                  <div className="absolute inset-4 bg-white/95 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gray-300" />
                      <div>
                        <div className="h-4 bg-gray-400 rounded w-32 mb-2" />
                        <div className="h-3 bg-gray-300 rounded w-24" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-5/6" />
                      <div className="h-3 bg-gray-200 rounded w-4/6" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="h-3 bg-gray-300 rounded w-1/3 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-4/5 mt-1" />
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {template.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/builder?template=${template.id}`}>
                    <Button variant="hero" className="w-full gap-2 group">
                      Use This Template
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Templates;
