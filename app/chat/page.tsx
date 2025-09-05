import { ChatInterface } from "@/components/chat/chat-interface"

export default function ChatPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Chatbot
          </h1>
          <p className="text-gray-600">
            Chat with our AI assistant powered by Gemini 2.5 Flash
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </div>
  )
}
