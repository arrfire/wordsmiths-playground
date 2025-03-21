
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Coins, 
  Award, 
  Zap, 
  BarChart2, 
  BookOpen, 
  Calendar, 
  Clock, 
  User,
  Flame,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const Dashboard = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">
              Track your progress, manage your rewards, and continue your language journey.
            </p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="animate-fade-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Flame className="h-6 w-6 mr-2 text-red-500" />
                    <span className="text-2xl font-bold">12 days</span>
                  </div>
                  <Badge className="bg-red-100 text-red-600 hover:bg-red-100">+1 today</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-up animation-delay-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">WORDS Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Coins className="h-6 w-6 mr-2 text-wordsmith-purple" />
                    <span className="text-2xl font-bold">354 WORDS</span>
                  </div>
                  <Badge className="bg-wordsmith-purple/10 text-wordsmith-purple hover:bg-wordsmith-purple/10">+45 this week</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-up animation-delay-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Lessons Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-wordsmith-blue" />
                    <span className="text-2xl font-bold">27 lessons</span>
                  </div>
                  <Badge className="bg-wordsmith-blue/10 text-wordsmith-blue hover:bg-wordsmith-blue/10">4 this week</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-up animation-delay-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Mastery Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-wordsmith-green" />
                    <span className="text-2xl font-bold">Intermediate</span>
                  </div>
                  <Badge className="bg-wordsmith-green/10 text-wordsmith-green hover:bg-wordsmith-green/10">Level 4</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="progress" className="animate-fade-in">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="progress">Progress</TabsTrigger>
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="progress" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart2 className="h-5 w-5 mr-2" />
                        Learning Progress
                      </CardTitle>
                      <CardDescription>Track your language learning journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Spanish Basics</span>
                            <span className="text-muted-foreground">8/10 Lessons</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Spanish Conversation</span>
                            <span className="text-muted-foreground">3/12 Lessons</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">Spanish Grammar</span>
                            <span className="text-muted-foreground">0/8 Lessons</span>
                          </div>
                          <Progress value={0} className="h-2" />
                        </div>
                        
                        <div className="pt-4">
                          <Button variant="outline" className="w-full">View Full Progress Report</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        Daily Activity
                      </CardTitle>
                      <CardDescription>Your learning consistency over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between space-x-1 h-24">
                        {[30, 45, 60, 20, 0, 50, 75].map((height, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center justify-end">
                            <div 
                              className={`w-full rounded-t-sm ${height > 0 ? 'bg-wordsmith-blue/80' : 'bg-muted'}`}
                              style={{ height: `${height}%` }}
                            ></div>
                            <span className="text-xs text-muted-foreground mt-2">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Today's Progress</p>
                            <p className="text-sm text-muted-foreground">You've studied for 25 minutes today</p>
                          </div>
                          <Button size="sm" className="bg-wordsmith-blue hover:bg-wordsmith-blue/90">
                            <Zap className="h-4 w-4 mr-2" />
                            Continue Learning
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rewards" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Coins className="h-5 w-5 mr-2" />
                        WORDS Token Activity
                      </CardTitle>
                      <CardDescription>Your token earnings and spending</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between p-3 bg-wordsmith-surface rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-wordsmith-green/10 p-2 rounded-full mr-3">
                              <CheckCircle className="h-4 w-4 text-wordsmith-green" />
                            </div>
                            <div>
                              <p className="font-medium">Lesson Completion</p>
                              <p className="text-sm text-muted-foreground">Spanish Basics - Lesson 8</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-wordsmith-green">+10 WORDS</p>
                            <p className="text-xs text-muted-foreground">Today, 10:32 AM</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-wordsmith-surface rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-wordsmith-green/10 p-2 rounded-full mr-3">
                              <Flame className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <p className="font-medium">Streak Bonus</p>
                              <p className="text-sm text-muted-foreground">10 Day Streak Maintained</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-wordsmith-green">+15 WORDS</p>
                            <p className="text-xs text-muted-foreground">Yesterday, 9:15 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between p-3 bg-wordsmith-surface rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-wordsmith-green/10 p-2 rounded-full mr-3">
                              <Sparkles className="h-4 w-4 text-wordsmith-purple" />
                            </div>
                            <div>
                              <p className="font-medium">Perfect Score</p>
                              <p className="text-sm text-muted-foreground">Spanish Basics - Lesson 7</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-wordsmith-green">+5 WORDS</p>
                            <p className="text-xs text-muted-foreground">Yesterday, 6:45 PM</p>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button variant="outline" className="w-full">View All Token Activity</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="h-5 w-5 mr-2" />
                        Token Marketplace
                      </CardTitle>
                      <CardDescription>Spend your WORDS tokens on rewards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="bg-wordsmith-purple/10 p-2 rounded-full">
                              <MessageSquare className="h-5 w-5 text-wordsmith-purple" />
                            </div>
                            <Badge variant="outline">200 WORDS</Badge>
                          </div>
                          <h4 className="font-medium mb-1">Premium AI Coaching</h4>
                          <p className="text-sm text-muted-foreground mb-3">Advanced AI conversation practice for one month</p>
                          <Button size="sm" variant="outline" className="w-full">Redeem</Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="bg-wordsmith-blue/10 p-2 rounded-full">
                              <BookOpen className="h-5 w-5 text-wordsmith-blue" />
                            </div>
                            <Badge variant="outline">150 WORDS</Badge>
                          </div>
                          <h4 className="font-medium mb-1">Cultural Course</h4>
                          <p className="text-sm text-muted-foreground mb-3">Unlock exclusive cultural immersion content</p>
                          <Button size="sm" variant="outline" className="w-full">Redeem</Button>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button variant="outline" className="w-full">View Marketplace</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="achievements" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Your Achievements
                      </CardTitle>
                      <CardDescription>Milestones you've reached on your learning journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 text-center">
                          <div className="bg-wordsmith-blue/10 p-3 rounded-full mx-auto w-fit mb-3">
                            <Flame className="h-6 w-6 text-wordsmith-blue" />
                          </div>
                          <h4 className="font-medium">10-Day Streak</h4>
                          <p className="text-xs text-muted-foreground">Consistent learner</p>
                        </div>
                        
                        <div className="border rounded-lg p-4 text-center">
                          <div className="bg-wordsmith-green/10 p-3 rounded-full mx-auto w-fit mb-3">
                            <BookOpen className="h-6 w-6 text-wordsmith-green" />
                          </div>
                          <h4 className="font-medium">Vocabulary Master</h4>
                          <p className="text-xs text-muted-foreground">Learned 500+ words</p>
                        </div>
                        
                        <div className="border rounded-lg p-4 text-center">
                          <div className="bg-wordsmith-purple/10 p-3 rounded-full mx-auto w-fit mb-3">
                            <Sparkles className="h-6 w-6 text-wordsmith-purple" />
                          </div>
                          <h4 className="font-medium">Perfect Student</h4>
                          <p className="text-xs text-muted-foreground">5 perfect scores</p>
                        </div>
                        
                        <div className="border border-dashed rounded-lg p-4 text-center">
                          <div className="bg-muted p-3 rounded-full mx-auto w-fit mb-3">
                            <Award className="h-6 w-6 text-muted-foreground/50" />
                          </div>
                          <h4 className="font-medium text-muted-foreground/70">Conversation Pro</h4>
                          <p className="text-xs text-muted-foreground">Complete 10 dialogues</p>
                        </div>
                        
                        <div className="border border-dashed rounded-lg p-4 text-center">
                          <div className="bg-muted p-3 rounded-full mx-auto w-fit mb-3">
                            <Coins className="h-6 w-6 text-muted-foreground/50" />
                          </div>
                          <h4 className="font-medium text-muted-foreground/70">Token Collector</h4>
                          <p className="text-xs text-muted-foreground">Earn 500 WORDS</p>
                        </div>
                        
                        <div className="border border-dashed rounded-lg p-4 text-center">
                          <div className="bg-muted p-3 rounded-full mx-auto w-fit mb-3">
                            <Zap className="h-6 w-6 text-muted-foreground/50" />
                          </div>
                          <h4 className="font-medium text-muted-foreground/70">Speed Learner</h4>
                          <p className="text-xs text-muted-foreground">Complete course in 30 days</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="outline" className="w-full">View All Achievements</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6 animate-fade-in animation-delay-200">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-wordsmith-blue/10 flex items-center justify-center text-3xl font-bold text-wordsmith-blue mb-4">
                      A
                    </div>
                    <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
                    <p className="text-muted-foreground mb-4">Member since April 2023</p>
                    <Button variant="outline" size="sm" className="w-full mb-6">Edit Profile</Button>
                    
                    <div className="w-full">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Target Language:</span>
                        <span className="font-medium">Spanish</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Weekly Goal:</span>
                        <span className="font-medium">5 lessons / week</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Learning Focus:</span>
                        <span className="font-medium">Conversation</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Upcoming Lessons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-wordsmith-surface rounded-lg">
                      <div>
                        <p className="font-medium">Spanish Basics</p>
                        <p className="text-sm text-muted-foreground">Lesson 9: Past Tense</p>
                      </div>
                      <Badge className="bg-wordsmith-blue/10 text-wordsmith-blue hover:bg-wordsmith-blue/10">Next</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Spanish Basics</p>
                        <p className="text-sm text-muted-foreground">Lesson 10: Review</p>
                      </div>
                      <span className="text-xs text-muted-foreground">Final Lesson</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Spanish Conversation</p>
                        <p className="text-sm text-muted-foreground">Lesson 4: At the Restaurant</p>
                      </div>
                      <span className="text-xs text-muted-foreground">Next Course</span>
                    </div>
                    
                    <Button className="w-full bg-wordsmith-blue hover:bg-wordsmith-blue/90">
                      <Zap className="h-4 w-4 mr-2" />
                      Start Next Lesson
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
