import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="mx-auto">
          <h2>About the Warehouse Management System</h2>
          <p>
            A lightweight warehouse management app for inventory, transactions, import, and reporting.
          </p>

          <Card className="mt-4">
            <Card.Header>
              <h5>System Features</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Product management (CRUD)</ListGroup.Item>
                <ListGroup.Item>Transaction IN/OUT tracking</ListGroup.Item>
                <ListGroup.Item>Inventory &amp; batch number tracking</ListGroup.Item>
                <ListGroup.Item>Excel upload (bulk import) — supports Indian date format</ListGroup.Item>
                <ListGroup.Item>CSV / Excel export &amp; reports</ListGroup.Item>
                <ListGroup.Item>Real-time autocomplete suggestions</ListGroup.Item>
                <ListGroup.Item>Advanced search and filtering</ListGroup.Item>
                <ListGroup.Item>Responsive modern UI</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header>
              <h5>Technology Stack</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Backend</h6>
                  <ul>
                    <li>Java 17</li>
                    <li>Spring Boot 3.2</li>
                    <li>Spring Data JPA / Hibernate</li>
                    <li>MySQL (production) — H2 in-memory fallback for local dev</li>
                    <li>Maven build (and a Dockerfile for container builds)</li>
                    <li>Spring Security</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6>Frontend</h6>
                  <ul>
                    <li>React 18 (Create React App)</li>
                    <li>React Router</li>
                    <li>Bootstrap 5 + React-Bootstrap</li>
                    <li>Axios for API requests</li>
                    <li>React Toastify for notifications</li>
                    <li>Frontend Dockerfile + Nginx for production build</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
