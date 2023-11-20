"use client";
import SearchMovies from "@/components/SearchMovies";
import { useState, useEffect } from "react";
import { fetchData, theMovieDBoptions } from "@/utils/fetchData";
import Movies from "@/components/Movies";
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchData(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        theMovieDBoptions
      );
      const fData = moviesData.results;
      setMovies(fData);
      console.log(fData);
    };
    fetchMoviesData();
  }, []);
  return (
    <main>
      <SearchMovies movies={movies} setMovies={setMovies} />
      <Movies movies={movies} setMovies={setMovies} />
    </main>
  );
}
