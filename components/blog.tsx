import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      date: "Nov 9, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
      image: "/image3.png",
    },
    {
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "PRINT"],
      image: "/image4.png",
    },
    {
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
      image: "/image5.png",
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Blog</h2>
          </div>
          <button className="text-white underline hover:text-gray-300 text-sm md:text-base">
            view all
          </button>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div
                  className="overflow-hidden bg-gray-200 relative"
                  style={{
                    width: "286px",
                    height: "214.5px",
                    borderRadius: "24px",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="text-gray-400 mb-2 text-base">
                    {post.date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium text-white border border-gray-400/50"
                        style={{ backgroundColor: "transparent" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Button */}
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <Button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full">
                    Read
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
