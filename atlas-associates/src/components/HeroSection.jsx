// src/components/HeroSection.js
import React from 'react';
import heroImage from '../images/placeholder_main.jpg'; // make sure to import the image
import '../styles/HeroSection.css';
function HeroSection() {
    return (
        <div style={{ backgroundImage: `url(${heroImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', color: 'white' }}>
            <div className="text">
             <h1>Welcome to Our Architecture Firm</h1>
            <p>Designing your dreams with love.</p>
            </div>
        </div>
    );
}

export default HeroSection;
