import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CategoryToolsGrid } from "@/components/category/category-tools-grid"
import { categories } from "@/lib/ai-tools-data"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")
}

function findCategoryBySlug(slug: string): string | undefined {
  // Decode URL-encoded characters first
  const decodedSlug = decodeURIComponent(slug)

  return categories.find((category) => {
    const categorySlug = categoryToSlug(category)
    const rawSlug = category.toLowerCase().replace(/\s+/g, "-")

    // Check multiple variations to handle both & -> and conversion and URL encoding
    return categorySlug === slug || categorySlug === decodedSlug || rawSlug === slug || rawSlug === decodedSlug
  })
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = findCategoryBySlug(params.slug)

  if (!categoryName) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <CategoryToolsGrid category={categoryName} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  const params = []

  for (const category of categories) {
    // Add the clean version (& becomes "and")
    const cleanSlug = categoryToSlug(category)
    params.push({ slug: cleanSlug })

    // Add the raw version (& stays as &) for URL compatibility
    const rawSlug = category.toLowerCase().replace(/\s+/g, "-")
    if (rawSlug !== cleanSlug) {
      params.push({ slug: rawSlug })
    }
  }

  return params
}
