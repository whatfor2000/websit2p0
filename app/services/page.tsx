import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Smartphone,
    Wifi,
    Cloud,
    Database,
    Server,
    Globe,
    Cpu,
    Settings
} from "lucide-react"

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-muted/50 py-16 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Our Services
                    </h1>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Tailored technology solutions to drive your business forward. From custom software to cloud infrastructure.
                    </p>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="container px-4 py-12 md:py-24 lg:py-32 mx-auto">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">

                    {/* Custom Software */}
                    <div className="group relative overflow-hidden rounded-2xl glass p-8 transition-shadow hover:shadow-xl">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Settings className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Custom Software</h3>
                        <p className="text-muted-foreground mb-4">
                            We build software that fits your business like a glove. No bloat, just the features you need to streamline operations and increase efficiency.
                        </p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>Enterprise Resource Planning (ERP)</li>
                            <li>Customer Relationship Management (CRM)</li>
                            <li>Workflow Automation Tools</li>
                        </ul>
                    </div>

                    {/* Application Development */}
                    <div className="group relative overflow-hidden rounded-2xl glass p-8 transition-shadow hover:shadow-xl">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Smartphone className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Application Development</h3>
                        <p className="text-muted-foreground mb-4">
                            High-performance applications for every platform. We create seamless user experiences that engage and convert.
                        </p>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            <li>iOS & Android Mobile Apps</li>
                            <li>Cross-Platform Development</li>
                            <li>Progressive Web Apps (PWA)</li>
                        </ul>
                    </div>

                    {/* Networking & IoT */}
                    <div className="group relative overflow-hidden rounded-2xl glass p-8 transition-shadow hover:shadow-xl">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Wifi className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Networking & IoT</h3>
                        <p className="text-muted-foreground mb-4">
                            Connect the physical and digital worlds. We design robust networking solutions and smart IoT systems for modern industries.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <Cpu className="h-4 w-4 text-primary" />
                                <span className="text-sm">Smart Sensors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Server className="h-4 w-4 text-primary" />
                                <span className="text-sm">Edge Computing</span>
                            </div>
                        </div>
                    </div>

                    {/* Cloud Maintenance & Control */}
                    <div className="group relative overflow-hidden rounded-2xl glass p-8 transition-shadow hover:shadow-xl">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Cloud className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Cloud Maintenance & Control</h3>
                        <p className="text-muted-foreground mb-4">
                            End-to-end cloud management services ensuring your infrastructure is always up, secure, and optimized.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Globe className="mt-1 h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Webservice</h4>
                                    <p className="text-xs text-muted-foreground">API management and microservices orchestration.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Database className="mt-1 h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Database</h4>
                                    <p className="text-xs text-muted-foreground">Optimization, backup, and high-availability setups.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Server className="mt-1 h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Website Hosting</h4>
                                    <p className="text-xs text-muted-foreground">Secure hosting with 99.9% uptime guarantee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-24 rounded-3xl bg-primary p-8 md:p-12 text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Ready to upgrade your infrastructure?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-primary-foreground/80 mb-8 md:text-lg">
                        Let&apos;s discuss how our services can solve your specific business challenges.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/#contact">Get a Quote</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
