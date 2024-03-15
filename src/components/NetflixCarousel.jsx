import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class NetflixCarousel extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    const { searchQuery } = this.props;
    const endPoint = `http://www.omdbapi.com/?i=tt3896198&apikey=c9678fbe&movie&s=${searchQuery}`;

    fetch(endPoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Risposta di rete non valida");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.Search ? data.Search.slice(0, 6) : [],
          isLoaded: true,
        });
        console.log("Successo durante il recupero dei dati");
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        this.setState({ error: error.message, isLoaded: true });
      });
  }

  render() {
    const { movies, isLoaded, error } = this.state;
    const { stile } = this.props;

    if (error) {
      return <div>Errore: {error}</div>;
    } else if (!isLoaded) {
      return <div>Caricamento...</div>;
    } else {
      return (
        <Row className={stile}>
          {movies.map((movie) => (
            <Col key={movie.imdbID}>
              <SingleMovie img={movie.Poster} title={movie.Title} />
            </Col>
          ))}
        </Row>
      );
    }
  }
}

NetflixCarousel.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  stile: PropTypes.string,
};

export default NetflixCarousel;
