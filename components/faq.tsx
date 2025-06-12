"use client"

import { useState } from "react"
import { Star, ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    id: 2,
    question: "What tools and software do you use for UX design?",
    answer:
      "I use a variety of tools including Figma for design and prototyping, Adobe Creative Suite for visual design, Miro for user journey mapping, and various user testing platforms for gathering feedback and insights.",
  },
  {
    id: 3,
    question: "How do you measure the success of your UX designs?",
    answer:
      "I measure success through various metrics including user engagement rates, task completion rates, user satisfaction scores, conversion rates, and qualitative feedback from user testing sessions. I also track long-term metrics like user retention and business KPIs.",
  },
]

export default function FAQComponent() {
  const [openItems, setOpenItems] = useState<number[]>([1]) // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="bg-[#010208] py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <Star className="w-6 h-6 text-white fill-white" />
          <h2 className="text-white text-2xl md:text-3xl font-light">Frequently asked questions</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 md:space-y-8">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-800 pb-6 md:pb-8">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left flex items-center justify-between gap-4 group"
              >
                <h3 className="text-white text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform flex-shrink-0 ${
                    openItems.includes(faq.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.includes(faq.id) && (
                <div className="mt-4 md:mt-6">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
