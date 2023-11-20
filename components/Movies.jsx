import React from "react";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";
const Movies = ({ movies, setMovies }) => {
  console.log(movies);
  const variants = {
    visible: { opacity: 1, scale: 0 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      whileInView={{ scale: 1 }}
      transition={2}
      variants={variants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 p-4 gap-5">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </motion.section>
  );
};

export default Movies;
