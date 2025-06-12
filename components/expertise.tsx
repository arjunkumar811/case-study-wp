import { Star } from "lucide-react"

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Branding",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UI Design",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UX Design",
      description:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
    },
    {
      title: "Development",
      description:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white" style={{ backgroundColor: "#010208" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-12">
          <Star className="w-6 h-6 mr-3 text-white fill-white" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Expertise</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-x-20 lg:gap-y-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold flex items-center text-white">
                <span className="mr-3 text-2xl">•</span>
                {area.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
