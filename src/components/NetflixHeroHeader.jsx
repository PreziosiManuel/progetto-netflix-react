import { Row, Col, Dropdown, Container } from "react-bootstrap";

const NetflixHeroHeader = () => {
  return (
    <Container fluid>
      <Row className="justify-content-between">
        <Col className="d-flex" md={11}>
          <h2 className="mb-1">Movies</h2>
          <Dropdown className="ms-3">
            <Dropdown.Toggle className="text-bg-dark border">Genres</Dropdown.Toggle>
            <Dropdown.Menu className="text-light">
              <Dropdown.Item href="#">Commedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default NetflixHeroHeader;
