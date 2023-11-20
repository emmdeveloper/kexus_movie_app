"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { fetchData, theMovieDBoptions } from "@/utils/fetchData";
import MovieDetails from "@/components/MovieDetails";
const page = () => {
  const variants = {
    visible: { opacity: 1, scale: 0 },
    hidden: { opacity: 0 },
  };
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const fetchedMovie = await fetchData(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        theMovieDBoptions
      );
      setMovieDetails(fetchedMovie);
    };
    fetchMovieDetails();
  }, [id]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={2}
      whileInView={{ scale: 1 }}
      variants={variants}>
      <MovieDetails details={movieDetails} />
    </motion.div>
  );
};

export default page;
