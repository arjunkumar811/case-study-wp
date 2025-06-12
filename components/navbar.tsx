import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="text-white text-2xl font-bold">M.</div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              HIRE ME
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
