import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ToolsGrid } from "@/components/tools/tools-grid"
import { ToolsFilters } from "@/components/tools/tools-filters"

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">All AI Tools</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Browse our complete collection of AI tools. Filter by category, pricing, or search for specific
              functionality.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <ToolsFilters />
            </aside>
            <div className="flex-1">
              <ToolsGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
