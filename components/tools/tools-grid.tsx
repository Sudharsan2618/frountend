"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search } from "lucide-react"
import { aiTools, searchTools } from "@/lib/ai-tools-data"

export function ToolsGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTools, setFilteredTools] = useState(aiTools)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredTools(aiTools)
    } else {
      setFilteredTools(searchTools(query))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="text-sm text-gray-600">
          {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTools.map((tool) => (
          <Card
            key={tool.id}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{tool.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
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
              </div>
              <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Best for:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.bestFor.slice(0, 3).map((use, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
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

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tools found matching your search.</p>
        </div>
      )}
    </div>
  )
}
