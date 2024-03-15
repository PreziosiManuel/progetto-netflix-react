import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import NetflixCarousel from "./NetflixCarousel";

const movieSections = [
  { id: "Ice age", title: "Ice age", query: "ice age" },
  { id: "Harry Potter", title: "Harry Potter", query: "Harry Potter" },
  { id: "The Lord Of The Rings", title: "The Lord Of The Rings", query: "The Lord Of The Rings" },
  { id: "The walking dead", title: "The walking dead", query: "The walking dead" },
];

const NetflixHero = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-between">
        <Col className="d-flex" md={11}>
          <h2 className="mb-1">Movies</h2>
          <Dropdown className="ms-3">
            <Dropdown.Toggle className="text-bg-dark">Genres</Dropdown.Toggle>
            <Dropdown.Menu className="text-light">
              <Dropdown.Item href="#">Commedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {movieSections.map((section) => (
        <div className="mt-3" key={section.id} id={section.id}>
          <h4 className="text-start">{section.title}</h4>
          <NetflixCarousel searchQuery={section.query} />
        </div>
      ))}
    </Container>
  );
};

export default NetflixHero;
