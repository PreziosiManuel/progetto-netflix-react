import React from "react";

const SingleMovie = ({ img, title }) => (
  <div className="Film">
    <img
      src={img}
      className="poster"
      alt="movie poster"
      style={{ width: "95%", height: "200px", objectFit: "cover", objectPosition: "50% 50%" }}
    />
    <p className="mx-2">{title}</p>
  </div>
);

export default SingleMovie;
