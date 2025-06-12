"use client"

import { useEffect, useState } from "react"
import { Star, ArrowUpRight } from "lucide-react"

const scrollingText = ["FLOW", "FIGMA", "DESIGNER", "DEVELOPER", "CREATIVE", "PORTFOLIO"]

export default function FooterComponent() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev - 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-[#010208] py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Scrolling Text */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div
            className="flex items-center gap-8 md:gap-12 whitespace-nowrap text-4xl md:text-6xl lg:text-7xl font-bold text-transparent"
            style={{
              transform: `translateX(${scrollPosition}px)`,
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.2)",
            }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 md:gap-12">
                {scrollingText.map((text, index) => (
                  <div key={`${setIndex}-${index}`} className="flex items-center gap-8 md:gap-12">
                    <span>{text}</span>
                    <Star className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-wider">
            {"LET'S TALK!"}
          </h2>

          <a
            href="mailto:rehanurraihan@gmail.com"
            className="inline-flex items-center gap-2 text-white text-lg md:text-xl hover:text-gray-300 transition-colors group"
          >
            rehanurraihan@gmail.com
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 pt-8 md:pt-12 border-t border-gray-800">
          <p className="text-gray-400 text-sm md:text-base">© Rehan Raihan - 2023</p>

          <div className="flex items-center gap-6 md:gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
              Dribbble
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
              Behance
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
