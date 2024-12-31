import React from "react";
import './Join.css';
import './join_600px.css';
import './join_720px.css';

import { Link } from 'react-router-dom';  

const Join = () => {
    return (
        <div className='horizontal-scroll'> {/* New wrapper for horizontal scrolling */}
            <div className='join-container'>
                <header className='join-header'>
                    <h1 className='join-main-title'>Join Us</h1>
                    <p className='join-subtitle'>Society of Hispanic Professional Engineers</p>
                    <p className='join-description'>
                        As the Society of Hispanic Professional Engineers (SHPE) chapter, our purpose is to empower Hispanic professionals in engineering and related fields through a supportive network for personal and professional growth. We are committed to promoting diversity, equity, and inclusion in the engineering industry to inspire and cultivate the next generation of Hispanic leaders in STEM fields.
                    </p>
                </header>
                <div className='images-container'>
                    <img src='gears.png' alt='Gears Image' className='gears-image' />
                    <img src='collab.png' alt='Collab Image' className='collab-image' />
                </div>

                <div className='bg-join1'>.</div>

                <div className='bg-join2'>.</div>
                <img src="arduino.png" alt="ard Image" className="arduino" />
                <div className='Professional'>Professional Development</div>
                <div className='Profess-detail'>These events include company tours and professional speakers aimed at enhancing career growth. Networking sessions are also held to connect participants with professionals in their field</div>

                <div className='Academic'>Academic Development</div>
                <div className='Academic-detail'>Events feature a student hackathon designed to foster innovation and problem-solving skills. Beginner-friendly engineering kits are provided to help participants build practical technical knowledge</div>

                <div className='bg-join3'>.</div>
                <img src='social.png' alt='social Image' className='social-image' />
                <img src='professional.png' alt='professional Image' className='profess-image' />
                <div className='Social'>Community Building</div>
                <div className='Social-detail'>These gatherings are organized to bring the Hispanic community together and strengthen their bonds. We offer a fun and welcoming atmosphere for participants to relax and enjoy.</div>

                <img src='group.png' alt='groupImage' className='group-photo' />
                <div className='bg-join4'>.</div>
                <div className="Team">
                    <p>Meet The</p>
                    <p>Executive</p>
                    <p>Board</p>
                </div>
                <Link to="/Eboard">
                    <button className='Eboard-button'>Learn More</button>
                </Link>

                <div className='top-bar'>.</div>
                <div className='first-bar'></div>
                <div className='shpe-familia'>Join The SHPE Familia</div>

                <div className='bg-join6'>.</div>
                <div className='Updated'>Stay Updated</div>

                <div className='Follow'>Follow</div>
                <div className='Join'>Join</div>
                <div className='Member'>Be A Member</div>

                <a href="https://www.instagram.com/shpe.gastate/" target="_blank" rel="noopener noreferrer">
                    <img src="instagram.png" alt="Instagram" className="insta-image" />
                </a>
                <a href="https://groupme.com/join_group/101447886/MigiCmFj" target="_blank" rel="noopener noreferrer">
                    <img src="groupme.png" alt="GroupMe" className="groupme-image" />
                </a>
                <a href="https://pin.gsu.edu/organization/shpe" target="_blank" rel="noopener noreferrer">
                    <img src="shpelogo.png" alt="SHPE Logo" className="shpelogo-image" />
                </a>
            </div>
        </div>
    );
};

export default Join;
