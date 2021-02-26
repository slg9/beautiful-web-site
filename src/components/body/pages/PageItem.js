import React from "react";
import { motion } from "framer-motion";
import {Close} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import "./pageItem.css";
function PageItem({ imageURL, details ,setIsOpen}) {
  const transition = { duration:1 };
  const transitionSpring = { type:"spring" ,stiffness:50,dampin:40000};
  const animations = {
    svgDrawing: {
      y1: [250, 0],
      y2: [250, 500],
      transition,
    },
    imageZoom: { scale: 1.0005 ,transition:transitionSpring},
    imageDeZoom: { rotate: -1, transition },
    textAppear: { x: [500, 0], transition},
    smoothAppear:{scale:1,rotate:0,x:0,transition:transitionSpring}
  };
  return (
    <div className="page__item" >
      <motion.div className="page__item__content" variants={animations}  animate="smoothAppear" initial={{scale:0,rotate:-90,x:-1000}}>
        <div className="page__item__content__left">
          <motion.img
            animate="imageDeZoom"
            variants={animations}
            src={imageURL}
            
          />
        </div>
        <div className="page__item__content__middle">
          <svg height="500px" width="5px">
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
            <div className="toggle">
                <IconButton onClick={()=>{setIsOpen(false)}}>
                    <Close/>
                </IconButton>
            </div>
          {details}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PageItem;
