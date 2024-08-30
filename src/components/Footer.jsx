import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <Container fluid className="py-4 bg-primary">
                <Row>
                    <Col className="text-center mt-3">
                        <p>© 2024 ShopSmart. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
