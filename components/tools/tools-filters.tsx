"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { categories } from "@/lib/ai-tools-data"

export function ToolsFilters() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm font-medium cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Pricing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {["Free", "Freemium", "Paid"].map((pricing) => (
            <div key={pricing} className="flex items-center space-x-2">
              <Checkbox id={pricing} />
              <Label htmlFor={pricing} className="text-sm font-medium cursor-pointer">
                {pricing}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
