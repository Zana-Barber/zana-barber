// Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="text-white text-center py-4 footer">
            <Container>
                <p>Síguenos en nuestras redes sociales:</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/zanabarber" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/zanabarber" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com/zanabarber" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                </div>
                <p>&copy; 2023 Zana Barber. Todos los derechos reservados.</p>
            </Container>
        </footer>
    );
}

export default Footer;
