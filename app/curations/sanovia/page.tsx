import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SanoviaPage() {
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
                  Sanovia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                  Our flagship collection embodying the essence of luxury wellness, where traditional wisdom meets
                  modern innovation. Each product is a testament to our commitment to excellence and human flourishing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Explore Collection
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
                    src="/elegant-sanovia-wellness-products-with-gold-accent.png"
                    alt="Sanovia Collection Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Features */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Luxury Wellness Redefined
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Sanovia represents the pinnacle of wellness luxury, combining time-honored traditions with cutting-edge
                scientific research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Premium Formulations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Meticulously crafted using the finest ingredients sourced from around the world, each formulation
                    represents years of research and development.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Scientific Validation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every product undergoes rigorous testing and clinical validation to ensure maximum efficacy and
                    safety for our discerning clientele.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Luxury Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From elegant packaging to personalized service, every touchpoint is designed to deliver an
                    unparalleled luxury wellness experience.
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
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">Featured Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover our signature wellness solutions, each designed to elevate your daily rituals and enhance your
                journey to optimal wellbeing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/luxury-wellness-serum-bottle-with-gold-accents.png"
                      alt="Sanovia Signature Serum"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Signature Wellness Serum</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our flagship formulation combining rare botanical extracts with advanced peptide technology for
                    comprehensive cellular rejuvenation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">Premium Collection</span>
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
                      src="/elegant-wellness-supplement-bottles-with-gold-deta.png"
                      alt="Sanovia Vitality Complex"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Vitality Complex</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A sophisticated blend of adaptogenic herbs and essential nutrients designed to support optimal
                    energy and resilience in modern life.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">Signature Series</span>
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
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">Experience Sanovia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Join our exclusive network of partners and bring the Sanovia experience to your clientele. Discover how
              luxury wellness can transform your business.
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
                  Request Information
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
