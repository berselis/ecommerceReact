import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ModalPurchases = ({ isShow, itemsPurchases, handleCloseModal }) => {
    return (
        <Modal size='lg' show={isShow} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{`# ${itemsPurchases?.number}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {
                        itemsPurchases?.products.map(item => (
                            <Row key={item.id}>
                                <Col md={7} sm={7} xs={7}>{item.title}</Col>
                                <Col md={2} sm={2} xs={2}>{item.productsInCart.quantity}</Col>
                                <Col md={3} sm={3} xs={3}>{item.price}</Col>
                            </Row>
                        ))
                    }
                </Container>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPurchases