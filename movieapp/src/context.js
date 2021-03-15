import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const UserContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("inception");

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${searchTerm}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "946590eceamsh5e883283dfdc5b1p1636a0jsn86f5587c09de",
            "x-rapidapi-host":
              "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      const { titles } = data;
      setMovies(titles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ movies, loading, setSearchTerm, searchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { UserContext, AppContext };
