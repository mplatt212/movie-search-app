import React from "react";
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <body className="bg-gray-100 w-full h-full m-0 py-3">
      <div className="container mx-auto">
        <Navbar />
        <MovieList />
      </div>
    </body>
  );
}

export default App;
