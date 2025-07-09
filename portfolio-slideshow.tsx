"use client"

import { useState, useEffect } from "react"
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    Mail,
    Download,
    ExternalLink,
    Code,
    Video,
    BarChart3,
    Zap,
    Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function PortfolioSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(false)
    const totalSlides = 10

    const slideNavigation = [
        "Personal Branding",
        "Core Strengths",
        "Ecommerce Case",
        "Video Campaigns",
        "AI Website",
        "Industry Scope",
        "Timeline & Impact",
        "Education & Skills",
        "Why Me",
        "Case Vault",
    ]

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isAutoPlay) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % totalSlides)
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [isAutoPlay, totalSlides])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay)
    }

    return (
        <div className= "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" >
        {/* Header */ }
        < header className = "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" >
            <div className="max-w-7xl mx-auto px-4 py-3" >
                <div className="flex justify-between items-center mb-3" >
                    <div className="flex items-center gap-3" >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" >
                            <Code className="w-4 h-4 text-white" />
                                </div>
                                < h1 className = "text-xl font-light tracking-wider text-slate-800" > CREATIVE TECHNOLOGIST PORTFOLIO </h1>
                                    </div>
                                    < div className = "flex items-center gap-4" >
                                        <Button
                variant="outline"
    size = "sm"
    onClick = { toggleAutoPlay }
    className = "flex items-center gap-2 bg-transparent"
        >
        { isAutoPlay?<Pause className = "w-4 h-4" /> : <Play className="w-4 h-4" />}
{ isAutoPlay ? "Pause" : "Auto" }
</Button>
    < span className = "text-sm text-slate-600" >
        { currentSlide + 1} / {totalSlides}
            </span>
            </div>
            </div>

{/* Navigation Grid */ }
<nav className="border-t border-slate-100 pt-3" >
    <div className="grid grid-cols-5 grid-rows-2 gap-3 max-w-5xl mx-auto" >
    {
        slideNavigation.map((title, index) => (
            <Button
                  key= { index }
                  variant = { currentSlide === index ? "default" : "ghost"}
size = "sm"
onClick = {() => goToSlide(index)}
className = {`h-auto py-3 px-2 text-xs font-medium text-center leading-tight ${currentSlide === index
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
    : "hover:bg-blue-50 hover:text-blue-700"
    }`}
                >
    { title }
    </Button>
              ))}
</div>
    </nav>
    </div>
    </header>

{/* Main Content */ }
<main className="max-w-7xl mx-auto px-4 py-8" >
    <div className="relative bg-white/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden min-h-[600px]" >
        {/* Navigation Arrows */ }
        < Button
variant = "outline"
size = "icon"
className = "absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
onClick = { prevSlide }
    >
    <ChevronLeft className="w-4 h-4" />
        </Button>
        < Button
variant = "outline"
size = "icon"
className = "absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
onClick = { nextSlide }
    >
    <ChevronRight className="w-4 h-4" />
        </Button>

{/* Slide 1: Personal Branding */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 0 ? "block" : "hidden"}` }>
    <div className="text-center max-w-4xl mx-auto" >
        <h1 className="text-5xl font-light tracking-wide text-slate-800 mb-6" >
            Creative Technologist with a Marketing Director's Vision
                </h1>
                < p className = "text-xl text-slate-600 font-light mb-8 max-w-3xl mx-auto leading-relaxed" >
                    10 + years in digital marketing across ecommerce, AI, and video production.Not a developer, but
code - literate and Shopify - ready.Strategic content + hands - on execution.
              </p>
    < div className = "flex flex-wrap justify-center gap-3 mb-8" >
    {
        ["AI", "UX", "SEO", "Shopify", "SQL", "Video"].map((skill) => (
            <Badge key= { skill } variant = "secondary" className = "px-4 py-2 text-sm" >
            { skill }
            </Badge>
        ))
    }
        </div>
        < img
src = "/placeholder-33nui.png"
alt = "Professional Portrait"
className = "mx-auto rounded-lg shadow-lg mb-6"
    />
    </div>
    </div>

{/* Slide 2: Core Strengths */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 1 ? "block" : "hidden"}` }>
    <h2 className="text-4xl font-light text-center text-slate-800 mb-12" > What I Bring to the Table </h2>
        < div className = "grid grid-cols-2 gap-8 max-w-5xl mx-auto" >
        {
            [
                {
                    title: "Content & Video Creation",
                    icon: Video,
                    skills: ["Adobe Suite", "Final Cut Pro", "After Effects"],
                },
                { title: "Technical Fluency", icon: Code, skills: ["Shopify", "SQL", "JavaScript"] },
                { title: "AI-Powered Tools", icon: Zap, skills: ["GPT Integration", "Automation", "Image Gen"] },
                { title: "Cross-Industry Adaptability", icon: Globe, skills: ["Fashion", "Dental", "Gaming"] },
              ].map((pillar, index) => (
                    <Card key= { index } className = "hover:shadow-lg transition-shadow" >
                    <CardHeader>
                    <div className="flex items-center gap-3" >
                <pillar.icon className="w-8 h-8 text-blue-600" />
                <CardTitle className="text-xl" > { pillar.title } </CardTitle>
                </div>
                </CardHeader>
                < CardContent >
                <div className="flex flex-wrap gap-2" >
                {
                    pillar.skills.map((skill) => (
                        <Badge key= { skill } variant = "outline" >
                        { skill }
                        </Badge>
                    ))
        }
            </div>
            </CardContent>
            </Card>
              ))}
</div>
    </div>

{/* Slide 3: Ecommerce Case */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 2 ? "block" : "hidden"}` }>
    <div className="max-w-5xl mx-auto" >
        <h2 className="text-4xl font-light text-center text-slate-800 mb-8" > OrangeShine DTC Relaunch </h2>
            < div className = "grid grid-cols-2 gap-12 items-center" >
                <div>
                <div className="space-y-6" >
                    <div className="flex items-center gap-3" >
                        <BarChart3 className="w-6 h-6 text-green-600" />
                            <span className="text-lg font-medium" > +30 % organic traffic </span>
                                </div>
                                < div className = "space-y-3" >
                                    <p className="text-slate-600" > Migrated from wholesale to Shopify DTC </p>
                                        < p className = "text-slate-600" > New UI, taxonomy, SEO, UX flows </p>
                                            </div>
                                            < div className = "flex flex-wrap gap-2" >
                                            {
                                                ["Shopify Liquid", "Figma", "GA4", "SEMrush"].map((tool) => (
                                                    <Badge key= { tool } variant = "secondary" >
                                                    { tool }
                                                    </Badge>
                                                ))
                                            }
                                                </div>
                                                < Dialog >
                                                <DialogTrigger asChild >
                                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600" >
                                                    See Full Case < ExternalLink className = "w-4 h-4 ml-2" />
                                                        </Button>
                                                        </DialogTrigger>
                                                        < DialogContent className = "max-w-4xl" >
                                                            <DialogHeader>
                                                            <DialogTitle>OrangeShine DTC Relaunch - Full Case Study </DialogTitle>
                                                                <DialogDescription>
                            Complete transformation from wholesale to direct - to - consumer ecommerce
    </DialogDescription>
    </DialogHeader>
    < div className = "space-y-4" >
        <img
                            src="/placeholder-id7xz.png"
alt = "Before/After Comparison"
className = "w-full rounded-lg"
    />
    <div className="grid grid-cols-3 gap-4 text-center" >
        <div className="p-4 bg-green-50 rounded-lg" >
            <div className="text-2xl font-bold text-green-600" > +30 % </div>
                < div className = "text-sm text-slate-600" > Organic Traffic </div>
                    </div>
                    < div className = "p-4 bg-blue-50 rounded-lg" >
                        <div className="text-2xl font-bold text-blue-600" > +25 % </div>
                            < div className = "text-sm text-slate-600" > Conversion Rate </div>
                                </div>
                                < div className = "p-4 bg-purple-50 rounded-lg" >
                                    <div className="text-2xl font-bold text-purple-600" > +40 % </div>
                                        < div className = "text-sm text-slate-600" > Revenue </div>
                                            </div>
                                            </div>
                                            </div>
                                            </DialogContent>
                                            </Dialog>
                                            </div>
                                            </div>
                                            < div >
                                            <img src="/orangeshine-ecommerce-mockup.png" alt = "OrangeShine Website" className = "rounded-lg shadow-lg" />
                                                </div>
                                                </div>
                                                </div>
                                                </div>

{/* Slide 4: Video Campaigns */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 3 ? "block" : "hidden"}` }>
    <div className="max-w-5xl mx-auto" >
        <h2 className="text-4xl font-light text-center text-slate-800 mb-8" >
            Alpinestars & Verizon - Campaigns in Motion
            </h2>
            < div className = "grid grid-cols-2 gap-12 items-center" >
                <div>
                <img src="/placeholder-zun7l.png" alt = "Video Production" className = "rounded-lg shadow-lg" />
                    </div>
                    < div >
                    <div className="space-y-6" >
                        <div className="space-y-3" >
                            <p className="text-slate-600" > Concept - to - screen production </p>
                                < p className = "text-slate-600" > Interview, TV, social ads </p>
                                    </div>
                                    < div className = "grid grid-cols-2 gap-4" >
                                        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg" >
                                            <div className="text-2xl font-bold text-blue-600" > +40 % </div>
                                                < div className = "text-sm text-slate-600" > Engagement Rate </div>
                                                    </div>
                                                    < div className = "text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg" >
                                                        <div className="text-2xl font-bold text-green-600" > +20 % </div>
                                                            < div className = "text-sm text-slate-600" > Sales Lift </div>
                                                                </div>
                                                                </div>
                                                                < div className = "flex flex-wrap gap-2" >
                                                                {
                                                                    ["Adobe Suite", "Final Cut Pro", "After Effects"].map((tool) => (
                                                                        <Badge key= { tool } variant = "secondary" >
                                                                        { tool }
                                                                        </Badge>
                                                                    ))
                                                                }
                                                                    </div>
                                                                    < Dialog >
                                                                    <DialogTrigger asChild >
                                                                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600" >
                                                                        View Campaign Reel < Video className = "w-4 h-4 ml-2" />
                                                                            </Button>
                                                                            </DialogTrigger>
                                                                            < DialogContent className = "max-w-4xl" >
                                                                                <DialogHeader>
                                                                                <DialogTitle>Video Campaign Portfolio </DialogTitle>
                                                                                    < DialogDescription > Behind - the - scenes and campaign results </DialogDescription>
                                                                                        </DialogHeader>
                                                                                        < div className = "space-y-4" >
                                                                                            <img src="/video-campaign-reel-montage.png" alt = "Campaign Reel" className = "w-full rounded-lg" />
                                                                                                <p className="text-slate-600" >
                                                                                                    Campaign metrics and behind - the - scenes footage showcasing the complete production process
                            from concept to delivery.
                          </p>
    </div>
    </DialogContent>
    </Dialog>
    </div>
    </div>
    </div>
    </div>
    </div>

{/* Slide 5: AI Website Project */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 4 ? "block" : "hidden"}` }>
    <div className="max-w-5xl mx-auto" >
        <h2 className="text-4xl font-light text-center text-slate-800 mb-8" >
            AI - Powered Startup Site, Solo Built
                </h2>
                < div className = "grid grid-cols-2 gap-12 items-center" >
                    <div>
                    <div className="space-y-6" >
                        <div className="space-y-3" >
                            <p className="text-slate-600" > GPT + SQL integration </p>
                                < p className = "text-slate-600" > Automated content pipeline </p>
                                    < p className = "text-slate-600" > Minimal team, max output </p>
                                        </div>
                                        < div className = "flex flex-wrap gap-2" >
                                        {
                                            ["GPT API", "SQL", "React", "Node.js"].map((tool) => (
                                                <Badge key= { tool } variant = "secondary" >
                                                { tool }
                                                </Badge>
                                            ))
                                        }
                                            </div>
                                            < Dialog >
                                            <DialogTrigger asChild >
                                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600" >
                                                Explore AI Site < Zap className = "w-4 h-4 ml-2" />
                                                    </Button>
                                                    </DialogTrigger>
                                                    < DialogContent className = "max-w-4xl" >
                                                        <DialogHeader>
                                                        <DialogTitle>AI - Powered Website Walkthrough </DialogTitle>
                                                            <DialogDescription>
                            Complete AI integration with automated content generation
    </DialogDescription>
    </DialogHeader>
    < div className = "space-y-4" >
        <img
                            src="/placeholder.svg?height=300&width=600"
alt = "AI Website Interface"
className = "w-full rounded-lg"
    />
    <p className="text-slate-600" >
        Interactive demo showing automated content generation, chatbot integration, and dynamic user
                            experiences powered by AI.
                          </p>
    </div>
    </DialogContent>
    </Dialog>
    </div>
    </div>
    < div >
    <img src="/placeholder.svg?height=400&width=500" alt = "AI Website" className = "rounded-lg shadow-lg" />
        </div>
        </div>
        </div>
        </div>

{/* Slide 6: Industry Scope */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 5 ? "block" : "hidden"}` }>
    <h2 className="text-4xl font-light text-center text-slate-800 mb-12" > Diverse Fields, Smarter Strategy </h2>
        < div className = "max-w-6xl mx-auto" >
            <div className="grid grid-cols-4 gap-6 mb-8" >
            {
                [
                    { sector: "Fashion", brand: "OrangeShine", color: "from-pink-500 to-rose-500" },
                    { sector: "Dental", brand: "Biotem", color: "from-blue-500 to-cyan-500" },
                    { sector: "Gaming", brand: "Kojima Productions", color: "from-purple-500 to-indigo-500" },
                    { sector: "Airlines", brand: "American Airlines", color: "from-red-500 to-orange-500" },
                    { sector: "Wellness", brand: "Various Brands", color: "from-green-500 to-emerald-500" },
                    { sector: "Cannabis", brand: "Industry Leaders", color: "from-lime-500 to-green-500" },
                    { sector: "Art", brand: "Creative Studios", color: "from-violet-500 to-purple-500" },
                    { sector: "Sports", brand: "Alpinestars", color: "from-orange-500 to-red-500" },
                ].map((item, index) => (
                        <Card key= { index } className = "hover:shadow-lg transition-all cursor-pointer group" >
                        <CardContent className="p-6 text-center" >
                    <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                >
                <Globe className="w-8 h-8 text-white" />
                    </div>
                    < h3 className = "font-semibold text-slate-800 mb-2" > { item.sector } </h3>
                        < p className = "text-sm text-slate-600" > { item.brand } </p>
                            </CardContent>
                            </Card>
                ))}
</div>
    </div>
    </div>

{/* Slide 7: Timeline & Impact */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 6 ? "block" : "hidden"}` }>
    <h2 className="text-4xl font-light text-center text-slate-800 mb-12" > From MTV to AI Startups </h2>
        < div className = "max-w-4xl mx-auto" >
            <div className="space-y-8" >
            {
                [
                    {
                        year: "2005-2010",
                        company: "MTV Networks",
                        role: "Creative Producer",
                        impact: "Video Production Mastery",
                    },
                    {
                        year: "2010-2015",
                        company: "Fashion Brands",
                        role: "Digital Director",
                        impact: "Ecommerce Strategy",
                    },
                    { year: "2015-2020", company: "Healthcare Tech", role: "Marketing Director", impact: "B2B Growth" },
                    {
                        year: "2020-2025",
                        company: "AI Startups",
                        role: "Creative Technologist",
                        impact: "AI Integration",
                    },
                ].map((milestone, index) => (
                        <div
                    key= { index }
                    className = "flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                        >
                        <div className="text-center min-w-[120px]" >
                    <div className="text-lg font-semibold text-blue-600" > { milestone.year } </div>
                    </div>
                    < div className = "flex-1" >
                    <h3 className="text-xl font-semibold text-slate-800" > { milestone.company } </h3>
                    < p className = "text-slate-600" > { milestone.role } </p>
                    < p className = "text-sm text-slate-500 mt-1" > { milestone.impact } </p>
                    </div>
                    </div>
                    ))
            }
                </div>
                </div>
                </div>

{/* Slide 8: Education & Skills */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 7 ? "block" : "hidden"}` }>
    <h2 className="text-4xl font-light text-center text-slate-800 mb-12" > Education & Skills </h2>
        < div className = "max-w-5xl mx-auto" >
            <div className="grid grid-cols-2 gap-12" >
                <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6" > Education </h3>
                    < div className = "space-y-4" >
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg" >
                            <h4 className="font-semibold" > BFA in Computer Art </h4>
                                < p className = "text-slate-600" > School of Visual Arts, New York </p>
                                    </div>
                                    < div className = "p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg" >
                                        <h4 className="font-semibold" > Aviation Science </h4>
                                            < p className = "text-slate-600" > Orange Coast College, California </p>
                                                </div>
                                                </div>
                                                </div>
                                                < div >
                                                <h3 className="text-2xl font-semibold text-slate-800 mb-6" > Skill Clusters </h3>
                                                    < div className = "space-y-4" >
                                                    {
                                                        [
                                                            { category: "Web", skills: ["HTML/CSS", "JavaScript", "SQL"] },
                                                            { category: "Creative", skills: ["Adobe Suite", "Final Cut Pro"] },
                                                            { category: "AI", skills: ["GPT", "Automation", "Image Gen"] },
                                                            { category: "Marketing", skills: ["HubSpot", "Klaviyo", "SEO"] },
                    ].map((cluster, index) => (
                                                                <div key= { index } className = "p-4 bg-white border border-slate-200 rounded-lg" >
                                                                <h4 className="font-semibold text-slate-800 mb-2" > { cluster.category } </h4>
                                                            < div className = "flex flex-wrap gap-2" >
                                                            {
                                                                cluster.skills.map((skill) => (
                                                                    <Badge key= { skill } variant = "outline" >
                                                                    { skill }
                                                                    </Badge>
                                                                ))
                                                    }
                                                        </div>
                                                        </div>
                    ))}
</div>
    </div>
    </div>
    </div>
    </div>

{/* Slide 9: Why Me */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 8 ? "block" : "hidden"}` }>
    <div className="text-center max-w-4xl mx-auto" >
        <h2 className="text-4xl font-light text-slate-800 mb-8" > Why Me </h2>
            < div className = "text-2xl font-light text-slate-600 mb-12 leading-relaxed" >
                Director who creates.Creator who codes.Coder who leads.
              </div>
                    < div className = "space-y-6 mb-12" >
                        <p className="text-lg text-slate-600 leading-relaxed" >
                            I bridge the gap between creative vision and technical execution, bringing both strategic thinking and
hands - on skills to every project.
                </p>
    < p className = "text-lg text-slate-600 leading-relaxed" >
        With a decade of experience across diverse industries, I understand how to adapt strategies and
                  technologies to meet unique business needs.
                </p>
    </div>
    < div className = "flex flex-col sm:flex-row gap-4 justify-center" >
        <Button size="lg" className = "bg-gradient-to-r from-blue-600 to-purple-600" >
            Let's Work Together
                </Button>
                < Button size = "lg" variant = "outline" >
                    <Download className="w-4 h-4 mr-2" />
                        Download Resume
                            </Button>
                            < Button size = "lg" variant = "outline" >
                                <Mail className="w-4 h-4 mr-2" />
                                    Contact Me
                                        </Button>
                                        </div>
                                        </div>
                                        </div>

{/* Slide 10: Case Vault */ }
<div className={ `p-12 min-h-[600px] ${currentSlide === 9 ? "block" : "hidden"}` }>
    <h2 className="text-4xl font-light text-center text-slate-800 mb-12" > Real Work, Real Results </h2>
        < div className = "max-w-6xl mx-auto" >
            <div className="grid grid-cols-3 gap-6" >
            {
                [
                    {
                        title: "DTC SEO",
                        description: "Organic growth strategy",
                        metric: "+150% traffic",
                        image: "seo dashboard analytics",
                    },
                    {
                        title: "AI Site",
                        description: "Full-stack AI integration",
                        metric: "Solo built",
                        image: "AI website interface",
                    },
                    {
                        title: "Video Ad",
                        description: "Multi-platform campaign",
                        metric: "+40% engagement",
                        image: "video production setup",
                    },
                    {
                        title: "Dental Platform",
                        description: "B2B healthcare solution",
                        metric: "3x conversion",
                        image: "medical platform interface",
                    },
                    {
                        title: "B2B Portal",
                        description: "Enterprise dashboard",
                        metric: "+200% efficiency",
                        image: "business dashboard",
                    },
                    {
                        title: "Fashion Ecommerce",
                        description: "Complete brand overhaul",
                        metric: "+85% revenue",
                        image: "fashion ecommerce site",
                    },
                ].map((project, index) => (
                        <Dialog key= { index } >
                        <DialogTrigger asChild >
                        <Card className="cursor-pointer hover:shadow-lg transition-all group" >
                    <CardContent className="p-0" >
                    <img
                            src={`/placeholder.svg?height=200&width=300&query=${project.image}`}
alt = { project.title }
className = "w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-4" >
        <h3 className="font-semibold text-slate-800 mb-2" > { project.title } </h3>
            < p className = "text-sm text-slate-600 mb-2" > { project.description } </p>
                < Badge variant = "secondary" > { project.metric } </Badge>
                    </div>
                    </CardContent>
                    </Card>
                    </DialogTrigger>
                    < DialogContent className = "max-w-4xl" >
                        <DialogHeader>
                        <DialogTitle>{ project.title } - Case Study </DialogTitle>
                            < DialogDescription > { project.description } </DialogDescription>
                            </DialogHeader>
                            < div className = "space-y-4" >
                                <img
                          src={ `/placeholder.svg?height=300&width=600&query=${project.image} detailed view` }
alt = {`${project.title} detailed view`}
className = "w-full rounded-lg"
    />
    <div className="grid grid-cols-3 gap-4 text-center" >
        <div className="p-4 bg-blue-50 rounded-lg" >
            <div className="text-xl font-bold text-blue-600" > { project.metric } </div>
                < div className = "text-sm text-slate-600" > Key Result </div>
                    </div>
                    < div className = "p-4 bg-green-50 rounded-lg" >
                        <div className="text-xl font-bold text-green-600" > 6 months </div>
                            < div className = "text-sm text-slate-600" > Timeline </div>
                                </div>
                                < div className = "p-4 bg-purple-50 rounded-lg" >
                                    <div className="text-xl font-bold text-purple-600" > Solo </div>
                                        < div className = "text-sm text-slate-600" > Team Size </div>
                                            </div>
                                            </div>
                                            </div>
                                            </DialogContent>
                                            </Dialog>
                ))}
</div>
    </div>
    </div>
    </div>

{/* Slide Indicators */ }
<div className="flex justify-center gap-2 mt-8" >
{
    Array.from({ length: totalSlides }).map((_, index) => (
        <button
              key= { index }
              onClick = {() => goToSlide(index)}
className = {`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
    }`}
            />
          ))}
</div>
    </main>

{/* Footer */ }
<footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 mt-12" >
    <div className="max-w-7xl mx-auto px-4 py-6 text-center" >
        <p className="text-slate-600 font-light" >
            © 2024 Creative Technologist Portfolio.A revolutionary approach to digital marketing leadership.
          </p>
    </div>
    </footer>
    </div>
  )
}
