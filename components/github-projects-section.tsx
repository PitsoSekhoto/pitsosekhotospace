"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  fork: boolean
  stargazers_count: number
  updated_at: string
}

export function GitHubProjectsSection() {
  const [projects, setProjects] = useState<GitHubRepo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchGitHubProjects() {
      try {
        setIsLoading(true)
        // Replace 'yourusername' with your actual GitHub username
        const response = await fetch("https://api.github.com/users/PitsoSekhoto/repos?sort=updated&per_page=6")

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories")
        }

        const data = await response.json()
        // Filter out forked repositories and sort by updated_at (most recent first)
        const ownRepos = data
          .filter((repo: GitHubRepo) => !repo.fork)
          .sort((a: GitHubRepo, b: GitHubRepo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6) // Limit to 6 projects

        setProjects(ownRepos)
      } catch (err) {
        console.error("Error fetching GitHub projects:", err)
        setError("Failed to load projects. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchGitHubProjects()
  }, [])

  // Function to format repository name for display
  const formatRepoName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Function to get a color for language tags
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-600",
      TypeScript: "bg-blue-600",
      HTML: "bg-orange-600",
      CSS: "bg-blue-500",
      Python: "bg-green-600",
      Java: "bg-red-600",
      "C#": "bg-purple-600",
      PHP: "bg-indigo-600",
      // Add more languages as needed
    }
    return colors[language] || "bg-gray-600"
  }

  if (isLoading) {
    return (
      <section id="projects" className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading text-center">Projects</h2>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Loading projects from GitHub...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading text-center">Projects</h2>
          <div className="py-10">
            <p className="text-destructive">{error}</p>
            <p className="mt-4">
              Please visit my{" "}
              <a
                href="https://github.com/PitsoSekhoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub profile
              </a>{" "}
              to see my projects.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Projects</h2>

        {projects.length === 0 ? (
          <div className="text-center py-10">
            <p>No projects found. Please check back later or visit my GitHub profile.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-accent flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(project.name)}`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{formatRepoName(project.name)}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.language && (
                        <span
                          className={`${getLanguageColor(project.language)} text-white text-xs px-2 py-1 rounded-full`}
                        >
                          {project.language}
                        </span>
                      )}
                      {project.topics?.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.stargazers_count > 0 && (
                        <span className="bg-yellow-600/20 text-yellow-200 text-xs px-2 py-1 rounded-full flex items-center">
                          <span className="mr-1">★</span> {project.stargazers_count}
                        </span>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{project.description || "No description available"}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.homepage && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Button asChild>
            <a href="https://github.com/PitsoSekhoto" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
