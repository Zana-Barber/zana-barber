// Services.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCarrot } from 'react-icons/fa';
import './Services.css';

function Services() {
    return (
        <section id="servicios" className="py-5">
            <Container>
                <h2 className="text-center mb-5 section-title" data-aos="fade-up">
                    Nuestros Servicios
                </h2>
                <Row className="g-4">
                    <Col md={6} data-aos="fade-right">
                        <h4>
                            <FaCarrot className="me-2 icon" />
                            Corte de Cabello
                        </h4>
                        <p>Estilos modernos y clásicos adaptados a tu personalidad.</p>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <h4>
                            <FaCarrot className="me-2 icon" />
                            Afeitado Tradicional
                        </h4>
                        <p>Experiencia de afeitado con navaja y toallas calientes.</p>
                    </Col>
                    <Col md={6} data-aos="fade-right">
                        <h4>
                            <FaCarrot className="me-2 icon" />
                            Arreglo de Barba
                        </h4>
                        <p>Diseño y cuidado profesional de tu barba.</p>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <h4>
                            <FaCarrot className="me-2 icon" />
                            Tratamientos Capilares
                        </h4>
                        <p>Cuida y revitaliza tu cabello con nuestros tratamientos.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Services;
