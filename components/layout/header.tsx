"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  const handleSearchClick = () => {
    router.push("/search")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Match
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/tools" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Browse Tools
          </Link>
          <Link href="/categories" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Categories
          </Link>
          <Link href="/chat" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Chat
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={handleSearchClick}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
