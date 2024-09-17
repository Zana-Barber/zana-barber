// ReservaModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ReservaModal.css';

function ReservaModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Reserva tu Cita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                    </Form.Group>
                    <Form.Group controlId="servicio">
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control as="select">
                            <option>Corte de Cabello</option>
                            <option>Afeitado Tradicional</option>
                            <option>Arreglo de Barba</option>
                            <option>Tratamientos Capilares</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="fecha">
                        <Form.Label>Fecha y Hora</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Reservar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ReservaModal;
