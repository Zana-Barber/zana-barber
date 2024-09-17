// Gallery.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';

function Gallery() {
    const images = [
        '/images/corte1.jpg',
        '/images/corte2.jpg',
        '/images/corte3.jpg',
        '/images/barberia1.jpg',
        '/images/barberia2.jpg',
        '/images/barberia3.jpg',
    ];

    return (
        <section id="galeria" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 section-title" data-aos="fade-up">
                    Galería
                </h2>
                <Row>
                    {images.map((src, index) => (
                        <Col
                            md={4}
                            sm={6}
                            xs={12}
                            className="mb-4"
                            key={index}
                            data-aos="zoom-in"
                        >
                            <Image
                                src={src}
                                alt={`Galería ${index + 1}`}
                                thumbnail
                                fluid
                                className="gallery-image"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Gallery;
