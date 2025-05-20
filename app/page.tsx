import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"
import { GitHubProjectsSection } from "@/components/github-projects-section"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <GitHubProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
