import React from "react";
import './Sponsors.css'; 
import './sponsors_600px.css';
import './sponsors_719px.css';
import './sponsors_999px.css';
import './sponsors_1200px.css';
import { Link } from 'react-router-dom';  

const Sponsors = () => {
  const handleDownload = () => {
    const pdfUrl = '/spons-pak.pdf';  // Ensure this file path is correct
    console.log(pdfUrl);              // Logging for debugging
    window.open(pdfUrl, '_blank');    // Open the PDF in a new tab
  };

  return (
    <div>
      <div className="background1">.</div>
      <div className="background1bar">.</div>
      <div className="background2">.</div>
      <img src="astro2.png" alt="Astro Image" className="Astro" />
      
      <div className="title1">
        <h1>Our<br />Sponsors</h1>
      </div>

      <div className="sub-title">
        Our sponsors play a pivotal role in supporting and fueling the success of our organization. We are grateful for their dedication to diversity, inclusion, and the advancement of STEM education and careers.
        <br /><br />
        <button className="download-button" onClick={handleDownload}>
          Become A Sponsor 
        </button>

        <img src="VISA.png" alt="Visa Image" className="VISA-image" />
        <img src="NCR.png" alt="NCR Image" className="NCR-image" />
        <div className="background3">.</div>
        <img src="Familia.png" alt="Group Photo" className="Familia-photo" />
        <img src="Familia.png" alt="Group1 Photo" className="Familia-photo2" />

        <div className="family-first">Únete Ao</div>
        <div className="family-second">Nuestro Familia</div>
  

        <div className="background4">.</div>

        {/* Major Distribution Section */}
        <div className="Majors">Major Distribution</div>
        <div className="major-data">
          <p>68% Computer Science</p>
          <p>18% Computer Information Systems</p>
          <p>6% Cyber Security</p>
          <p>8% Others</p>
        </div>

        {/* Grade Distribution Section */}
        <div className="Grade">Grade Distribution</div>
        <div className="Grade-data">
          <p>18% Seniors</p>
          <p>39% Juniors</p>
          <p>35% Sophomores</p>
          <p>8% Freshmen</p>
        </div>

        {/* GPA Distribution Section */}
        <div className="GPA">GPA Distribution</div>
        <div className="GPA-data">
          <p>24% 3.7 - 4.0</p>
          <p>43% 3.2 - 3.6</p>
          <p>23% 2.5 - 3.1</p>
          <p>10% &gt; 2.5</p> {/* Corrected greater-than sign */}
        </div>

        <div className="sponsors-container">

          <img src="spons1.png" alt="1 Image" className="spons1" />
          <img src="Spons2.png" alt="2 Image" className="spons2" />
          <img src="spons3.png" alt="3 Image" className="spons3" />
        </div>

        <img src="rocket.png" alt="rocket Image" className="rocket" />



      </div>
    </div>
  );
}

export default Sponsors;
