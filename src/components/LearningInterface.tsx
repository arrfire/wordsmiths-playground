
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, VolumeX, Volume2, Check, X, MessageCircle, Brain } from "lucide-react";

const LearningInterface = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      text: "Hello, how are you?",
      translation: "Hola, ¿cómo estás?",
      options: ["Hola, ¿cómo estás?", "Adiós, ¿cómo estás?", "Hola, ¿dónde estás?"],
      correct: 0,
    },
    {
      text: "I would like a coffee, please.",
      translation: "Me gustaría un café, por favor.",
      options: ["Quiero agua, por favor.", "Me gustaría un café, por favor.", "Necesito azúcar, por favor."],
      correct: 1,
    },
    {
      text: "Where is the bathroom?",
      translation: "¿Dónde está el baño?",
      options: ["¿Qué hora es?", "¿Dónde está la tienda?", "¿Dónde está el baño?"],
      correct: 2,
    }
  ];
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowAnswer(true);
  };
  
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };
  
  const currentQuestion = steps[currentStep];
  const isCorrect = selectedOption === currentQuestion.correct;
  
  return (
    <section className="py-16 md:py-24 px-4 bg-wordsmith-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 rounded-full bg-white border-wordsmith-blue/30 text-wordsmith-blue">
            <Brain className="h-3.5 w-3.5 mr-1.5" /> 
            AI-Powered Learning
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Immersive Language Learning
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI creates personalized, context-aware language exercises that adapt to your learning style and pace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-wordsmith-blue/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-wordsmith-blue" />
                  </div>
                  <h3 className="text-xl font-medium ml-3">Translate to Spanish</h3>
                </div>
                <Badge variant="outline" className="bg-wordsmith-blue/5 text-wordsmith-blue">+10 WORDS</Badge>
              </div>
              
              <p className="text-xl mb-4">{currentQuestion.text}</p>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                
                <Progress value={(currentStep + 1) / steps.length * 100} className="h-2" />
                
                <span className="text-sm text-muted-foreground">
                  {currentStep + 1}/{steps.length}
                </span>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-fade-in animation-delay-100">
              <div className="flex items-center mb-4">
                <div className="bg-wordsmith-purple/10 p-2 rounded-full">
                  <MessageCircle className="h-5 w-5 text-wordsmith-purple" />
                </div>
                <h3 className="text-xl font-medium ml-3">AI Language Coach</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-wordsmith-surface p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Coach</p>
                  <p>Focus on the verbs in this sentence. "Gustaría" is the conditional form of "gustar" (to like).</p>
                </div>
                
                <div className="bg-wordsmith-purple/5 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">You</p>
                  <p>Can you explain when to use the conditional form?</p>
                </div>
                
                <div className="bg-wordsmith-surface p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Coach</p>
                  <p>The conditional form is used for hypothetical situations or polite requests. It's like saying "would like" instead of "like".</p>
                </div>
              </div>
              
              <div className="mt-4 flex">
                <input
                  type="text"
                  placeholder="Ask your AI coach a question..."
                  className="flex-1 px-3 py-2 rounded-l-lg border focus:outline-none focus:ring-1 focus:ring-wordsmith-purple text-sm"
                />
                <Button className="rounded-l-none bg-wordsmith-purple hover:bg-wordsmith-purple/90">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-card rounded-xl p-6 h-full flex flex-col animate-fade-in animation-delay-200">
              <h3 className="text-xl font-medium mb-6">Choose the correct translation</h3>
              
              <div className="flex-1 space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={showAnswer}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedOption === index
                        ? isCorrect
                          ? 'bg-wordsmith-green/10 border-wordsmith-green'
                          : 'bg-red-50 border-red-300'
                        : 'hover:bg-wordsmith-surface hover:border-wordsmith-blue/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showAnswer && selectedOption === index && (
                        isCorrect ? (
                          <div className="bg-wordsmith-green text-white p-1 rounded-full">
                            <Check className="h-4 w-4" />
                          </div>
                        ) : (
                          <div className="bg-red-500 text-white p-1 rounded-full">
                            <X className="h-4 w-4" />
                          </div>
                        )
                      )}
                      {showAnswer && index === currentQuestion.correct && selectedOption !== index && (
                        <div className="bg-wordsmith-green text-white p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {showAnswer && (
                <div className="mt-6">
                  <div className={`p-4 rounded-lg mb-4 ${
                    isCorrect ? 'bg-wordsmith-green/10' : 'bg-red-50'
                  }`}>
                    <p className={`font-medium ${
                      isCorrect ? 'text-wordsmith-green' : 'text-red-500'
                    }`}>
                      {isCorrect ? 'Correct!' : 'Not quite right.'}
                    </p>
                    <p className="mt-1">
                      The correct translation is: <span className="font-medium">{currentQuestion.translation}</span>
                    </p>
                  </div>
                  
                  <Button 
                    onClick={handleNextStep} 
                    className="w-full bg-wordsmith-blue hover:bg-wordsmith-blue/90"
                  >
                    {currentStep < steps.length - 1 ? 'Next Question' : 'Finish Lesson'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningInterface;
