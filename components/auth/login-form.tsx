"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Shield } from "lucide-react"

export function LoginForm() {
  const [step, setStep] = useState<"email" | "otp">("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Verification code sent!",
      description: `We've sent a 6-digit code to ${email}`,
    })

    setStep("otp")
    setIsLoading(false)
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp || otp.length !== 6) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Welcome back!",
      description: "You've been successfully signed in.",
    })

    // In a real app, redirect to dashboard
    window.location.href = "/"
    setIsLoading(false)
  }

  const handleResendCode = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Code resent!",
      description: `A new verification code has been sent to ${email}`,
    })
    setIsLoading(false)
  }

  if (step === "email") {
    return (
      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending code..." : "Send verification code"}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleOtpSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp">Verification code</Label>
        <div className="relative">
          <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="otp"
            type="text"
            placeholder="Enter 6-digit code"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className="pl-10 text-center text-lg tracking-widest"
            maxLength={6}
            required
          />
        </div>
        <p className="text-sm text-muted-foreground">Code sent to {email}</p>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || otp.length !== 6}>
        {isLoading ? "Verifying..." : "Verify & Sign In"}
      </Button>

      <div className="text-center">
        <Button type="button" variant="ghost" size="sm" onClick={handleResendCode} disabled={isLoading}>
          Resend code
        </Button>
      </div>

      <div className="text-center">
        <Button type="button" variant="ghost" size="sm" onClick={() => setStep("email")}>
          Change email
        </Button>
      </div>
    </form>
  )
}
