export interface AITool {
  id: string
  name: string
  description: string
  category: string
  useCase: string
  link: string
  pricing: "Free" | "Freemium" | "Paid"
  features: string[]
  pros: string[]
  bestFor: string[]
}

export const categories = [
  "Everyday Tasks",
  "Web Development",
  "Coding & Programming",
  "Content Creation",
  "Design & Graphics",
  "Data Analysis",
  "Marketing & SEO",
  "Productivity",
  "Research & Learning",
  "Image & Video",
]

export const aiTools: AITool[] = [
  // Everyday Tasks
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Conversational AI assistant for general questions, writing, and everyday problem-solving",
    category: "Everyday Tasks",
    useCase: "General conversation, writing assistance, quick answers",
    link: "https://chat.openai.com",
    pricing: "Freemium",
    features: ["Natural conversation", "Writing assistance", "Problem solving", "Multiple languages"],
    pros: ["Easy to use", "Versatile", "Fast responses", "Great for beginners"],
    bestFor: ["Daily questions", "Writing help", "Learning new topics", "Brainstorming"],
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides accurate, cited answers",
    category: "Everyday Tasks",
    useCase: "Research, fact-checking, current information",
    link: "https://perplexity.ai",
    pricing: "Freemium",
    features: ["Real-time search", "Source citations", "Follow-up questions", "Multiple models"],
    pros: ["Current information", "Reliable sources", "Great for research"],
    bestFor: ["Research tasks", "Fact checking", "Current events", "Academic work"],
  },

  // Web Development
  {
    id: "v0",
    name: "v0 by Vercel",
    description: "AI-powered tool for building React components and web interfaces",
    category: "Web Development",
    useCase: "Building web pages, React components, UI design",
    link: "https://v0.dev",
    pricing: "Freemium",
    features: ["React components", "Tailwind CSS", "Next.js integration", "Real-time preview"],
    pros: ["Production-ready code", "Modern frameworks", "Great UI/UX"],
    bestFor: ["Web developers", "UI prototyping", "React projects", "Quick mockups"],
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description: "Full-stack web development in the browser with AI assistance",
    category: "Web Development",
    useCase: "Full-stack development, prototyping, web apps",
    link: "https://bolt.new",
    pricing: "Freemium",
    features: ["Full-stack development", "Multiple frameworks", "Browser-based IDE", "Deployment"],
    pros: ["Complete development environment", "No setup required", "Multiple frameworks"],
    bestFor: ["Full-stack projects", "Rapid prototyping", "Learning web development"],
  },

  // Coding & Programming
  {
    id: "claude",
    name: "Claude AI",
    description: "Advanced AI assistant excellent for coding, analysis, and complex reasoning",
    category: "Coding & Programming",
    useCase: "Code generation, debugging, code review, technical writing",
    link: "https://claude.ai",
    pricing: "Freemium",
    features: ["Code generation", "Debugging help", "Code review", "Technical documentation"],
    pros: ["Excellent at coding", "Great reasoning", "Handles complex tasks", "Long context"],
    bestFor: ["Software development", "Code review", "Technical writing", "Complex problem solving"],
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps write code faster",
    category: "Coding & Programming",
    useCase: "Code completion, function generation, IDE integration",
    link: "https://github.com/features/copilot",
    pricing: "Paid",
    features: ["Code completion", "IDE integration", "Multiple languages", "Context-aware suggestions"],
    pros: ["IDE integration", "Real-time suggestions", "Learns your style"],
    bestFor: ["Daily coding", "IDE users", "Team development", "Code completion"],
  },

  // Content Creation
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI writing assistant for marketing content and copywriting",
    category: "Content Creation",
    useCase: "Blog posts, marketing copy, social media content",
    link: "https://jasper.ai",
    pricing: "Paid",
    features: ["Marketing templates", "Brand voice", "SEO optimization", "Team collaboration"],
    pros: ["Marketing focused", "Brand consistency", "SEO features"],
    bestFor: ["Marketing teams", "Content creators", "Copywriting", "Brand content"],
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant integrated into Notion workspace",
    category: "Content Creation",
    useCase: "Note-taking, documentation, content writing within Notion",
    link: "https://notion.so/product/ai",
    pricing: "Paid",
    features: ["Notion integration", "Writing assistance", "Summarization", "Translation"],
    pros: ["Seamless integration", "Workspace context", "Multiple content types"],
    bestFor: ["Notion users", "Team documentation", "Note organization", "Content planning"],
  },

  // Design & Graphics
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI image generator for creating stunning artwork and designs",
    category: "Design & Graphics",
    useCase: "Image generation, artwork, concept art, design inspiration",
    link: "https://midjourney.com",
    pricing: "Paid",
    features: ["High-quality images", "Artistic styles", "Community gallery", "Style references"],
    pros: ["Exceptional quality", "Artistic focus", "Great community"],
    bestFor: ["Artists", "Designers", "Concept art", "Creative projects"],
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    description: "AI-powered design tools integrated into Canva platform",
    category: "Design & Graphics",
    useCase: "Social media graphics, presentations, marketing materials",
    link: "https://canva.com/ai-image-generator",
    pricing: "Freemium",
    features: ["Design templates", "AI image generation", "Brand kit", "Collaboration"],
    pros: ["Easy to use", "Professional templates", "Brand consistency"],
    bestFor: ["Social media", "Marketing materials", "Presentations", "Non-designers"],
  },

  // Data Analysis
  {
    id: "julius-ai",
    name: "Julius AI",
    description: "AI data analyst that can analyze and visualize your data",
    category: "Data Analysis",
    useCase: "Data analysis, visualization, statistical insights",
    link: "https://julius.ai",
    pricing: "Freemium",
    features: ["Data upload", "Statistical analysis", "Visualizations", "Natural language queries"],
    pros: ["No coding required", "Multiple file formats", "Clear explanations"],
    bestFor: ["Business analysts", "Researchers", "Data exploration", "Quick insights"],
  },

  // Marketing & SEO
  {
    id: "semrush-ai",
    name: "Semrush AI",
    description: "AI-powered SEO and marketing insights platform",
    category: "Marketing & SEO",
    useCase: "SEO optimization, keyword research, competitor analysis",
    link: "https://semrush.com",
    pricing: "Paid",
    features: ["Keyword research", "Competitor analysis", "Content optimization", "Rank tracking"],
    pros: ["Comprehensive SEO tools", "Competitive insights", "Content recommendations"],
    bestFor: ["SEO specialists", "Digital marketers", "Content strategists", "Website owners"],
  },

  // Productivity
  {
    id: "otter-ai",
    name: "Otter.ai",
    description: "AI meeting assistant for transcription and note-taking",
    category: "Productivity",
    useCase: "Meeting transcription, note-taking, interview recording",
    link: "https://otter.ai",
    pricing: "Freemium",
    features: ["Real-time transcription", "Meeting summaries", "Speaker identification", "Integration with Zoom"],
    pros: ["Accurate transcription", "Meeting integration", "Searchable notes"],
    bestFor: ["Business meetings", "Interviews", "Lectures", "Remote teams"],
  },

  // Research & Learning
  {
    id: "consensus",
    name: "Consensus",
    description: "AI-powered search engine for scientific research papers",
    category: "Research & Learning",
    useCase: "Academic research, scientific literature review, evidence-based answers",
    link: "https://consensus.app",
    pricing: "Freemium",
    features: ["Scientific paper search", "Evidence synthesis", "Citation tracking", "Research summaries"],
    pros: ["Academic focus", "Peer-reviewed sources", "Evidence-based answers"],
    bestFor: ["Researchers", "Students", "Academic writing", "Literature reviews"],
  },

  // Image & Video
  {
    id: "runway",
    name: "Runway ML",
    description: "AI-powered video editing and generation platform",
    category: "Image & Video",
    useCase: "Video editing, AI video generation, creative effects",
    link: "https://runwayml.com",
    pricing: "Freemium",
    features: ["AI video generation", "Video editing tools", "Creative effects", "Collaboration"],
    pros: ["Cutting-edge video AI", "Professional tools", "Creative possibilities"],
    bestFor: ["Video creators", "Filmmakers", "Content creators", "Creative professionals"],
  },
]

export function getToolsByCategory(category: string): AITool[] {
  return aiTools.filter((tool) => tool.category === category)
}

export function searchTools(query: string): AITool[] {
  const lowercaseQuery = query.toLowerCase()
  return aiTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.useCase.toLowerCase().includes(lowercaseQuery) ||
      tool.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)) ||
      tool.bestFor.some((use) => use.toLowerCase().includes(lowercaseQuery)),
  )
}
