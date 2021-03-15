import React from "react";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div className="mx-5 my-3">
      <h2 className="my-1 text-3xl">Movie Search</h2>
      <input
        className="w-full m-0 text-lg rounded-md py-1 pl-2 border-2 border-gray-300 focus:border-blue-500"
        type="text"
        placeholder="Search your movie..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
