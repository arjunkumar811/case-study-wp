import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Works() {
  const projects = [
    {
      title: "Analysis Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/image3.png",
      tags: ["FIGMA", "UX"],
    },
    {
      title: "Fortknox Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/image4.png",
      tags: ["MOBILE", "WEB"],
    },
    {
      title: "Zenocide Application",
      description:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/image5.png",
      tags: ["UX", "WEB"],
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundColor: "#010208" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <Star className="w-6 h-6 mr-3 text-white fill-white" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Works
            </h2>
          </div>
          <button className="text-white underline hover:text-gray-300 text-sm md:text-base">
            view all
          </button>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6B6B6B 0%, #5A5A5A 100%)",
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 p-4">
                  <div
                    className="h-60 lg:h-72 rounded-xl border border-gray-400/30 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #E8E8E8 0%, #D0D0D0 100%)",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center p-4">
                      {/* Actual image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 rounded-full text-sm font-medium text-white border border-gray-400/50"
                        style={{ backgroundColor: "transparent" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div>
                    <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full font-medium">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
