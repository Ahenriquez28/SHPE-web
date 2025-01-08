import React from 'react';
import './Resume.css'; // Import your CSS file



const Resume = () => {
    const handleUploadClick = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSekvr6TzcVK3tM-7i2HHbqAv4YDQbygL1BUe5s-xvTk37ugcg/viewform?vc=0&c=0&w=1&flr=0");
    };

    return (
        <div className="resume-card">
            <iframe 
                src="https://calendar.google.com/calendar/embed?src=6d64a5d1cb3fa50067a9ed00907d8071f8f8a774c9906cb78e39df1c70001c0c%40group.calendar.google.com&ctz=America%2FNew_York" 
                style={{ border: '0', width: '700px', height: '400px', frameborder: '0', scrolling: 'no' }}
            ></iframe>
            
            <div className="resume-content">
                <h2>Resume Database</h2>
                <p>
                    Dear members, <br />
                    <br />
                    We would love to receive your awesome resumes. <br />
                    We'll make sure to share it with the top companies. <br />
                    We're more than happy to even help you improve it. <br />
                    Allow us to make the job search easier for you. <br />
                    <br />
                    Catch you on the flip side, <br />
                    SHPE <br />
                </p>
                <button onClick={handleUploadClick}>Upload</button>
            </div>
        </div>
    );
};

export default Resume;
