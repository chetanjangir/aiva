"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageCircle, Video, Sparkles, Zap, Users, ArrowRight, Eye, Ear, Globe, Monitor, Calendar } from 'lucide-react' // Added new icons
import Image from "next/image"
import { EarlyAccessModal } from "./early-access-modal"


export  function LandingPage() {
const [isModalOpen, setIsModalOpen] = useState(false)

return (
<div className="relative min-h-screen bg-custom-gradient overflow-hidden">
{/* All previous background animations and overlays removed */}

<div className="relative z-10">
  {/* Header */}
  {/* <header className="container mx-auto px-4 pt-4 pb-0 backdrop-blur-sm">
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/aiva-logo-new.png"
        alt="AIVA Logo"
        className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[300px] h-auto"
        style={{ width: '300px', height: 'auto' }}
      />
      <div className="flex items-center text-gray-400 text-sm mt-0 mb-0">
        <Sparkles className="w-4 h-4 mr-1 text-yellow-400" />
        A.I. Video Agents
      </div>
    </div>
  </header> */}

  {/* Hero Section */}
  <section className="container mx-auto mb-2 px-4 py-8 sm:py-8 text-center pt-0">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white md:leading-[1.3]">
        How to engage clients? <br className="mb-2" />
        <span className="text-yellow-400">"OLD WAY"</span> or <span className="text-white relative inline-block">"NEW AIVA WAY"<span className="absolute bottom-0 left-0 right-0 h-1/2 bg-yellow-400/50"></span></span>
      </h1>
    </div>
  </section>

  {/* Features Section - Updated background and pill colors */}
  <section className="container mx-auto px-4 mb-4 py-4 sm:py-12 bg-features-gradient rounded-xl"> {/* Removed border */}
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-gray-700 text-gray-300 text-sm font-medium transition-colors duration-300 hover:border-yellow-400 hover:shadow-lg">
        <Eye className="w-5 h-5 text-gray-300" />
        Visual Perception
      </div>
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-gray-700 text-gray-300 text-sm font-medium transition-colors duration-300 hover:border-yellow-400 hover:shadow-lg">
        <Ear className="w-5 h-5 text-gray-300" />
        Audio Processing
      </div>
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-gray-700 text-gray-300 text-sm font-medium transition-colors duration-300 hover:border-yellow-400 hover:shadow-lg">
        <Video className="w-5 h-5 text-gray-300" />
        Real-time Video
      </div>
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-gray-700 text-gray-300 text-sm font-medium transition-colors duration-300 hover:border-yellow-400 hover:shadow-lg">
        <Globe className="w-5 h-5 text-gray-300" />
        Multilingual
      </div>
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-gray-700 text-gray-300 text-sm font-medium transition-colors duration-300 hover:border-yellow-400 hover:shadow-lg">
        <Monitor className="w-5 h-5 text-gray-300" />
        Screen Sharing
      </div>
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-gray-700 text-gray-300 text-sm font-medium transition-colors duration-300 hover:border-yellow-400 hover:shadow-lg">
        <Calendar className="w-5 h-5 text-gray-300" />
        Smart Scheduling
      </div>
    </div>
  </section>

  {/* Choice Cards */}
  <section className="container mx-auto px-4 pb-16 sm:pb-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
      {/* Option 1: Traditional Text Chat - OLD WAY */}
      <Card className="relative overflow-hidden border-2 border-gray-700 bg-black/60 backdrop-blur-lg hover:border-gray-600 transition-all duration-300 cursor-pointer group">
        <div className="absolute top-4 left-4 bg-gray-700 text-white px-3 py-1 rounded-full text-md font-medium">
          OLD WAY
        </div>
        <CardHeader className="text-center pb-4 pt-12">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors">
            <MessageCircle className="w-8 h-8 text-gray-400" />
          </div>
          <CardTitle className="text-2xl text-gray-200">Traditional Text Chat</CardTitle>
          <CardDescription className="text-gray-400">Basic text-based conversation interface</CardDescription>
        </CardHeader>
        <div className="px-2 sm:px-4 pb-4">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-800 rounded-lg overflow-hidden mx-auto max-w-sm sm:max-w-md md:max-w-lg">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source
                src="https://client-static.saleassist.ai/9eb1c850-96f3-480a-9fa5-392733431de6/chatbotforaiva"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <CardContent className="text-center px-4">
          <ul className="text-sm text-gray-400 mb-6 space-y-2">
            <li>• Standard text responses</li>
            <li>• Basic functionality</li>
            <li>• Limited engagement</li>
            <li>• Traditional UI</li>
          </ul>
          <div className="flex justify-center">
            <Button variant="outline" className="w-auto bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-gray-200 transition-all duration-300 cursor-not-allowed" disabled>
              Agent Offline. Try Chat after some time
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Option 2: Video Avatar Chat - NEW WAY */}
      <Card className="relative overflow-hidden border-2 border-yellow-400 bg-black/60 backdrop-blur-lg hover:border-yellow-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
        <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-md font-bold">
          NEW AIVA WAY
        </div>
        <CardHeader className="text-center pb-4 pt-12">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Video className="w-8 h-8 text-black" />
          </div>
          <CardTitle className="text-2xl text-yellow-400">
            Interactive Video Avatar
          </CardTitle>
          <CardDescription className="text-gray-300">Engaging AI with lifelike video responses</CardDescription>
        </CardHeader>
        <div className="px-2 sm:px-4 pb-4">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-800 rounded-lg overflow-hidden mx-auto max-w-sm sm:max-w-md md:max-w-lg">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source
                src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f%2F67d8a1da32ab7610ceb08ff1_doctor-transcode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
        <CardContent className="text-center px-4">
          <ul className="text-sm text-gray-300 mb-6 space-y-2">
            <li className="flex items-center justify-center">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              Lifelike video responses
            </li>
            <li className="flex items-center justify-center">
              <Users className="w-4 h-4 text-yellow-400 mr-2" />
              Natural conversation flow
            </li>
            <li className="flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              Emotional intelligence
            </li>
            <li className="flex items-center justify-center">
              <Video className="w-4 h-4 text-yellow-400 mr-2" />
              Premium experience
            </li>
          </ul>
          <div className="flex justify-center">
            <Button
              className="cursor-pointer w-auto overflow-hidden bg-yellow-400 hover:bg-yellow-500 text-black font-semibold g transition-transform"
              onClick={() => setIsModalOpen(true)}>
              Get Early Access
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
          Premium
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-black" />
        </div>
      </Card>
    </div>
  </section>

  {/* Lead Capture Modal */}
 
</div>
<EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 </div>

 
)
}
