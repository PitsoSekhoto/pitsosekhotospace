import { Button } from "@/components/ui/button"
import { ChevronDown, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in">
              Hi, I'm <span className="text-primary">Pitso Sekhoto</span>
            </h1>
            <h2
              className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-in"
              style={{ animationDelay: "0.1s" }}
            >
              Bachelor of Information Technology in Information Systems Student
            </h2>
            <p className="text-lg mb-8 max-w-lg animate-in" style={{ animationDelay: "0.2s" }}>
              Driven and goal-oriented student with strong problem-solving skills and a passion for technology. Known
              for being reliable, ambitious, and eager to learn. I thrive in collaborative environments and enjoy
              applying my growing expertise in coding, cybersecurity, and software development to real-world projects.
            </p>
            <div className="flex flex-wrap gap-4 animate-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild className="group">
                <a href="/Resume_CV.txt" download="Pitso_Sekhoto_CV.pdf" className="flex items-center">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-in"
              style={{ animationDelay: "0.4s" }}
            >
              <img src="/images/profile.png" alt="Pitso Sekhoto" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Link href="#about">
            <ChevronDown className="h-8 w-8 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  )
}
