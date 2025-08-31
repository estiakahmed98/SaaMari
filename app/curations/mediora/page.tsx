import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MedioraPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <Link href="/curations" className="text-sm text-accent hover:text-accent/80 transition-colors">
                    ← Back to Curations
                  </Link>
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                  Mediora
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                  Advanced health-tech solutions designed for the discerning individual who values both efficacy and
                  elegance. Where cutting-edge technology meets sophisticated design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Explore Technology
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Partner Inquiry
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/sophisticated-mediora-health-tech-products-with-cl.png"
                    alt="Mediora Collection Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Features */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Health Technology Elevated
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Mediora represents the convergence of advanced health monitoring, AI-driven insights, and elegant design
                philosophy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Precision Monitoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced sensors and algorithms provide real-time health insights with medical-grade accuracy and
                    consumer-friendly interfaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">AI-Driven Insights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Machine learning algorithms analyze your health data to provide personalized recommendations and
                    predictive wellness insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Elegant Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every device combines sophisticated aesthetics with intuitive functionality, seamlessly integrating
                    into your luxury lifestyle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Innovation Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover our suite of health-tech solutions, each designed to provide unprecedented insights into your
                wellness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/sleek-health-monitoring-device-with-modern-design.png"
                      alt="Mediora Health Monitor"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Advanced Health Monitor</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Continuous health monitoring with AI-powered analytics, providing real-time insights into your
                    cardiovascular, metabolic, and sleep patterns.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">Core Technology</span>
                    <Button variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/elegant-wellness-app-interface-on-premium-tablet.png"
                      alt="Mediora Wellness Platform"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Wellness Intelligence Platform</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Comprehensive wellness dashboard that integrates all your health data, providing personalized
                    recommendations and progress tracking.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">Digital Platform</span>
                    <Button variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Transform Healthcare Delivery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Partner with Mediora to bring cutting-edge health technology to your practice or organization. Elevate
              patient care with our sophisticated monitoring solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partner">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Partner With Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
