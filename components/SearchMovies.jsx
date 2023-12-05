"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchData, theMovieDBoptions } from "@/utils/fetchData";
const SearchMovies = ({ setMovies }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const [search, setSearch] = useState("");
  console.log(search);

  const handleSearch = async (e) => {
    e.preventDefault();
    const moviesData = await fetchData(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      theMovieDBoptions
    );
    if (search) {
      const fData = moviesData.results;
      console.log(fData);
      const SearchMovies = fData.filter(
        (movie) =>
          movie.title.toLowerCase().includes(search) ||
          movie.original_title.toLowerCase().includes(search)
      );
      setMovies(SearchMovies);
      console.log(search);
    }
    if (search == "") {
      const moviesData = await fetchData(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        theMovieDBoptions
      );
      const fData = moviesData.results;
      setMovies(fData);
    }
  };

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      transition={2}
      onSubmit={handleSearch}
      variants={variants}
      className="pt-3">
      <input
        type="text"
        placeholder="Search Any Movie:"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        className="w-full p-3 rounded-lg  lg:w-[900px] dark:bg-gray-900 "
      />
      <button
        type="submit"
        className="p-3 bg-blue-500 btnGradient font-medium text-white rounded-lg"
        onClick={handleSearch}>
        Search
      </button>
    </motion.form>
  );
};

export default SearchMovies;
