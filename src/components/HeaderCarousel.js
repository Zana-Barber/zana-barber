// HeaderCarousel.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './HeaderCarousel.css';

function HeaderCarousel({ handleShowReserva }) {
    return (
        <Carousel fade className="header-carousel">
            <Carousel.Item>
                <div
                    className="carousel-image"
                    style={{ backgroundImage: 'url(/images/slide1.jpg)' }}
                ></div>
                <Carousel.Caption>
                    <h1>Bienvenido a Zana Barber</h1>
                    <p>Donde el estilo y la frescura se unen.</p>
                    <Button variant="primary" size="lg" onClick={handleShowReserva}>
                        Reserva tu cita
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className="carousel-image"
                    style={{ backgroundImage: 'url(/images/slide2.jpg)' }}
                ></div>
                <Carousel.Caption>
                    <h1>Estilos Modernos</h1>
                    <p>Cortes de cabello que marcan tendencia.</p>
                    <Button variant="primary" size="lg" onClick={handleShowReserva}>
                        Reserva tu cita
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Añade más slides si lo deseas */}
        </Carousel>
    );
}

export default HeaderCarousel;
