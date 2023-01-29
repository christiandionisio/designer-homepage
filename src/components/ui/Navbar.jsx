import { useState } from "react";

export const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar-section">
        <span className="navbar-brand">
            Homepage
        </span>

        <div className="navbar-mobile-menu">
          <div onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </div>
        </div>

        <ul className={
          isNavExpanded ? "navbar-menu expanded" : "navbar-menu"
        }>
            <li><a href="#home-section">Home</a></li>
            <li><a href="#services-section">Services</a></li>
            <li><a href="#works-section">Our Works</a></li>
            <li><a href="#clients-section">Clients</a></li>
            <li><a href="#contact-section">Contact</a></li>
        </ul>
    </nav>
  )
}
