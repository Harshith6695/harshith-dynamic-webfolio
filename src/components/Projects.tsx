
import { Card } from "@/components/ui/card"

const ProjectCard = ({ title, description, points = [] }: { 
  title: string; 
  description: string;
  points?: string[];
}) => (
  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-blue-200 bg-gradient-to-br from-white to-blue-50">
    <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {points.length > 0 && (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </Card>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ProjectCard
            title="Acing Interview using HTML and Python"
            description="The Acing Interview is a simple, interactive website aimed at encouraging users to know about interview. Acing a job interview requires preparation, punctuality, and authenticity."
            points={[
              "Research the company, understand the job role",
              "The website provides resources, tips, and a personalized experience"
            ]}
          />
          <ProjectCard
            title="Interior Design Website Development"
            description="A comprehensive interior design website showcasing portfolio and services."
            points={[
              "Designed and developed using HTML, CSS, JavaScript, and React",
              "Implemented backend functionality with Node.js and MongoDB",
              "Optimized website performance and UI/UX"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
