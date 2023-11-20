import React from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const MovieCard = ({ movie }) => {
  const variants = {
    visible: { opacity: 1, scale: 0 },
    hidden: { opacity: 0 },
  };
  const imageURL = "https://image.tmdb.org/t/p/w500/";
  return (
    <Link href={`/movie/${movie.id}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={2}
        whileInView={{ scale: 1 }}
        variants={variants}
        className="flex flex-col items-center">
        {movie.poster_path ? (
          <Image
            src={`${imageURL}${movie.poster_path}`}
            width={300}
            className="borderStyle"
            alt={movie.original_title}
            height={300}
            priority
          />
        ) : (
          <p>Sorry! Not Available</p>
        )}
        <h2 className="text-center font-semibold">{movie.original_title}</h2>
        <p className="max-w-[350px] text-center">
          popularity: {movie.popularity.toFixed()}
        </p>
      </motion.div>
    </Link>
  );
};

export default MovieCard;
