import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Lightbulb, Target, Rocket, ArrowRight } from 'lucide-react'
import {Link} from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-6 w-6 mr-2" />
          <span className="font-bold">ART Finder</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Ad Research with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  ART Finder automates your research, uncovers user pain points, and generates powerful insights for your ad campaigns.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/chatbot">
                <Button>Get Started</Button>
                </Link>
                
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Comprehensive Research</CardTitle>
                </CardHeader>
                <CardContent>
                  Scrapes data from multiple sources including blogs, forums, social media, and app reviews to provide a holistic view of your market.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Actionable Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  Generates key triggers, user problems, and effective solutions tailored to your specific topic and audience.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Rocket className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Competitive Edge</CardTitle>
                </CardHeader>
                <CardContent>
                  Analyzes competitor ads and strategies to uncover high-performing hooks, CTAs, and content formats.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">1. Input Your Topic</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simply enter your research topic and any brand guidelines. Our AI takes care of the rest.
                </p>
                <h3 className="text-2xl font-bold">2. AI-Powered Research</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our advanced algorithms scour the internet for relevant data, analyzing patterns and trends.
                </p>
                <h3 className="text-2xl font-bold">3. Generate Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive a comprehensive report with actionable insights, ready to fuel your ad campaigns.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20 rounded-lg"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="ART Finder Dashboard"
                  className="rounded-lg object-cover w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$49/mo</div>
                  <ul className="space-y-2">
                    <li>5 research topics per month</li>
                    <li>Basic insights report</li>
                    <li>Email support</li>
                  </ul>
                  <Button className="w-full mt-4">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Ideal for growing teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$99/mo</div>
                  <ul className="space-y-2">
                    <li>20 research topics per month</li>
                    <li>Advanced insights with competitor analysis</li>
                    <li>Priority email support</li>
                  </ul>
                  <Button className="w-full mt-4">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <ul className="space-y-2">
                    <li>Unlimited research topics</li>
                    <li>Custom integrations</li>
                    <li>Dedicated account manager</li>
                  </ul>
                  <Button className="w-full mt-4">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Ad Research?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of marketers who are already using ART Finder to create more effective, data-driven ad campaigns.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free 14-day trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 ART Finder. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

