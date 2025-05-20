import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Your GitHub Project Name",
      description: "A brief description of what this project does and what technologies it uses.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=400",
      githubUrl: "https://github.com/yourusername/your-repo-name",
      demoUrl: "https://your-live-demo-url.com", // Optional, remove if no demo available
    },
    // Add more projects following the same structure
    {
      title: "Another Project",
      description: "Description of your second project with its key features and purpose.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=400",
      githubUrl: "https://github.com/yourusername/another-repo",
      // No demo URL for this one
    },
    // You can add as many projects as you want
  ]

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
