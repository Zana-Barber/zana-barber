// App.js
import React, { useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="App">
            <NavigationBar />

            <header
                className="header text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: 'url(/images/header-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '80vh',
                    position: 'relative',
                }}
            >
                <div className="overlay"></div>
                <div className="header-content">
                    <h1 className="display-3" data-aos="fade-down">
                        Bienvenido a Zana Barber
                    </h1>
                    <p className="lead" data-aos="fade-up">
                        Donde el estilo y la frescura se unen.
                    </p>
                    <Button variant="success" size="lg" data-aos="zoom-in">
                        Reserva tu cita
                    </Button>
                </div>
            </header>

            <main>
                {/* Sección de Servicios */}
                <section id="servicios" className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5 section-title" data-aos="fade-up">
                            Nuestros Servicios
                        </h2>
                        <div className="row g-4">
                            <div className="col-md-6" data-aos="fade-right">
                                <h4>
                                    <img
                                        src="/images/carrot-icon.png"
                                        alt="Icono Zanahoria"
                                        width="24"
                                        className="me-2"
                                    />
                                    Corte de Cabello
                                </h4>
                                <p>Estilos modernos y clásicos adaptados a tu personalidad.</p>
                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <h4>
                                    <img
                                        src="/images/carrot-icon.png"
                                        alt="Icono Zanahoria"
                                        width="24"
                                        className="me-2"
                                    />
                                    Afeitado Tradicional
                                </h4>
                                <p>Experiencia de afeitado con navaja y toallas calientes.</p>
                            </div>
                            <div className="col-md-6" data-aos="fade-right">
                                <h4>
                                    <img
                                        src="/images/carrot-icon.png"
                                        alt="Icono Zanahoria"
                                        width="24"
                                        className="me-2"
                                    />
                                    Arreglo de Barba
                                </h4>
                                <p>Diseño y cuidado profesional de tu barba.</p>
                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <h4>
                                    <img
                                        src="/images/carrot-icon.png"
                                        alt="Icono Zanahoria"
                                        width="24"
                                        className="me-2"
                                    />
                                    Tratamientos Capilares
                                </h4>
                                <p>Cuida y revitaliza tu cabello con nuestros tratamientos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Galería */}
                <Gallery />

                {/* Sección de Testimonios */}
                <Testimonials />

                {/* Sección de Contacto */}
                <Contact />
            </main>

            <footer className="text-white text-center py-4">
                <div className="container">
                    <p>&copy; 2023 Zana Barber. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
