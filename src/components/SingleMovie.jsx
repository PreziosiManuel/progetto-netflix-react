import React from "react";

const SingleMovie = ({ img, title }) => (
  <>
    <img
      src={img}
      className="poster"
      alt="movie poster"
      style={{ width: "95%", height: "200px", objectFit: "cover", objectPosition: "50% 50%" }}
    />
    <p>{title}</p>
  </>
);

export default SingleMovie;
