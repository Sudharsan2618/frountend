"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, Search, Filter, X } from "lucide-react"
import { aiTools, searchTools, categories, type AITool } from "@/lib/ai-tools-data"

interface SearchInterfaceProps {
  initialQuery?: string
  initialFilters?: {
    category?: string
    pricing?: string
  }
}

export function SearchInterface({ initialQuery = "", initialFilters = {} }: SearchInterfaceProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState(initialFilters.category || "all")
  const [selectedPricing, setSelectedPricing] = useState(initialFilters.pricing || "all")
  const [filteredTools, setFilteredTools] = useState<AITool[]>(aiTools)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    let results = aiTools

    // Apply search query
    if (searchQuery.trim()) {
      results = searchTools(searchQuery)
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      results = results.filter((tool) => tool.category === selectedCategory)
    }

    // Apply pricing filter
    if (selectedPricing !== "all") {
      results = results.filter((tool) => tool.pricing === selectedPricing)
    }

    setFilteredTools(results)
  }, [searchQuery, selectedCategory, selectedPricing])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedPricing("all")
  }

  const hasActiveFilters = searchQuery.trim() || selectedCategory !== "all" || selectedPricing !== "all"

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Find Your Perfect AI Tool</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
          Search through our comprehensive database of AI tools and find exactly what you need for your projects.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for AI tools, features, or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-6">
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 text-xs">
                Active
              </Badge>
            )}
          </Button>
        </div>

        {showFilters && (
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Pricing</label>
                  <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                    <SelectTrigger>
                      <SelectValue placeholder="All pricing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All pricing</SelectItem>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Freemium">Freemium</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {hasActiveFilters && (
                  <div className="flex items-end">
                    <Button variant="ghost" onClick={clearFilters} className="h-10">
                      <X className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
          </h2>
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {searchQuery.trim() && (
                <Badge variant="secondary" className="text-sm">
                  Search: "{searchQuery}"
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="text-sm">
                  Category: {selectedCategory}
                </Badge>
              )}
              {selectedPricing !== "all" && (
                <Badge variant="secondary" className="text-sm">
                  Pricing: {selectedPricing}
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Card
              key={tool.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{tool.name}</CardTitle>
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
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">No tools found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
