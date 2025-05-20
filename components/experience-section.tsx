import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      position: "Media Production Assistant",
      company: "1983 Media Company",
      location: "Johannesburg, South Africa",
      period: "Jan 2025",
      description: [
        "Collaborated on a high-profile production featuring Thebe Ikalafeng, a Hall of Fame global African branding authority and leading advocate for a brand-led African renaissance.",
        "Supported the execution of a partnership between 1983 Media, Gautrain, and GIBS Business School, contributing to planning, logistics, and on-site filming.",
        "Assisted in the coordination and documentation of a branded content campaign highlighting African excellence and innovation in branding.",
        "Gained exposure to professional media production environments, stakeholder collaboration, and brand storytelling.",
      ],
      reference: {
        name: "Hlopho Lerata",
        position: "1983 Media/ Founder & CEO",
        contact: "+27 64 891 4696",
        email: "Hlopho@1983media.co.za",
      },
    },
    {
      position: "Data Information and Analytics (DIA) Work Shadowing Programme",
      company: "Decision Inc.",
      location: "",
      period: "July 2023",
      description: [
        "Gained hands-on exposure to business intelligence tools, especially Power BI, understanding dashboard creation, data modeling, and report generation.",
        "Observed practical applications of data engineering, including data pipelines, ETL processes, and cloud data architecture, led by industry professionals.",
        "Explored the role of data science and analytics in real business scenarios, including predictive modeling and data-driven decision-making.",
        "Participated in strategic sessions focusing on high-performing teams, project management, and business unit leadership in a data-centric environment.",
        "Developed insights into strategy development within the data landscape and its impact on organizational growth.",
      ],
      reference: {
        name: "Natalie Pillai",
        position: "HR Business Partner",
        contact: "+27 (0)11 025 2300",
        email: "n.pillai@decisioninc.com",
      },
    },
    {
      position: "Observer – Investment Strategy Meeting",
      company: "Makolobane Farmers Enterprise (PTY) Ltd",
      location: "South Africa",
      period: "July 2025",
      description: [
        "Attended and observed a high-level investors meeting involving IDC South Africa and Apex Holdings discussing funding and strategic planning for a new apple farming project.",
        "Gained first-hand insight into agricultural investment negotiations, business development, and the dynamics of enterprise-level decision-making.",
        "Observed how partnerships between private entities and government-backed institutions are structured to support large-scale agribusiness initiatives.",
        "Enhanced understanding of project financing, stakeholder engagement, and investment risk analysis.",
      ],
      reference: {
        name: "Pitso Sekhoto",
        position: "Makolobane Farmers Enterprise (PTY) Ltd/ Chairman",
        contact: "+27 83 453 7690",
      },
    },
    {
      position: "Job Shadowing CEO",
      company: "Consumer Goods Council of South Africa",
      location: "Johannesburg",
      period: "Aug 2019 - Sep 2019",
      description: [
        "Accompanied the CEO of CGCSA on daily routines, from 8am to 4:30pm.",
        "Attended company board meetings and a major shareholders meeting with other big companies around South Africa held at the Nedbank HeadOffice in Sandton.",
        "Participated in a beach clean-up campaign.",
        "Learned about the IT side of the company including programming, creating barcodes, sending emails, stock taking, company information systems, and salaries.",
        "Gained insight into different objectives within the company and the different roles each employee has.",
        "Observed how CEOs communicate and treat staff, developing leadership skills.",
      ],
      reference: {
        name: "Gwarega Mangozhe",
        position: "CGCSA/ Former CEO",
        contact: "+27 83 636 2341",
        email: "mangozhe@gmail.com",
      },
    },
    {
      position: "Filing Clerk assistant",
      company: "BlackHead Consultancy",
      location: "",
      period: "",
      description: [
        "Organized and filed company documents to ensure proper storage and organization for easy retrieval.",
        "Duties included labeling and updating paper files and putting files into their proper locations.",
      ],
      reference: {
        name: "Mr Gottlieb Langa",
        contact: "0119582248",
      },
    },
    {
      position: "Bid Administrator assistant",
      company: "Tsimu Construction and Civil Works",
      location: "Johannesburg",
      period: "",
      description: [
        "Provided support to the Bid Administrator.",
        "Collected and delivered tender documents.",
        "Filled in bid documents and compiled hard/soft copies of bid responses.",
        "Printed and organized all required documents.",
        "Ensured that all bids were completed within stipulated time frames.",
        "Checked validity of compliance supporting documents e.g., BEE, Tax Clearance and COIDA.",
      ],
    },
    {
      position: "Farm Worker",
      company: "Makolobane Farmers Enterprises",
      location: "Senekal",
      period: "Holiday periods",
      description: [
        "Assisted farm workers with various tasks during holidays, working from 5am to 5pm.",
        "Tasks included apple picking, sorting and packaging of apples, milking cows, herding cows and sheep, and feeding animals.",
      ],
      reference: {
        name: "Pitso Sekhoto",
        position: "Makolobane Farmers Enterprise (PTY) Ltd/ Chairman",
        contact: "+27 83 453 7690",
      },
    },
  ]

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {exp.company}
                          {exp.location && `, ${exp.location}`}
                        </CardDescription>
                      </div>
                      {exp.period && <Badge variant="outline">{exp.period}</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {exp.reference && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-medium text-sm text-primary">Reference:</p>
                        <p className="text-sm">
                          {exp.reference.name}
                          {exp.reference.position && `, ${exp.reference.position}`}
                        </p>
                        {exp.reference.contact && (
                          <p className="text-sm">
                            <span className="text-muted-foreground">Phone:</span> {exp.reference.contact}
                          </p>
                        )}
                        {exp.reference.email && (
                          <p className="text-sm">
                            <span className="text-muted-foreground">Email:</span> {exp.reference.email}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
