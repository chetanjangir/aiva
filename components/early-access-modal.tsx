"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

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
        <DialogContent className="sm:max-w-md w-full mx-4 bg-slate-900 border-slate-700 text-white p-0 overflow-hidden">
          <DialogClose className="text-white hover:text-gray-300" />
          {/* Header */}
          <DialogHeader className="p-6 pb-4 relative">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-yellow-400 text-left">
              Get Early Access
            </DialogTitle>
            <p className="text-slate-300 text-sm md:text-base text-left mt-2">
              Be among the first to experience our revolutionary video avatar AI chat. Fill out the form below to get
              notified when we launch.
            </p>
          </DialogHeader>

          {/* Form */}
          <div className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 h-12"
                  placeholder="Enter your email address"
                />
                {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:ring-yellow-400/20 h-12"
                  placeholder="Enter your phone number"
                />
                {phoneError && <p className="text-red-400 text-sm mt-1">Please enter a valid phone number.</p>}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-semibold h-12 cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showThanks} onOpenChange={setShowThanks}>
        <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700 text-white">
          <DialogClose className="text-white hover:text-gray-300" />
          <DialogHeader>
            <DialogTitle className="text-2xl text-yellow-400 text-center">Thank You!</DialogTitle>
            <p className="text-slate-300 text-center mt-2">
              Your early access request has been submitted successfully. We'll get back to you soon!
            </p>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowThanks(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
