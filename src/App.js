// App.js
import React, { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import HeaderCarousel from './components/HeaderCarousel';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ReservaModal from './components/ReservaModal';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [showReserva, setShowReserva] = useState(false);

    const handleShowReserva = () => setShowReserva(true);
    const handleCloseReserva = () => setShowReserva(false);

    return (
        <div className="App">
            <NavigationBar handleShowReserva={handleShowReserva} />
            <HeaderCarousel handleShowReserva={handleShowReserva} />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
            <ReservaModal show={showReserva} handleClose={handleCloseReserva} />
        </div>
    );
}

export default App;
