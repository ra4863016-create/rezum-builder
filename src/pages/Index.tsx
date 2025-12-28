import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, Download, Palette, Sparkles, Zap, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Professional Templates",
      description: "Choose from stunning, ATS-friendly resume templates designed by professionals.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Easy to Use",
      description: "Intuitive builder with real-time preview. Create your resume in minutes.",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Instant Download",
      description: "Export your resume as a high-quality PDF ready to send to employers.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "ATS Optimized",
      description: "Our templates are optimized to pass Applicant Tracking Systems.",
    },
  ];

  const templates = [
    { name: "Modern", color: "from-cyan-600 to-teal-500" },
    { name: "Classic", color: "from-gray-700 to-gray-900" },
    { name: "Creative", color: "from-purple-600 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(173_80%_50%/0.15)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Build Your Dream Resume</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Create a{" "}
              <span className="gradient-text">Professional Resume</span>
              <br />in Minutes
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Stand out from the crowd with our beautiful, ATS-optimized resume templates. 
              Easy to use, instant download, completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/builder">
                <Button variant="hero" size="xl" className="gap-2 group">
                  Start Building
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button variant="glass" size="xl" className="gap-2">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>

          {/* Template Preview Cards */}
          <div className="mt-20 flex justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {templates.map((template, index) => (
              <div
                key={template.name}
                className="relative w-48 h-64 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ 
                  transform: `rotate(${(index - 1) * 6}deg)`,
                  animationDelay: `${0.4 + index * 0.1}s`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${template.color}`} />
                <div className="absolute inset-4 bg-white/90 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mb-3" />
                  <div className="h-3 bg-gray-300 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-gray-200 rounded w-full mb-4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-5/6" />
                    <div className="h-2 bg-gray-200 rounded w-4/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to
              <span className="gradient-text"> Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our resume builder comes packed with powerful features to help you land your dream job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Perfect Resume?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of professionals who have landed their dream jobs with our resume builder.
            </p>
            <Link to="/builder">
              <Button variant="hero" size="xl" className="gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
