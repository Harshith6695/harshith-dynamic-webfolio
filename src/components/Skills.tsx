
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <Card className="p-6 border-blue-200">
    <h3 className="text-xl font-semibold text-blue-800 mb-4">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill}>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">{skill}</span>
          </div>
          <Progress value={80} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
        </div>
      ))}
    </div>
  </Card>
)

const Skills = () => {
  const skillCategories = {
    "Technical Skills": ["Python", "C++", "Java", "HTML", "CSS", "JavaScript"],
    "Design": ["Wix", "Canva"],
    "Expertise": [
      "Management Skills",
      "Leadership skills",
      "Problem-solving",
      "Critical Thinking",
      "Communication Skills",
      "Team collaboration"
    ]
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
