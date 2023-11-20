"use client";
import React, { useEffect } from "react";
import { fetchData, theMovieDBoptions } from "@/utils/fetchData";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
const page = () => {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const upcomingFilms = await fetchData(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        theMovieDBoptions
      );
      const fData = upcomingFilms.results;
      setUpcomingMovie(fData);
      console.log(fData);
    };
    fetchUpcomingMovies();
  }, []);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 p-4 gap-5">
      {upcomingMovie.map((upcoming, index) => (
        <MovieCard movie={upcoming} key={index} />
      ))}
    </section>
  );
};

export default page;
