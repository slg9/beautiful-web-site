import { motion, useViewportScroll, useTransform ,useSpring} from "framer-motion";
import React,{useEffect} from "react";

function CircleIndicator() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0,1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    console.log("change");
  }, [yRange])
  return (
    <div className="body">
      <motion.svg
        id="Capa_1"
        enable-background="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        
        cursor="pointer"
      >
        <motion.path
          fill="none"
          stroke="red"
          strokeWidth="5"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
          
        />
        
      </motion.svg>
      
    </div>
  );
}

export default CircleIndicator;
