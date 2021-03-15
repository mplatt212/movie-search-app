import React from "react";
import SingleMovie from "./SingleMovie";
import { useGlobalContext } from "../context";

const MovieList = () => {
  const { movies, loading, searchTerm } = useGlobalContext();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!searchTerm) {
    return <h2>Please enter a movie...</h2>;
  }

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 box-border">
        {movies.map((movie) => {
          return <SingleMovie key={movie.id} {...movie} />;
        })}
      </section>
    </>
  );
};

export default MovieList;
