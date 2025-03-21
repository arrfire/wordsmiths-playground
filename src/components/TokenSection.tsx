
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, Users, ShieldCheck } from "lucide-react";

const TokenSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1 rounded-full bg-wordsmith-surface border-wordsmith-purple/30 text-wordsmith-purple">
            <Coins className="h-3.5 w-3.5 mr-1.5" /> 
            WORDS Token Economy
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn to Earn with WORDS Tokens
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform rewards your learning journey with WORDS tokens on the Polygon network, 
            creating an ecosystem where education has real value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card rounded-xl p-6 animate-fade-up">
            <div className="flex items-center mb-4">
              <div className="bg-wordsmith-blue/10 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-wordsmith-blue" />
              </div>
              <h3 className="text-xl font-medium ml-3">Earn</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Complete daily challenges, maintain streaks, and master new content to earn WORDS tokens.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="bg-wordsmith-blue/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                10 WORDS per completed lesson
              </li>
              <li className="flex items-center">
                <span className="bg-wordsmith-blue/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Bonus tokens for perfect scores
              </li>
              <li className="flex items-center">
                <span className="bg-wordsmith-blue/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Daily streak multipliers
              </li>
            </ul>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fade-up animation-delay-100">
            <div className="flex items-center mb-4">
              <div className="bg-wordsmith-purple/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-wordsmith-purple" />
              </div>
              <h3 className="text-xl font-medium ml-3">Use</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Spend your WORDS tokens to unlock premium features and personalized language coaching.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="bg-wordsmith-purple/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Access exclusive content
              </li>
              <li className="flex items-center">
                <span className="bg-wordsmith-purple/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                AI-powered language coaching
              </li>
              <li className="flex items-center">
                <span className="bg-wordsmith-purple/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Customized learning paths
              </li>
            </ul>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fade-up animation-delay-200">
            <div className="flex items-center mb-4">
              <div className="bg-wordsmith-green/10 p-2 rounded-full">
                <ShieldCheck className="h-5 w-5 text-wordsmith-green" />
              </div>
              <h3 className="text-xl font-medium ml-3">Govern</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Participate in platform governance and vote on new languages, features, and improvements.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="bg-wordsmith-green/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Vote on new language additions
              </li>
              <li className="flex items-center">
                <span className="bg-wordsmith-green/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Propose platform improvements
              </li>
              <li className="flex items-center">
                <span className="bg-wordsmith-green/10 rounded-full p-1 mr-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Stake for voting power
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="rounded-full bg-wordsmith-purple hover:bg-wordsmith-purple/90 text-white">
            <Coins className="h-4 w-4 mr-2" />
            Learn More About WORDS Token
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
