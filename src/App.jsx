import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ImageSlider from './Components/ImageSlider';
import Card from './Components/Card/HomePage/JoinUsCard/Card';
import SponsorCard from './Components/Card/HomePage/SponsorCard/SponsorCard';
import ShpeTinas from './Components/Card/HomePage/ShpeTinasCard/Shpetinas';
import ShpeJr from './Components/Card/HomePage/ShpeJr/ShpeJr';
import ShpeConvention from './Components/Card/HomePage/ShpeConvention/ShpeConvention';
import Resume from './Components/Card/HomePage/Resume/Resume';

import Join from './Components/Pages/Join/Join';
import EBoard from './Components/Pages/EBoard/EBoard';
import Sponsors from './Components/Pages/Sponsors/Sponsors';

const App = () => {
    const location = useLocation();
    const showImageSlider = location.pathname === '/';

    const slides = [
        { url: 'http://localhost:5173/Designer.png', title: 'Designer' },
        { url: 'http://localhost:5173/fair.png', title: 'Fair' },
    ];

    return (
        <div className='app-container'>
            <Navbar />
            {showImageSlider && (
                <div style={{ paddingTop: '19.7mm' }}>
                    <ImageSlider slides={slides} />
                </div>
            )}
            <main className='main-content'>
                <Routes>
                    <Route path="/sponsors" element={<Sponsors/>} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/EBoard" element={<EBoard />} />
                    <Route
                        path="/"
                        element={
                            <>
                                <Card />
                                <SponsorCard />
                                <ShpeTinas />
                                <ShpeJr />
                                <ShpeConvention />
                                <Resume />
                            </>
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
