"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Sparkles, Mail, Phone, CheckCircle, X } from "lucide-react"

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

const genericDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "yandex.com",
  "zoho.com",
  "rediffmail.com",
  "live.com",
  "msn.com",
  "yahoo.co.in",
  "yahoo.co.uk",
]

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("")
      return
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailDomain = email.split("@")[1]?.toLowerCase()
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.")
    } else if (emailDomain && genericDomains.includes(emailDomain)) {
      setEmailError("Please enter your company official email ID.")
    } else {
      setEmailError("")
    }
  }

  const handleEmailBlur = () => {
    const inputEmail = emailRef.current?.value || formData.email
    validateEmail(inputEmail)
  }

  const postCall = async ({ url, path, data, onSuccess, onError }: any) => {
    try {
      const fullUrl = `${url}${path}`
      console.log("[v0] Making API call to:", fullUrl)
      console.log("[v0] Payload:", data)

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          origin: "https://www.saleassist.ai",
          referer: "https://www.saleassist.ai/",
          referrer: "https://www.saleassist.ai/",
          "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        },
        body: JSON.stringify(data),
      })

      console.log("[v0] Response status:", response.status)

      if (response.ok) {
        const result = await response.json()
        console.log("[v0] Success response:", result)
        onSuccess(result)
      } else {
        const errorText = await response.text()
        console.error("[v0] API Error Response:", errorText)
        throw new Error(`API call failed with status ${response.status}: ${errorText}`)
      }
    } catch (error) {
      console.error("[v0] API call error:", error)
      onError(error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const inputEmail = emailRef.current?.value || formData.email
    const emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

    // Email validation
    const emailDomain = inputEmail.split("@")[1]
    if (emailDomain && genericDomains.includes(emailDomain?.toLowerCase())) {
      setEmailError("Please enter your company official email ID.")
      setIsSubmitting(false)
      return
    }
    if (!emailPattern.test(inputEmail)) {
      setEmailError("Please enter valid email address.")
      setIsSubmitting(false)
      return
    }
    setEmailError("")

    // Phone number validation
    const inputPhone = formData.phone.trim();
    const phoneRegex = /^\+?[0-9]{10,15}$/;

    if (!phoneRegex.test(inputPhone) || inputPhone.includes('12345')) {
      setPhoneError(true);
      setIsSubmitting(false);
    return;
    }

setPhoneError(false);

const userInfo = {
  email: inputEmail,
  mobile: inputPhone,
};


    // API Call
    postCall({
      url: "https://platform.saleassist.ai/incoming_webhooks",
      path: "/form",
      data: {
        form_data: userInfo,
        title: "AIVA Early Access demo request",
      },
      onSuccess: (response: any) => {
        console.log("[v0] Form submitted successfully:", response)
        setFormData({
          email: "",
          phone: "",
        })
        setShowThanks(true)
        onClose()
        setIsSubmitting(false)
      },
      onError: (error: any) => {
        console.error("[v0] Form submission failed:", error)
        alert(`Form submission failed: ${error.message || "Unknown error"}. Please check the console for details.`)
        setIsSubmitting(false)
      },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent showCloseButton={false} className="sm:max-w-lg w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 text-white p-0 overflow-hidden shadow-2xl">
          <DialogClose
              className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-700/70 shadow-lg cursor-pointer transition-all duration-200"
              aria-label="Close"
            >
            <X className="w-5 h-5" />
          </DialogClose>
          
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
          </div>

          {/* Header */}
          <DialogHeader className="p-8 pb-6 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-yellow-400/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Get Early Access
              </DialogTitle>
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Be among the first to experience our revolutionary video avatar AI chat. Fill out the form below to get
              notified when we launch.
            </p>
          </DialogHeader>

          {/* Form */}
          <div className="px-8 pb-8 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200 text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  Email Address *
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    ref={emailRef}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    required
                    className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 h-12 pl-4 pr-4 transition-all backdrop-blur-sm"
                    placeholder="you@company.com"
                  />
                </div>
                {emailError && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                    {emailError}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-200 text-sm font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  Phone Number *
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 h-12 pl-4 pr-4 transition-all backdrop-blur-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {phoneError && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span>
                    Please enter a valid phone number.
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 h-12 cursor-pointer transition-all backdrop-blur-sm"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 font-semibold h-12 cursor-pointer transition-all shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></span>
                      Submitting...
                    </span>
                  ) : (
                    "Get Early Access"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showThanks} onOpenChange={setShowThanks}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 text-white shadow-2xl">
          <DialogClose
              className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-700/70 shadow-lg cursor-pointer transition-all duration-200"
              aria-label="Close"
            >
            <X className="w-5 h-5" />
          </DialogClose>
          
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
          </div>

          <DialogHeader className="relative">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-400/10 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent text-center">
              Thank You!
            </DialogTitle>
            <p className="text-slate-300 text-center mt-4 leading-relaxed">
              Your early access request has been submitted successfully. We'll get back to you soon!
            </p>
          </DialogHeader>
          <div className="flex justify-center pt-6 relative">
            <Button
              onClick={() => setShowThanks(false)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold px-8 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 transition-all"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}