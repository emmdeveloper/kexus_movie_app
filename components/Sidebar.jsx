"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiMiniXMark, HiOutlineBars3CenterLeft } from "react-icons/hi2";
const Sidebar = () => {
  const [DropDown, setDropDown] = useState(false);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={2}
      variants={variants}
      className="w-[105px] top-0 z-50 pt-5 px-6 borderStyle  bg-blue-500 layoutGradient gap-3 flex flex-col gap- text-white md:w-[200px] min-h-screen">
      <Link href={"/"}>
        {" "}
        <h2 className="text-lg hidden md:block md:text-3xl font-bold">
          Kmovies
        </h2>
      </Link>
      <ul className=" hidden font-medium text-lg flex-col md:flex gap-2">
        <li>
          <Link href={"/upcoming"}>Upcoming</Link>
        </li>
        <li>
          <Link href={"/trending"}>Trending</Link>
        </li>
        <li>
          <Link href={"/toprated"}>Top Rated</Link>
        </li>
        <li>
          <Link href={"/playingnow"}>Now Playing</Link>
        </li>
      </ul>
      {DropDown && (
        <motion.div
          initial="hidden"
          animate="visible"
          transition={2}
          variants={variants}
          className="flex md:hidden">
          <ul className="font-medium top-0 layoutGradient text-lg flex-col absolute left-0 h-[500px] text-center w-full  gap-2">
            <li className="p-3">
              <Link
                href={"/upcoming"}
                onClick={() => setDropDown((DropDown) => !DropDown)}>
                Upcoming
              </Link>
            </li>
            <li className="p-3">
              <Link
                href={"/trending"}
                onClick={() => setDropDown((DropDown) => !DropDown)}>
                Trending
              </Link>
            </li>
            <li className="p-3">
              <Link
                href={"/toprated"}
                onClick={() => setDropDown((DropDown) => !DropDown)}>
                Top Rated
              </Link>
            </li>
            <li className="p-3">
              <Link
                href={"/playingnow"}
                onClick={() => setDropDown((DropDown) => !DropDown)}>
                Now Playing
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
      {DropDown ? (
        <HiMiniXMark
          onClick={() => setDropDown((DropDown) => !DropDown)}
          className="z-50 text-3xl md:hidden"
        />
      ) : (
        <Link href={"/"}>
          <HiOutlineBars3CenterLeft
            onClick={() => setDropDown((DropDown) => !DropDown)}
            className="text-3xl md:hidden"
          />
        </Link>
      )}
    </motion.nav>
  );
};

export default Sidebar;
