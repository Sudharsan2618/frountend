import { HeroSection } from "@/components/home/hero-section"
import { FeaturedTools } from "@/components/home/featured-tools"
import { CategoryGrid } from "@/components/home/category-grid"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTools />
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  )
}
