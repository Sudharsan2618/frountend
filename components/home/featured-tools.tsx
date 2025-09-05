import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { aiTools } from "@/lib/ai-tools-data"

export function FeaturedTools() {
  // Get a few featured tools
  const featuredTools = aiTools.slice(0, 6)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Popular AI Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most recommended AI tools across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Card
              key={tool.id}
              className="group hover:shadow-lg transition-all duration-200 border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{tool.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  <Badge
                    variant={
                      tool.pricing === "Free" ? "default" : tool.pricing === "Freemium" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {tool.pricing}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Best for:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.bestFor.slice(0, 3).map((use, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {use}
                      </Badge>
                    ))}
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            View All Tools
          </Button>
        </div>
      </div>
    </section>
  )
}
