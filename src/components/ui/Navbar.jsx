import { useState } from "react";

export const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar-section">
        <span className="navbar-brand">
            Homepage
        </span>

        <div className="navbar-mobile-menu">
          <a onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}>
            <span class="material-symbols-outlined">
              menu
            </span>
          </a>
        </div>

        <ul className={
          isNavExpanded ? "navbar-menu expanded" : "navbar-menu"
        }>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Works</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}
