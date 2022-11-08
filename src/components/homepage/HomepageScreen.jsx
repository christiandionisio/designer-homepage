import { Navbar } from "../ui/Navbar"
import { HomeSection } from "./HomeSection"
import { ServicesSection } from "./ServicesSection"
import { WorksSection } from "./WorksSection"

export const HomepageScreen = () => {
  return (
    <div className="homepage-screen">
        
        <Navbar />
        <HomeSection />
        <ServicesSection />
        <WorksSection />
        
    </div>
  )
}
