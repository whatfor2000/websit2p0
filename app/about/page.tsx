import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    const team = [
        {
            name: "Nawaphat Russameejunchai",
            role: "Team Manager & Full-Stack Developer",
            bio: "Leading the team with a focus on innovation, collaboration, and delivering high-quality software solutions.",
            github: "https://github.com/whatfor2000",
            image: "https://github.com/whatfor2000.png",
            initials: "NR"
        },
        {
            name: "Korrakit Gumnarai (Paowick)",
            role: "Full-Stack Developer",
            bio: "Specializing in building robust web applications and dedicated to creating seamless user experiences through thoughtful design.",
            github: "https://github.com/paowick",
            image: "https://github.com/paowick.png",
            initials: "KG"
        },
        {
            name: "Pattarapon Somsakul (Dande)",
            role: "Front-End Developer",
            bio: "Passionate about crafting intuitive user interfaces and ensuring a smooth, engaging experience for all users.",
            github: "https://github.com/pattaraponssky",
            image: "https://github.com/pattaraponssky.png",
            initials: "PS"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-muted/50 py-16 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        About Cornosoft
                    </h1>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        We are a team of passionate developers dedicated to building the future of software.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container px-4 py-12 md:py-24 lg:py-32 mx-auto">
                <div className="mx-auto max-w-[800px] text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At Cornosoft, we believe in the power of technology to transform businesses.
                        Our mission is to deliver professional, scalable, and innovative software solutions
                        that empower our clients to achieve their goals. We combine technical expertise
                        with a deep understanding of business needs to create impactful digital products.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="container px-4 py-12 md:py-24 lg:py-32 mx-auto bg-secondary/20 rounded-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Team</h2>
                    <p className="text-muted-foreground mt-4">The minds behind Cornosoft.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {team.map((member) => (
                        <div key={member.github} className="group relative flex flex-col items-center p-8 glass rounded-2xl transition-all duration-300">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                                <Avatar className="h-32 w-32 border-4 border-white/10 shadow-lg">
                                    <AvatarImage src={member.image} alt={member.name} />
                                    <AvatarFallback>{member.initials}</AvatarFallback>
                                </Avatar>
                            </div>

                            <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                            <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                            <p className="text-center text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                {member.bio}
                            </p>

                            <div className="flex gap-2">
                                <Button variant="outline" size="icon" asChild className="glass border-white/20 hover:bg-white/10">
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <Github className="h-4 w-4" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="icon" asChild disabled className="glass border-white/20">
                                    {/* Placeholder for LinkedIn or other social */}
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="container py-12 md:py-24 mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Want to work with us?</h2>
                <p className="text-muted-foreground mb-8">We are always looking for new challenges.</p>
                <Button size="lg" asChild>
                    <Link href="/#contact">Contact Us</Link>
                </Button>
            </section>
        </div>
    )
}
