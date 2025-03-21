
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import TokenSection from '@/components/TokenSection';
import LearningInterface from '@/components/LearningInterface';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Coins, 
  Globe, 
  MessageSquare, 
  Award, 
  Zap, 
  Users, 
  ArrowRight, 
  BarChart 
} from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 rounded-full bg-wordsmith-surface border-wordsmith-green/30 text-wordsmith-green">
                <Zap className="h-3.5 w-3.5 mr-1.5" /> 
                Platform Features
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Revolutionary Language Learning
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with Web3 incentives 
                to create a uniquely engaging language learning experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="AI Language Adaptation" 
                description="Our AI customizes content to your learning style, focusing on areas where you need the most practice."
                icon={Brain}
                iconColor="text-wordsmith-blue"
                bgColor="bg-wordsmith-blue/10"
              />
              
              <FeatureCard 
                title="Token Rewards" 
                description="Earn WORDS tokens as you complete lessons, maintain streaks, and achieve language milestones."
                icon={Coins}
                iconColor="text-wordsmith-purple"
                bgColor="bg-wordsmith-purple/10"
              />
              
              <FeatureCard 
                title="Multiple Languages" 
                description="Choose from over 10 different languages with content ranging from beginner to advanced levels."
                icon={Globe}
                iconColor="text-wordsmith-green"
                bgColor="bg-wordsmith-green/10"
              />
              
              <FeatureCard 
                title="Interactive Conversations" 
                description="Practice real conversations with our AI language coach for natural speaking practice."
                icon={MessageSquare}
                iconColor="text-wordsmith-blue"
                bgColor="bg-wordsmith-blue/10"
              />
              
              <FeatureCard 
                title="Achievement System" 
                description="Unlock badges, certificates, and special rewards as you progress in your language journey."
                icon={Award}
                iconColor="text-wordsmith-purple"
                bgColor="bg-wordsmith-purple/10"
              />
              
              <FeatureCard 
                title="Community Learning" 
                description="Connect with other learners, share progress, and participate in community challenges."
                icon={Users}
                iconColor="text-wordsmith-green"
                bgColor="bg-wordsmith-green/10"
              />
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="rounded-full bg-wordsmith-blue hover:bg-wordsmith-blue/90">
                Explore All Features
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Token Section */}
        <TokenSection />
        
        {/* Learning Interface Demo */}
        <LearningInterface />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-mesh">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 px-3 py-1 rounded-full bg-white border-wordsmith-blue/30 text-wordsmith-blue">
                <BarChart className="h-3.5 w-3.5 mr-1.5" /> 
                Start Your Journey
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform How You Learn Languages?
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of learners who have already discovered the power of combining AI language learning with blockchain rewards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-wordsmith-blue hover:bg-wordsmith-blue/90">
                  Get Started for Free
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                
                <Button size="lg" variant="outline" className="rounded-full">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
