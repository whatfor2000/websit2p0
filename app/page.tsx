import { Button } from "@/components/ui/button"
import { Cloud, FileCode, Smartphone, ShieldCheck, Zap, Globe, Mail, Phone, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-secondary/20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
          <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Cornosoft Software House
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
            Elevating Business with Cloud Solutions
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We build scalable, secure, and modern cloud applications tailored to your business needs using the latest technologies.
          </p>
          <div className="space-x-4 pt-4">
            <Button size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container space-y-6 py-8 md:py-12 lg:py-24 mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
            Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Comprehensive software development services designed for modern enterprises.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 pt-8">
          <div className="relative overflow-hidden rounded-lg glass p-2 group hover:shadow-lg transition-all">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 bg-secondary/5">
              <Cloud className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="space-y-2">
                <h3 className="font-bold">Cloud Applications</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable SaaS platforms built on AWS, Azure, or GCP.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg glass p-2 group hover:shadow-lg transition-all">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 bg-secondary/5">
              <Smartphone className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="space-y-2">
                <h3 className="font-bold">Mobile Development</h3>
                <p className="text-sm text-muted-foreground">
                  Native and cross-platform mobile apps for iOS and Android.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg glass p-2 group hover:shadow-lg transition-all">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 bg-secondary/5">
              <FileCode className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="space-y-2">
                <h3 className="font-bold">Web Applications</h3>
                <p className="text-sm text-muted-foreground">
                  High-performance web apps with modern frameworks like Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/About Section */}
      <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-secondary/20 rounded-3xl mx-auto px-4 my-10">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
              Why Cornosoft?
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We combine technical expertise with business acumen to deliver software that drives growth.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4 rounded-md glass p-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold">Secure by Design</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade security standards.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-md glass p-4">
              <Zap className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold">High Performance</h3>
                <p className="text-sm text-muted-foreground">Optimized for speed and efficiency.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-md glass p-4">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold">Global Reach</h3>
                <p className="text-sm text-muted-foreground">Solutions that scale worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-8 md:py-12 lg:py-24 mx-auto px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
            Get in Touch
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We are ready to start your project. Contact us via any of the channels below.
          </p>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center p-6 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For general inquiries and quotes.</p>
              <a href="mailto:contact@cornosoft.com" className="text-primary font-medium hover:underline">
                contact@cornosoft.com
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+66123456789" className="text-primary font-medium hover:underline">
                +66 12 345 6789
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Line ID</h3>
              <p className="text-muted-foreground mb-4">Chat with our support team.</p>
              <a href="#" className="text-primary font-medium hover:underline">
                @cornosoft
              </a>
            </div>
          </div>

          <div className="mt-16 w-full">
            <h3 className="font-heading text-2xl font-bold mb-8">Send us your Requirements</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
