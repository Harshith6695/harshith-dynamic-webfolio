
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: "harshithjoga6695@gmail.com" },
    { label: "Phone", value: "9642926695" },
    { label: "LinkedIn", value: "harshith-joga-0b0079345", url: "http://www.linkedin.com/in/harshith-joga-0b0079345" },
    { label: "GitHub", value: "Harshith6695", url: "https://github.com/Harshith6695" }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Contact Me</h2>
        <Card className="max-w-2xl mx-auto p-6 border-blue-200">
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <span className="font-medium text-blue-800 w-24">{info.label}:</span>
                {info.url ? (
                  <Button variant="link" className="text-blue-600 hover:text-blue-800" asChild>
                    <a href={info.url} target="_blank" rel="noopener noreferrer">{info.value}</a>
                  </Button>
                ) : (
                  <span className="text-gray-600">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Contact
