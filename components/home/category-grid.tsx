import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Code, Globe, PenTool, Palette, BarChart3, Megaphone, Zap, BookOpen, Camera } from "lucide-react"
import { categories, getToolsByCategory } from "@/lib/ai-tools-data"
import Link from "next/link"

const categoryIcons = {
  "Everyday Tasks": MessageSquare,
  "Web Development": Globe,
  "Coding & Programming": Code,
  "Content Creation": PenTool,
  "Design & Graphics": Palette,
  "Data Analysis": BarChart3,
  "Marketing & SEO": Megaphone,
  Productivity: Zap,
  "Research & Learning": BookOpen,
  "Image & Video": Camera,
}

function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")
}

export function CategoryGrid() {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Browse by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find AI tools organized by your specific use case and industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || MessageSquare
            const toolCount = getToolsByCategory(category).length
            const categorySlug = categoryToSlug(category)

            return (
              <Link key={category} href={`/category/${categorySlug}`}>
                <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-0 shadow-md bg-white/80 backdrop-blur-sm hover:scale-105">
                  <CardHeader className="text-center space-y-3 pb-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base font-semibold group-hover:text-blue-600 transition-colors">
                        {category}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {toolCount} tool{toolCount !== 1 ? "s" : ""} available
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
