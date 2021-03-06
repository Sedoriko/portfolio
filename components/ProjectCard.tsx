import React, { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FC<{ project: IProject; showDetail: number | null; setShowDetail: (id: number | null) => void }> = ({
  project: { id, name, image_path, category, deployed_url, description, github_url, key_techs },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div className="bg-gray-200 dark:bg-dark-200">
      <Image
        onClick={() => {
          setShowDetail(id);
        }}
        src={image_path}
        alt={name}
        className="cursor-pointer"
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-md:grid-cols- gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="border-4 border-gray-200">
              <Image src={image_path} alt={name} width="300" height="150" layout="responsive" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start py-4 lg:justify-center">
              <a
                className="flex items-center p-2 px-4 mx-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200"
                href="{github_url}"
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                className="flex items-center p-2 px-4 mx-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200"
                href="{deployed_url}"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate" className="py-2">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 text-sm tracking-wider spac-x-2">
              {key_techs.map((tech) => {
                return (
                  <span key={tech} className="px-2 py-1 m-1 bg-gray-200 rounded-lg dark:text-white dark:bg-dark-200">
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>
          <button
            className="absolute bg-gray-200 rounded-full top-1.5 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
