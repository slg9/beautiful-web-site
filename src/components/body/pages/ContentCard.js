import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cancel } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Modal from "../elements/Modal";
import "./contentCard.css";
function ContentCard({ videoURL, imageURL, details, setIsOpen }) {
  const transition = { duration: 1 };
  const transitionSpring = { type: "spring", stiffness: 50 };
  const animations = {
    svgDrawing: {
      y1: ["50vh", "0vh"],
      y2: ["50vh", "100vh"],
    },
    imageZoom: { scale: 1.0005, transition: transitionSpring },
    imageDeZoom: { rotate: -1, transition },
    textAppear: { x: [500, 0], transition },
    smoothAppear: { scale: 1, y: 0, transition: transitionSpring },
  };
  return (
    <Modal setIsOpen={setIsOpen}>
      {videoURL ? (
        <iframe
          src={`${videoURL}&mute=0&controls=1`}
          style={{ flex: 1 }}
          frameborder="0"
          allow="loop;muted;autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        <>
          <div className="page__item__content__left">
            <AnimatePresence>
              <motion.img
                animate="imageDeZoom"
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                transition={{ damping: 2000 }}
                variants={animations}
                src={imageURL}
              />
            </AnimatePresence>
          </div>
          <div className="page__item__content__middle">
            <svg height="100vh" width="5px">
              <motion.line
                x1="0"
                x2="0"
                style={{ stroke: "black", strokeWidth: "10" }}
                animate="svgDrawing"
                variants={animations}
              />
            </svg>
          </div>
          <motion.div
            animate="textAppear"
            variants={animations}
            className="page__item__content__right"
          >
            {details}
          </motion.div>
        </>
      )}
      <div className={videoURL ? `toggleVideo` : `toggle`}>
        <IconButton
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Cancel color="secondary" />
        </IconButton>
      </div>
    </Modal>
  );
}

export default ContentCard;
