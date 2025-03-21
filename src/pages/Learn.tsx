
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  VolumeX, 
  Volume2, 
  Check, 
  X, 
  Zap, 
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Globe,
  Flag,
  Award,
  Settings
} from 'lucide-react';

const Learn = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('spanish');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const languages = [
    { id: 'spanish', name: 'Spanish', progress: 65, flag: '🇪🇸' },
    { id: 'french', name: 'French', progress: 20, flag: '🇫🇷' },
    { id: 'german', name: 'German', progress: 0, flag: '🇩🇪' },
    { id: 'italian', name: 'Italian', progress: 0, flag: '🇮🇹' },
    { id: 'portuguese', name: 'Portuguese', progress: 0, flag: '🇵🇹' },
  ];
  
  const exercises = [
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
  
  const activeLanguage = languages.find(lang => lang.id === selectedLanguage);
  const currentExercise = exercises[currentStep];
  const isCorrect = selectedOption === currentExercise.correct;
  
  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setShowAnswer(true);
  };
  
  const handleNextStep = () => {
    if (currentStep < exercises.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue="learn" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="learn">Learn</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="explore">Explore</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center">
                <div className="bg-wordsmith-surface p-1 rounded-full mr-3">
                  <Coins className="h-5 w-5 text-wordsmith-purple" />
                </div>
                <span className="font-medium">354 WORDS</span>
              </div>
            </div>
            
            <TabsContent value="learn">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        Languages
                      </CardTitle>
                      <CardDescription>Choose your language to learn</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {languages.map((language) => (
                          <button
                            key={language.id}
                            onClick={() => setSelectedLanguage(language.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                              selectedLanguage === language.id
                                ? 'bg-wordsmith-blue/5 border-wordsmith-blue'
                                : 'hover:bg-wordsmith-surface'
                            }`}
                          >
                            <div className="flex items-center">
                              <span className="text-xl mr-3">{language.flag}</span>
                              <span className="font-medium">{language.name}</span>
                            </div>
                            <div className="flex items-center">
                              {language.progress > 0 && (
                                <span className="text-sm text-muted-foreground mr-2">{language.progress}%</span>
                              )}
                              {selectedLanguage === language.id && (
                                <Check className="h-4 w-4 text-wordsmith-blue" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <Button variant="outline" className="w-full">
                          <Flag className="h-4 w-4 mr-2" />
                          Add New Language
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center justify-between animate-fade-in">
                    <h2 className="text-2xl font-bold">
                      {activeLanguage?.name} Learning Path
                    </h2>
                    <Badge variant="outline" className="px-3 py-1 rounded-full bg-wordsmith-surface border-wordsmith-blue/30 text-wordsmith-blue">
                      <span className="flex items-center">
                        <BookOpen className="h-3.5 w-3.5 mr-1.5" /> 
                        3 Courses Available
                      </span>
                    </Badge>
                  </div>
                  
                  <Card className="animate-fade-up">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <span className="text-xl mr-2">{activeLanguage?.flag}</span>
                          {activeLanguage?.name} Basics
                        </CardTitle>
                        <Badge className="bg-wordsmith-blue/10 text-wordsmith-blue">8/10 Lessons</Badge>
                      </div>
                      <CardDescription>Fundamental vocabulary and grammar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-5 gap-2 mb-6">
                        {[...Array(10)].map((_, index) => (
                          <div 
                            key={index} 
                            className={`aspect-square rounded-lg flex items-center justify-center ${
                              index < 8 
                                ? 'bg-wordsmith-blue text-white' 
                                : 'border border-dashed border-wordsmith-blue/30'
                            }`}
                          >
                            {index < 8 ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <span className="text-sm text-muted-foreground">{index + 1}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-wordsmith-blue hover:bg-wordsmith-blue/90">
                        <Zap className="h-4 w-4 mr-2" />
                        Continue to Lesson 9
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="animate-fade-up animation-delay-100">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <span className="text-xl mr-2">{activeLanguage?.flag}</span>
                          {activeLanguage?.name} Conversation
                        </CardTitle>
                        <Badge className="bg-wordsmith-purple/10 text-wordsmith-purple">3/12 Lessons</Badge>
                      </div>
                      <CardDescription>Practical dialogue and speaking practice</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm text-muted-foreground">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-6 gap-2 mb-6">
                        {[...Array(12)].map((_, index) => (
                          <div 
                            key={index} 
                            className={`aspect-square rounded-lg flex items-center justify-center ${
                              index < 3 
                                ? 'bg-wordsmith-purple text-white' 
                                : 'border border-dashed border-wordsmith-purple/30'
                            }`}
                          >
                            {index < 3 ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <span className="text-sm text-muted-foreground">{index + 1}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-wordsmith-purple hover:bg-wordsmith-purple/90">
                        <Zap className="h-4 w-4 mr-2" />
                        Continue to Lesson 4
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="animate-fade-up animation-delay-200">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <span className="text-xl mr-2">{activeLanguage?.flag}</span>
                          {activeLanguage?.name} Grammar
                        </CardTitle>
                        <Badge variant="outline">Locked</Badge>
                      </div>
                      <CardDescription>Advanced grammar rules and structures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-6">
                        <div className="bg-muted p-3 rounded-full mx-auto w-fit mb-4">
                          <Award className="h-6 w-6 text-muted-foreground/50" />
                        </div>
                        <h4 className="font-medium text-lg mb-2">Complete Basics First</h4>
                        <p className="text-muted-foreground mb-6">
                          Finish Spanish Basics to unlock this advanced course.
                        </p>
                        <Button variant="outline" className="mx-auto" disabled>
                          <Zap className="h-4 w-4 mr-2" />
                          Coming Soon
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="practice">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 animate-fade-in">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="h-5 w-5 mr-2" />
                        Practice Session
                      </CardTitle>
                      <CardDescription>Strengthen your Spanish skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-wordsmith-blue/5 rounded-lg border border-wordsmith-blue">
                          <div className="flex items-center">
                            <BookOpen className="h-5 w-5 text-wordsmith-blue mr-3" />
                            <span className="font-medium">Translation</span>
                          </div>
                          <Check className="h-4 w-4 text-wordsmith-blue" />
                        </div>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-lg border hover:bg-wordsmith-surface">
                          <div className="flex items-center">
                            <Volume2 className="h-5 w-5 text-muted-foreground mr-3" />
                            <span className="font-medium">Listening</span>
                          </div>
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-lg border hover:bg-wordsmith-surface">
                          <div className="flex items-center">
                            <MessageCircle className="h-5 w-5 text-muted-foreground mr-3" />
                            <span className="font-medium">Conversation</span>
                          </div>
                        </button>
                        
                        <button className="w-full flex items-center justify-between p-3 rounded-lg border hover:bg-wordsmith-surface">
                          <div className="flex items-center">
                            <Settings className="h-5 w-5 text-muted-foreground mr-3" />
                            <span className="font-medium">Grammar</span>
                          </div>
                        </button>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Session Progress</span>
                          <span className="text-sm text-muted-foreground">{currentStep + 1}/{exercises.length}</span>
                        </div>
                        <Progress value={(currentStep + 1) / exercises.length * 100} className="h-2 mb-4" />
                        
                        <div className="flex items-center justify-between">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handlePrevStep}
                            disabled={currentStep === 0}
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </Button>
                          
                          <Badge variant="outline" className="px-3 py-1">
                            <Coins className="h-3.5 w-3.5 mr-1.5 text-wordsmith-purple" /> 
                            +10 WORDS per completion
                          </Badge>
                          
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handleNextStep}
                            disabled={currentStep === exercises.length - 1 || !showAnswer}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2 animate-fade-in animation-delay-100">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Translate to Spanish
                        </CardTitle>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="rounded-full"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </Button>
                      </div>
                      <CardDescription>Choose the correct translation for the phrase</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-6 bg-wordsmith-surface rounded-lg mb-6">
                        <p className="text-xl font-medium text-center">{currentExercise.text}</p>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        {currentExercise.options.map((option, index) => (
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
                              {showAnswer && index === currentExercise.correct && selectedOption !== index && (
                                <div className="bg-wordsmith-green text-white p-1 rounded-full">
                                  <Check className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      {showAnswer && (
                        <div className={`p-4 rounded-lg mb-4 ${
                          isCorrect ? 'bg-wordsmith-green/10' : 'bg-red-50'
                        }`}>
                          <p className={`font-medium ${
                            isCorrect ? 'text-wordsmith-green' : 'text-red-500'
                          }`}>
                            {isCorrect ? 'Correct!' : 'Not quite right.'}
                          </p>
                          <p className="mt-1">
                            The correct translation is: <span className="font-medium">{currentExercise.translation}</span>
                          </p>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          onClick={handlePrevStep}
                          disabled={currentStep === 0}
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Previous
                        </Button>
                        
                        {!showAnswer ? (
                          <Button 
                            variant="outline" 
                            className="text-wordsmith-purple border-wordsmith-purple hover:text-wordsmith-purple/90 hover:bg-wordsmith-purple/10"
                          >
                            <Coins className="h-4 w-4 mr-2" />
                            Use 5 WORDS for Hint
                          </Button>
                        ) : (
                          <Button 
                            onClick={handleNextStep} 
                            className="bg-wordsmith-blue hover:bg-wordsmith-blue/90"
                            disabled={currentStep === exercises.length - 1}
                          >
                            Next Question
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6 animate-fade-in animation-delay-200">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        AI Language Coach
                      </CardTitle>
                      <CardDescription>Get personalized help with your learning</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="bg-wordsmith-surface p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Coach</p>
                          <p>How can I help you with your Spanish practice today?</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Ask any language question..."
                          className="flex-1 px-3 py-2 rounded-l-lg border focus:outline-none focus:ring-1 focus:ring-wordsmith-purple"
                        />
                        <Button className="rounded-l-none bg-wordsmith-purple hover:bg-wordsmith-purple/90">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <Button variant="outline" size="sm" className="text-xs">Can you explain the conjugation?</Button>
                        <Button variant="outline" size="sm" className="text-xs">How do I say "yesterday"?</Button>
                        <Button variant="outline" size="sm" className="text-xs">Correct my pronunciation</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="explore">
              <div className="text-center py-16 animate-fade-in">
                <div className="bg-wordsmith-blue/10 p-4 rounded-full mx-auto w-fit mb-6">
                  <Globe className="h-8 w-8 text-wordsmith-blue" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Explore New Languages</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Discover new languages and cultures to expand your linguistic horizons.
                </p>
                <Button className="bg-wordsmith-blue hover:bg-wordsmith-blue/90">
                  <Flag className="h-4 w-4 mr-2" />
                  Browse All Languages
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Learn;
