import { Code, Database, Layout, Shield, Wrench, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    {
      category: "Programming & Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: [
        { name: "C#", proficiency: 90 },
        { name: "JavaScript", proficiency: 80 },
        { name: "HTML/CSS", proficiency: 85 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Java", proficiency: 70 },
        { name: "PowerShell", proficiency: 50 },
      ],
    },
    {
      category: "Web & App Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: [
        { name: ".NET", proficiency: 90 },
        { name: "Angular", proficiency: 75 },
        { name: "Node.js", proficiency: 70 },
        { name: "Bootstrap", proficiency: 85 },
        { name: "Chart.js", proficiency: 65 },
      ],
    },
    {
      category: "Databases & Backend",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: [
        { name: "Microsoft SQL Server", proficiency: 80 },
        { name: "REST APIs", proficiency: 80 },
        { name: "JWT Authentication", proficiency: 80 },
      ],
    },
    {
      category: "Cybersecurity & IT",
      icon: <Shield className="h-8 w-8 text-primary" />,
      items: [
        { name: "Basic Cybersecurity Concepts", proficiency: 75 },
        { name: "System Security Practices", proficiency: 70 },
        { name: "Secure Coding", proficiency: 65 },
      ],
    },
    {
      category: "Tools & Design",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      items: [
        { name: "GitHub", proficiency: 85 },
        { name: "Figma", proficiency: 80 },
        { name: "Adobe Photoshop", proficiency: 50 },
        { name: "Adobe InDesign", proficiency: 60 },
        { name: "Confluence", proficiency: 75 },
      ],
    },
    {
      category: "Soft Skills",
      icon: <Users className="h-8 w-8 text-primary" />,
      items: [
        { name: "Communication", proficiency: 90 },
        { name: "Team Collaboration", proficiency: 85 },
        { name: "Problem Solving", proficiency: 90 },
        { name: "Time Management", proficiency: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {skill.icon}
                <div>
                  <CardTitle>{skill.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">{item.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: `${item.proficiency}%`,
                            animation: `progressAnimation 1.5s ease-out ${idx * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
