"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, FileText } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Custom Software",
        requirements: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const subject = `New Project Inquiry: ${formData.projectType}`
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AProject Type: ${formData.projectType}%0D%0A%0D%0ARequirements:%0D%0A${formData.requirements}`
        window.location.href = `mailto:contact@cornosoft.com?subject=${subject}&body=${body}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="w-full max-w-lg mx-auto p-6 glass rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <FileText className="h-6 w-6" />
                <h3 className="text-xl font-bold">Project Requirements</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 text-left">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2 text-left">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2 text-left">
                    <Label htmlFor="projectType">Service Interest</Label>
                    <select
                        id="projectType"
                        name="projectType"
                        className="flex h-10 w-full rounded-md border border-white/20 glass px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={formData.projectType}
                        onChange={handleChange}
                    >
                        <option>Custom Software</option>
                        <option>Application Development</option>
                        <option>Networking & IoT</option>
                        <option>Cloud Maintenance & Control</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2 text-left">
                    <Label htmlFor="requirements">Brief Specification / Requirements</Label>
                    <Textarea
                        id="requirements"
                        name="requirements"
                        placeholder="Describe your project goals, key features, and timeline..."
                        className="min-h-[120px]"
                        required
                        value={formData.requirements}
                        onChange={handleChange}
                    />
                </div>

                <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Request
                </Button>
            </form>
        </div>
    )
}
