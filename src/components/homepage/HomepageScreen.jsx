import { Navbar } from "../ui/Navbar"
import { HomeSection } from "./HomeSection"
import { ServicesSection } from "./ServicesSection"

export const HomepageScreen = () => {
  return (
    <div className="homepage-screen">
        
        <Navbar />
        <HomeSection />
        <ServicesSection />
        
    </div>
  )
}
