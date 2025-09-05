import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SearchInterface } from "@/components/search/search-interface"

interface SearchPageProps {
  searchParams: {
    q?: string
    category?: string
    pricing?: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <SearchInterface
            initialQuery={searchParams.q}
            initialFilters={{ category: searchParams.category, pricing: searchParams.pricing }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
