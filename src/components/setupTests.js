// Testimonials.js
import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
            name: 'Laura Gómez',
            text: '¡Un ambiente único y refrescante! Salí con un corte espectacular.',
        },
        {
            name: 'Miguel Torres',
            text: 'La temática de zanahoria le da un toque original. ¡Me encantó!',
        },
        {
            name: 'Ana Martínez',
            text: 'Excelente servicio y una atmósfera muy acogedora.',
        },
    ];

    return (
        <section id="testimonios" className="py-5">
            <Container>
                <h2 className="text-center mb-5 section-title" data-aos="fade-up">
                    Testimonios
                </h2>
                <Carousel indicators={false}>
                    {testimonials.map((testimonial, index) => (
                        <Carousel.Item key={index}>
                            <Card className="testimonial-card">
                                <Card.Body>
                                    <Card.Text>"{testimonial.text}"</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">- {testimonial.name}</small>
                                </Card.Footer>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
}

export default Testimonials;
