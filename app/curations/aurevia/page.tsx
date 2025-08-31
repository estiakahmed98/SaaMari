import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AureviaPage() {
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
                  Aurevia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                  A curated selection of premium wellness essentials that celebrate the harmony between nature and
                  scientific precision. Crafted for those who appreciate authentic luxury.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Discover Collection
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
                    src="/premium-aurevia-wellness-collection-with-natural-e.png"
                    alt="Aurevia Collection Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Philosophy */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Nature Meets Science
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Aurevia embodies our commitment to sustainable luxury, combining the wisdom of nature with the precision
                of modern science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Natural Ingredients</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sourced from pristine environments worldwide, our ingredients are selected for their purity,
                    potency, and sustainable harvesting practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Scientific Precision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced extraction and formulation techniques ensure maximum bioavailability and therapeutic
                    efficacy in every product.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Sustainable Luxury</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Committed to environmental stewardship, every aspect of Aurevia reflects our dedication to
                    sustainable and ethical luxury practices.
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
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">Wellness Essentials</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover our carefully curated selection of wellness essentials, each crafted to support your journey
                toward optimal health and vitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/natural-wellness-oils-in-elegant-glass-bottles.png"
                      alt="Aurevia Essential Oils"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Botanical Essence Collection</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Pure essential oils and botanical extracts sourced from organic farms worldwide, designed to enhance
                    your daily wellness rituals.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">Natural Collection</span>
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
                      src="/premium-herbal-supplements-in-sustainable-packagin.png"
                      alt="Aurevia Herbal Supplements"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Adaptogenic Wellness Series</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Scientifically formulated adaptogenic blends that support stress resilience, energy balance, and
                    overall vitality using traditional herbal wisdom.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">Herbal Series</span>
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
              Embrace Natural Luxury
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Join our network of wellness partners and bring the Aurevia experience to your community. Discover how
              natural luxury can enhance your wellness offerings.
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
                  Request Catalog
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
