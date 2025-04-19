
import { Card } from "@/components/ui/card"

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Malla Reddy University",
      period: "2023 - 2027",
      score: "7.9 GPA"
    },
    {
      degree: "Intermediate",
      institution: "SR jr college",
      period: "2021 - 2023",
      score: "92%"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-blue-200">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-600 font-medium">{edu.period}</p>
                  <p className="text-gray-600">{edu.score}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
