import React from "react";
import { motion } from "framer-motion";

import "./modal.css";
function Modal({ children ,setIsOpen}) {

  const transitionSpring = { type: "spring", stiffness: 50};
  const animations = {
    svgDrawing: {
      y1: ["50vh", "0vh"],
      y2: ["50vh", "100vh"],
     
    },

    smoothAppear: { scale: 1, y: 0, transition: transitionSpring },
  };
  return (
    <div className="page__item">
      <motion.div
        className="page__item__content"
        variants={animations}
        animate="smoothAppear"
        initial={{ scale: 0, y: -1000 }}
      >
        {children}
        
      </motion.div>
      <div className="background" onClick={()=>{setIsOpen(false)}}>

      </div>
    </div>
  );
}

export default Modal;
