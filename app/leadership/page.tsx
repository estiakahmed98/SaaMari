import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Visionary Leadership
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Meet the pioneering minds behind SaaMari's revolutionary approach to luxury wellness. Our leadership team
              combines decades of scientific expertise with visionary business acumen.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-6">Executive Leadership</h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
                Our leadership team brings together world-class expertise in biotechnology, luxury markets, and wellness
                innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src="/distinguished-leader-health-tech.png"
                      alt="Dr. Elena Vasquez"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Dr. Elena Vasquez</h3>
                  <p className="text-accent font-medium mb-4">Chief Executive Officer & Founder</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Former Director of Precision Medicine at Stanford. PhD in Molecular Biology, Harvard. 20+ years
                    pioneering personalized wellness solutions for high-net-worth individuals.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Precision Medicine</span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Biotechnology</span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Leadership</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src="/executive-portrait-modern-wellness.png"
                      alt="Dr. Sarah Chen"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Dr. Sarah Chen</h3>
                  <p className="text-accent font-medium mb-4">Chief Scientific Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Former Principal Scientist at Google Health. PhD in Computational Biology, MIT. Expert in AI-driven
                    health analytics and personalized intervention strategies.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">AI & Machine Learning</span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Data Science</span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Research</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src="/executive-portrait.png"
                      alt="Marcus Rodriguez"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Marcus Rodriguez</h3>
                  <p className="text-accent font-medium mb-4">Chief Strategy Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Former VP Strategy at LVMH Wellness Division. MBA from Wharton. 15+ years building luxury wellness
                    brands and strategic partnerships.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Luxury Markets</span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Strategy</span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">Partnerships</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">Advisory Board</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Distinguished advisors providing strategic guidance and industry expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"> <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-full" src="/David_Kim.png" alt="David Kim" /></div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Prof. David Kim</h3>
                  <p className="text-sm text-accent mb-2">Harvard Medical School</p>
                  <p className="text-xs text-muted-foreground">Longevity Research</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"> <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-full" src="/Maria_Santos.png" alt="Maria Santos" /></div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Maria Santos</h3>
                  <p className="text-sm text-accent mb-2">Former CEO, Wellness Corp</p>
                  <p className="text-xs text-muted-foreground">Industry Leadership</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"> <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-full" src="/Dr._Robert_Chen.png" alt="Robert Chen" /></div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Dr. Robert Chen</h3>
                  <p className="text-sm text-accent mb-2">Mayo Clinic</p>
                  <p className="text-xs text-muted-foreground">Precision Medicine</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"> <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-full" src="/Sophie_Laurent.png" alt="Sophie Laurent" /></div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Sophie Laurent</h3>
                  <p className="text-sm text-accent mb-2">LVMH Group</p>
                  <p className="text-xs text-muted-foreground">Luxury Strategy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              We're always seeking exceptional talent to join our team of visionaries, scientists, and innovators who
              are reshaping the future of wellness.
            </p>
            <Button className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100">Explore Opportunities</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
