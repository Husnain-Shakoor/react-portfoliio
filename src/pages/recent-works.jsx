import React from 'react'
import "./styles/recent-works.css"
import resIMg from "../images/ResponsiveIMG-1.png"
import resIMg2 from "../images/ResponsiveIMG-2.png"
import resIMg3 from "../images/ResponsiveIMG-3.png"

const RecentWorks = () => {
  return (
    <div>
      <div className="resContainer">
        <div className="responsive-section">
          <img src={resIMg} alt="" />
          <img src={resIMg2} alt="" />
          <img src={resIMg3} alt="" />
        </div>
        <div className="responsive-section-content">
            <h4>Fully Responsive Custom Designed Websites</h4>
            <button>Visit Portfolio</button>
        </div>
      </div>
    </div>
  )
}

export default RecentWorks