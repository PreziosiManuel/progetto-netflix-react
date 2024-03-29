import { Row, Col, Dropdown, Container } from "react-bootstrap";
import { Grid, TextLeft } from "react-bootstrap-icons";

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

        <Col md={1} className="d-flex justify-content-end">
          <TextLeft className="fs-3 m-1 p-1 border border-1" />
          <Grid className="fs-3 m-1 p-1 border border-1" />
        </Col>
      </Row>
    </Container>
  );
};
export default NetflixHeroHeader;
