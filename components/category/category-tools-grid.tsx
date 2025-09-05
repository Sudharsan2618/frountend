import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { getToolsByCategory } from "@/lib/ai-tools-data"
import Link from "next/link"

interface CategoryToolsGridProps {
  category: string
}

export function CategoryToolsGrid({ category }: CategoryToolsGridProps) {
  const tools = getToolsByCategory(category)

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Link href="/categories">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
        </Link>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{category}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the best AI tools for {category.toLowerCase()}. Compare features, pricing, and find your perfect
          match.
        </p>
        <Badge variant="secondary" className="text-sm">
          {tools.length} tools available
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{tool.name}</CardTitle>
                  <Badge
                    variant={
                      tool.pricing === "Free" ? "default" : tool.pricing === "Freemium" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {tool.pricing}
                  </Badge>
                </div>
              </div>
              <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Best for:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.bestFor.slice(0, 3).map((use, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Advantages:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {tool.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                asChild
                className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
              >
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  Try {tool.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {tools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tools found in this category yet.</p>
        </div>
      )}
    </div>
  )
}
