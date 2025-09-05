"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Zap, Target } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push("/search")
    }
  }

  return (
    <section className="relative py-20 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Find Your Perfect AI Tool Match
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-balance">
            Discover the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Right AI Tool
            </span>{" "}
            for Every Task
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            From everyday questions to complex coding projects, we help you find the perfect AI assistant for your
            specific needs. Save time and boost productivity with our curated recommendations.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="What do you need help with?"
                className="pl-10 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-8"
            >
              Find Tools
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">50+ AI Tools</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">10+ Categories</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Always Updated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
