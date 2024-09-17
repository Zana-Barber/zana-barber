// Testimonials.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col
                            md={4}
                            sm={6}
                            xs={12}
                            className="mb-4"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <Card className="h-100 testimonial-card">
                                <Card.Body>
                                    <Card.Text>"{testimonial.text}"</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">- {testimonial.name}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Testimonials;
