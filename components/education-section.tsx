import { GraduationCap, School, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  const education = [
    {
      level: "Bachelor of Information Technology in Information Systems",
      institution: "University of Pretoria",
      period: "2021 – Nov 2025",
      details: "Focused on software development, IT infrastructure, and business systems.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      level: "High School",
      institution: "Michaelhouse, Balgowan",
      period: "2016 – 2020",
      details: "Bachelor’s Pass | GPA: 2.3",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      level: "Junior School",
      institution: "King’s School, Nottingham Road",
      period: "2013 – 2015",
      details: "Dux Scholar (Top Academic Performer)",
      icon: <School className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section id="education" className="section bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Education</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {item.icon}
                <div className="flex-1">
                  <CardTitle className="flex justify-between items-center flex-wrap">
                    <span>{item.level}</span>
                    <span className="text-sm font-normal text-muted-foreground">{item.period}</span>
                  </CardTitle>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
