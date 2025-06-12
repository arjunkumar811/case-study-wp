import Navbar from "@/components/navbar"
import Banner from "@/components/banner"
import Expertise from "@/components/expertise"
import Works from "@/components/works"
import Experience from "@/components/experience"
import Blog from "@/components/blog"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Banner />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
