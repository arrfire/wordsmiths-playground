
import { ArrowRight, Globe, Award, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="outline" className="px-3 py-1 rounded-full bg-wordsmith-surface border-wordsmith-blue/30 text-wordsmith-blue">
              <span className="flex items-center">
                <Globe className="h-3.5 w-3.5 mr-1.5" /> 
                Revolutionizing Language Learning
              </span>
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-wordsmith-blue">Learn</span>, <span className="text-wordsmith-purple">Earn</span>, and <span className="text-wordsmith-green">Grow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Wordsmith's Corner combines AI language learning with Web3 rewards. Master languages while earning WORDS tokens on Polygon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="rounded-full bg-wordsmith-blue hover:bg-wordsmith-blue/90 text-white">
                Start Learning
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-full">
                How It Works
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="bg-wordsmith-blue/10 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-wordsmith-blue" />
                </div>
                <span>AI-Powered</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-wordsmith-green/10 p-2 rounded-full">
                  <Award className="h-5 w-5 text-wordsmith-green" />
                </div>
                <span>Earn Tokens</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-wordsmith-purple/10 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-wordsmith-purple" />
                </div>
                <span>10+ Languages</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full max-w-md aspect-square relative animate-fade-in animation-delay-100">
              <div className="absolute inset-0 bg-gradient-radial from-wordsmith-blue/5 to-transparent rounded-full animate-pulse-soft"></div>
              
              <div className="glass-card rounded-3xl shadow-elevated p-6 transform rotate-6 absolute top-4 right-4 w-64 animate-float">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-wordsmith-purple flex items-center justify-center text-white font-medium">A1</div>
                  <div>
                    <p className="font-medium">Spanish Basics</p>
                    <p className="text-sm text-muted-foreground">3/10 Lessons Complete</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-wordsmith-surface rounded-full">
                  <div className="h-2 bg-wordsmith-purple rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div className="glass-card rounded-3xl shadow-elevated p-4 transform -rotate-3 absolute bottom-10 left-6 w-56 animate-float animation-delay-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">WORDS Balance</p>
                  <Badge variant="secondary" className="bg-wordsmith-green/10 text-wordsmith-green">+20</Badge>
                </div>
                <p className="text-2xl font-bold">245 WORDS</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  <span>Earned from daily challenges</span>
                </div>
              </div>
              
              <div className="glass-card rounded-3xl shadow-elevated p-4 transform rotate-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 animate-float animation-delay-200">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-6 w-6 rounded-full bg-wordsmith-blue/10 flex items-center justify-center">
                    <Zap className="h-3.5 w-3.5 text-wordsmith-blue" />
                  </div>
                  <p className="font-medium">Practice Session</p>
                </div>
                <p className="text-sm mb-3">"¿Cómo te llamas?"</p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start rounded-lg">My name is...</Button>
                  <Button size="sm" variant="outline" className="w-full justify-start rounded-lg">What is your...</Button>
                  <Button size="sm" variant="outline" className="w-full justify-start rounded-lg">How do you...</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
