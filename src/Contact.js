// Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

function Contact() {
    return (
        <section id="contacto" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 section-title" data-aos="fade-up">
                    Contáctanos
                </h2>
                <Row>
                    <Col md={6} data-aos="fade-right">
                        <h5>Dirección</h5>
                        <p>Taira 788, Calama, Antofagasta</p>
                        <h5>Teléfono</h5>
                        <p>(+56) 9 1234 5678</p>
                        <h5>Email</h5>
                        <p>contacto@zanabarber.com</p>
                        <h5>Horario</h5>
                        <p>Lunes a Sábado: 9:00 AM - 8:00 PM</p>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.666092507371!2d-68.90798712379097!3d-22.441590221413037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96abf61e3b527b2d%3A0x33a19f09a17fe8f3!2sTaira%20788%2C%201391454%20Calama%2C%20Antofagasta!5e0!3m2!1ses-419!2scl!4v1726539994304!5m2!1ses-419!2scl"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Zana Barber"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
