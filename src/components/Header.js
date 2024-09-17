// Header.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Header.css';

function Header({ handleShowReserva }) {
    return (
        <header id="inicio">
            <Carousel fade>
                <Carousel.Item>
                    <div
                        className="carousel-image"
                        style={{ backgroundImage: 'url(/images/slide1.jpg)' }}
                    ></div>
                    <Carousel.Caption>
                        <h3 data-aos="fade-down">Bienvenido a Zana Barber</h3>
                        <p data-aos="fade-up">Donde el estilo y la frescura se unen.</p>
                        <Button variant="primary" size="lg" onClick={handleShowReserva} data-aos="zoom-in">
                            Reserva tu cita
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Otros slides */}
            </Carousel>
        </header>
    );
}

export default Header;
