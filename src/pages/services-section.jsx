import React from 'react'
import "./styles/services-section.css"
import { Link } from 'react-router-dom'
const ServicesSection = () => {
  return (
    <div>
        <h2>{"<Services/>"}</h2>
        <h2>{"<Attract customers like never before/>"}</h2>
        <div id="mycards">
          <div className="card1">
            <h4>CUSTOM WEBSITE DESIGN</h4>
            <p>Professional UX/UI design and implementation of websites, web portals and other solutions</p>
            <Link to={"/services"}>
            <button>Visit Services</button>
            </Link>
          </div>
          <div className="card1">
            <h4>WORDPRESS INTEGRATION</h4>
            <p>Professional UX/UI design and implementation of websites, web portals and other solutions</p>
            <Link to={"/services"}>
            <button>Visit Services</button>
            </Link>
          </div>
          <div className="card1">
            <h4>WEB-APP DEVELOPMENT</h4>
            <p>Professional UX/UI design and implementation of websites, web portals and other solutions</p>
            <Link to={"/services"}>
            <button>Visit Services</button>
            </Link>
          </div>
          <div className="card1">
            <h4>WEBSITE AUDIT SERVICES</h4>
            <p>Professional UX/UI design and implementation of websites, web portals and other solutions</p>
            <Link to={"/services"}>
            <button>Visit Services</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ServicesSection