import { Star } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Lead Product Designer",
      company: "Fortknox",
      period: "Mar 2022 - Oct 2023",
    },
    {
      title: "Intern Designer",
      company: "OmniSafe",
      period: "Mar 2022 - Oct 2023",
    },
    {
      title: "UI Designer",
      company: "Doradesign",
      period: "Mar 2022 - Oct 2023",
    },
    {
      title: "Frontend Developer",
      company: "OpacityAuthor",
      period: "Mar 2022 - Oct 2023",
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundColor: "#010208" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-12">
          <Star className="w-6 h-6 mr-3 text-white fill-white" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Experience
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-start justify-between py-4 md:py-6">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-lg md:text-xl font-bold text-white mb-1">
                    {exp.company}
                  </div>
                  <div className="text-sm md:text-base text-gray-400">
                    {exp.period}
                  </div>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <hr className="border-gray-600 border-t-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
