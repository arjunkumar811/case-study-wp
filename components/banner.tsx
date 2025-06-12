import { Star } from "lucide-react";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#010208", color: "white" }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-between min-h-[80vh]">
        {/* Main Heading - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wider uppercase">
              I AM A{" "}
              <span className="inline-flex items-center align-middle">
                <div
                  className="relative mx-3 overflow-hidden"
                  style={{ width: 128, height: 64, borderRadius: 100 }}
                >
                  <Image
                    src="/image1.jpg"
                    alt="Designer Profile"
                    fill
                    style={{ objectFit: "cover", border: "2px solid white" }}
                  />
                </div>
              </span>{" "}
              FREELANCE
              <br />
              DESIGNER{" "}
              <span className="inline-flex items-center align-middle">
                <div
                  className="relative mx-3 overflow-hidden"
                  style={{ width: 128, height: 64, borderRadius: 100 }}
                >
                  <Image
                    src="/image2.png"
                    alt="Design Element"
                    fill
                    style={{ objectFit: "cover", border: "2px solid white" }}
                  />
                </div>
              </span>{" "}
              FROM
              <br />
              SAN FRANCISCO
            </h1>
          </div>
        </div>

        {/* Bottom Section - Brands Left, Description Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-16">
          {/* Brand Names - Bottom Left */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-base lg:text-lg">doradesign</span>
            </div>
            <div className="text-base lg:text-lg font-bold tracking-wider">
              WAVE
            </div>
            <div className="text-base lg:text-lg font-bold tracking-wider">
              SILQILA
            </div>
          </div>

          {/* Description - Bottom Right */}
          <div className="max-w-md lg:max-w-lg">
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
