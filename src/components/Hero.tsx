
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="max-w-5xl mx-4 p-6 md:p-8 bg-white/80 backdrop-blur-sm border-blue-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              JOGA HARSHITH
            </h1>
            <p className="text-xl text-blue-600">Web Developer</p>
            <p className="text-gray-600 leading-relaxed">
              Aspiring Web Developer with a keen interest in building user-friendly and visually appealing web applications.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact" className="text-white">Contact Me</a>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-200">
              <img
                src="/lovable-uploads/26adc1f1-1591-474b-8964-b4c0641f3f27.png"
                alt="Harshith Joga"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Hero
