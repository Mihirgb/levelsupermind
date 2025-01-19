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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Revolutionize Your Ad Research with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  ART Finder automates your research, uncovers user pain points, and generates powerful insights for your ad campaigns.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/newbot">
                <Button>Get Started</Button>
                </Link>
                <Link to="/newbot">
                <Button className="text-black" variant="outline">Learn More</Button>
                </Link>
                
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">1. Input Your Topic</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simply enter your research topic and any brand guidelines. Our AI takes care of the rest.
                </p>
                <h3 className="text-2xl font-bold text-white">2. AI-Powered Research</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our advanced algorithms scour the internet for relevant data, analyzing patterns and trends.
                </p>
                <h3 className="text-2xl font-bold text-white">3. Generate Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive a comprehensive report with actionable insights, ready to fuel your ad campaigns.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20 rounded-lg"></div>
                <img
                  src="data:image/jpeg;base64,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"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Transform Your Ad Research?</h2>
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

