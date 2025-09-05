import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CategoryGrid } from "@/components/categories/category-grid"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">AI Tool Categories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Explore our comprehensive collection of AI tools organized by use case and industry. Find exactly what you
              need for your specific requirements.
            </p>
          </div>
          <CategoryGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
