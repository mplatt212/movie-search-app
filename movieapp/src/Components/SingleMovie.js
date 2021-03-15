import React from "react";

const SingleMovie = ({ ...movie }) => {
  //const { i, l: name, rank } = movie;
  // const { imageUrl: image } = i;
  const { image, title: name } = movie;

  return (
    <>
      <div className="mt-4">
        <h2 className="text-blue-700 my-2 text-xl text-center">{name}</h2>
        <a href="#">
          <img
            src={image}
            alt=""
            className="rounded-md h-96 mx-auto shadow-md hover:shadow-none"
          />
        </a>
      </div>
    </>
  );
};

export default SingleMovie;
