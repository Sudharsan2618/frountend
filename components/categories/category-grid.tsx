import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const categoryDescriptions = {
  "Everyday Tasks": "AI assistants for general questions, writing help, and daily problem-solving",
  "Web Development": "Tools for building websites, web apps, and frontend development",
  "Coding & Programming": "AI assistants for code generation, debugging, and software development",
  "Content Creation": "AI tools for writing, blogging, copywriting, and content marketing",
  "Design & Graphics": "AI-powered design tools for creating visuals, artwork, and graphics",
  "Data Analysis": "Tools for analyzing data, creating visualizations, and extracting insights",
  "Marketing & SEO": "AI assistants for digital marketing, SEO optimization, and growth",
  Productivity: "Tools to boost efficiency, automate tasks, and improve workflows",
  "Research & Learning": "AI assistants for research, education, and knowledge discovery",
  "Image & Video": "AI tools for creating, editing, and enhancing visual content",
}

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = categoryIcons[category as keyof typeof categoryIcons] || MessageSquare
        const toolCount = getToolsByCategory(category).length
        const description = categoryDescriptions[category as keyof typeof categoryDescriptions]

        return (
          <Link key={category} href={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"))}`}>
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105 h-full">
              <CardHeader className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {toolCount} tools
                  </Badge>
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {category}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-600">{description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
