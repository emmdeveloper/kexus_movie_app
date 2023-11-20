import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const MovieDetails = ({ details }) => {
  const imageURL = "https://image.tmdb.org/t/p/w500/";
  const variants = {
    visible: { opacity: 1, scale: 0 },
    hidden: { opacity: 0 },
  };
  const {
    genres,
    overview,
    original_title,
    poster_path,
    tagline,
    release_date,
  } = details;
  console.log(details);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={2}
      whileInView={{ scale: 1 }}
      variants={variants}>
      <div className="flex flex-col items-center gap-2 xl:flex-row">
        <Image
          src={`${imageURL}/${poster_path}`}
          width={500}
          height={500}
          className="-ml-3 md:-ml-0"
        />
        <div className="mt-[20px]">
          <h2 className="text-center font-semibold text-lg lg:text-2xl">
            {original_title}
          </h2>
          <h3 className=" text-sm text-center lg:text-xl ">{tagline}</h3>
          <p className="text-xs text-center lg:text-lg">{overview}</p>
          <p className="text-center">
            Release-date: <span className="ml-1">{release_date}</span>
          </p>
          {genres?.map((genre) => (
            <p className="text-center">{genre.name}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetails;
