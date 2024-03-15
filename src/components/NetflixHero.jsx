import React from "react";
import { Container } from "react-bootstrap";
import NetflixCarousel from "./NetflixCarousel";

const NetflixHero = (props) => {
  return (
    <Container fluid className="mt-3">
      <div className="mt-3" key={props.title} id={props.title}>
        <h4 className="text-start">{props.title}</h4>
        <NetflixCarousel searchQuery={props.title} />
      </div>
    </Container>
  );
};

export default NetflixHero;
