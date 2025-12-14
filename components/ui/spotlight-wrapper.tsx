"use client"

import React, { useRef, useState } from "react"

interface SpotlightProps {
    children: React.ReactNode
    className?: string
}

export function SpotlightWrapper({ children, className = "" }: SpotlightProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-30"
                style={{
                    opacity,
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            {children}
        </div>
    )
}
