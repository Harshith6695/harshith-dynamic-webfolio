
import { Card } from "@/components/ui/card"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Career Objective</h2>
        <Card className="p-6 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-white border-blue-200">
          <p className="text-gray-700 leading-relaxed text-center">
            Aspiring to gain real-world experience to build a strong foundation for my future career. 
            Dedicated to delivering my best efforts in any environment, striving for excellence and growth.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default About
