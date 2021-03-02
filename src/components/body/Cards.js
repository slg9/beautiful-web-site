import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";
import "./cards.css";
import PageItem from "./pages/PageItem";
import { useInView } from "react-intersection-observer";
function Cards({ name, imageURL, categorie, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const animations = {
    hidden: { scale: 0,rotate:25 },
    visible: { scale: 1,rotate:0, transition: { type:"spring",stiffness:50 } },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={animations}
        initial="hidden"
        animate={controls}
        transition={{duration:2}}
        className="card"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Box boxShadow={3} style={{ borderRadius: "30px" }}>
          <Card style={{ borderRadius: "30px" }}>
            <CardActionArea>
              <div style={{ overflow: "hidden" }}>
                <motion.div
                  whileHover={{ scale: 1.05, opacity: 0.8 }}
                  transition={{ damping: 2000 }}
                >
                  <CardMedia
                    component="img"
                    alt={name}
                    style={{ width: "100%", height: "250px" }}
                    image={imageURL}
                    title={name}
                  />
                </motion.div>
              </div>
              <div className="info">{categorie}</div>
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
      {isOpen && (
        <PageItem
          imageURL={imageURL}
          details={description}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}

export default Cards;
