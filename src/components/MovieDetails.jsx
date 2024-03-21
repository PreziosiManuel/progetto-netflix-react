import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieDetails({ img, title }) {
  return (
    <Card style={{ width: "18rem" }}>
      <img
        src={img}
        className="poster"
        alt="movie poster"
        style={{ width: "95%", height: "200px", objectFit: "cover", objectPosition: "50% 50%" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p className="mx-2">{title}</p>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieDetails;
