"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

// 1. 3D Tilt Card
const TiltCard = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget
        const box = card.getBoundingClientRect()
        const x = e.clientX - box.left
        const y = e.clientY - box.top
        const centerX = box.width / 2
        const centerY = box.height / 2
        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10

        setRotate({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 })
    }

    return (
        <div
            className="perspective-1000 w-full h-40"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-xl flex items-center justify-center text-white font-bold text-xl transition-transform duration-200 ease-out"
                style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
            >
                Hover Me (Tilt)
            </div>
        </div>
    )
}

// 2. Neon Glow Button
const NeonButton = () => {
    return (
        <button className="relative px-8 py-3 text-white bg-transparent border-2 border-cyan-400 rounded-lg shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee] transition-all duration-300 font-bold tracking-wider uppercase group">
            <span className="relative z-10">Neon Glow</span>
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
    )
}

// 3. Spotlight Card
const SpotlightCard = () => {
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return
        const rect = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            ref={divRef}
            className="relative w-full h-40 bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="pointer-events-none absolute -inset-px transition opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`
                }}
            />
            <span className="text-zinc-200 font-medium z-10">Spotlight Effect</span>
        </div>
    )
}

// 4. Glitch Text
const GlitchText = () => {
    return (
        <div className="relative font-bold text-4xl text-black dark:text-white group cursor-default">
            <span className="absolute top-0 left-0 -ml-1 translate-x-[2px] text-red-500 opacity-0 group-hover:opacity-100 animate-pulse">GLITCH</span>
            <span className="absolute top-0 left-0 -ml-1 -translate-x-[2px] text-blue-500 opacity-0 group-hover:opacity-100 animate-pulse delay-75">GLITCH</span>
            <span className="relative">GLITCH</span>
        </div>
    )
}

// 5. Magnetic Button
const MagneticButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY, currentTarget } = e
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const x = (clientX - (left + width / 2)) * 0.5
        const y = (clientY - (top + height / 2)) * 0.5
        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <Button
            className="rounded-full h-16 w-16 bg-primary text-primary-foreground transition-transform duration-200 ease-out"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            Magnet
        </Button>
    )
}

// 6. Glassmorphism Card
const GlassCard = () => {
    return (
        <div className="relative w-full h-40 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop')] bg-cover rounded-xl overflow-hidden">
            <div className="w-4/5 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
                Glassmorphism
            </div>
        </div>
    )
}

// 7. Animated Gradient Border
const GradientBorder = () => {
    return (
        <div className="relative w-full h-32 p-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient-xy overflow-hidden flex items-center justify-center">
            {/* This requires custom CSS animation usually, approximating with pulse for now since we can't easily add global keyframes here without style tag */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-pulse" />
            <div className="relative w-full h-full bg-background rounded-lg flex items-center justify-center z-10">
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                    Gradient Border
                </span>
            </div>
        </div>
    )
}

// 8. Pulse Avatar
const PulseAvatar = () => {
    return (
        <div className="relative flex items-center justify-center h-24 w-24">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
            <div className="relative inline-flex rounded-full h-20 w-20 bg-sky-500 items-center justify-center text-white font-bold text-2xl border-4 border-background">
                JD
            </div>
        </div>
    )
}

// 9. Flip Card
const FlipCard = () => {
    return (
        <div className="group w-full h-40 [perspective:1000px]">
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center [backface-visibility:hidden]">
                    <span className="font-bold text-xl">Hover Me</span>
                </div>
                <div className="absolute inset-0 bg-blue-500 text-white rounded-xl flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <span className="font-bold text-xl">Hello!</span>
                </div>
            </div>
        </div>
    )
}

// 10. Typing Text
const TypingText = () => {
    const text = "Designing the Future..."
    const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1))
            i++
            if (i > text.length) {
                // Pause then reset
                clearInterval(interval)
                setTimeout(() => {
                    setDisplayedText("")
                    // Restart logic would go here ideally in a recursive function
                }, 2000)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="font-mono text-xl border-r-4 border-primary animate-pulse pr-1 h-8">
            {displayedText}
        </div>
    )
}

// Helper for consistent layout
const GalleryItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="flex flex-col p-6 border rounded-xl glass h-full">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">{title}</h3>
        <div className="flex-1 flex items-center justify-center min-h-[180px] w-full">
            {children}
        </div>
    </div>
)

export function CreativeGallery() {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            <GalleryItem title="01. 3D Tilt">
                <TiltCard />
            </GalleryItem>

            <GalleryItem title="02. Neon Glow">
                <NeonButton />
            </GalleryItem>

            <GalleryItem title="03. Spotlight">
                <SpotlightCard />
            </GalleryItem>

            <GalleryItem title="04. Glitch Text">
                <GlitchText />
            </GalleryItem>

            <GalleryItem title="05. Magnetic Button">
                <MagneticButton />
            </GalleryItem>

            <GalleryItem title="06. Glassmorphism">
                <GlassCard />
            </GalleryItem>

            <GalleryItem title="07. Gradient Border">
                <GradientBorder />
            </GalleryItem>

            <GalleryItem title="08. Pulse Avatar">
                <PulseAvatar />
            </GalleryItem>

            <GalleryItem title="09. Flip Card">
                <FlipCard />
            </GalleryItem>

            <GalleryItem title="10. Typing Text">
                <TypingText />
            </GalleryItem>
        </div>
    )
}
