import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import React,{useState} from "react";
import { motion, useViewportScroll,useTransform,useSpring } from "framer-motion";
import "./cards.css";
import PageItem from "./pages/PageItem";
function Cards({ name, imageURL, categorie, description }) {
  const [isOpen,setIsOpen]=useState(false);
  const {scrollYProgress} = useViewportScroll();
  const scaleY = useTransform(scrollYProgress,[0,0.7],[0.8,1]);
  const smoothScaleY = useSpring(scaleY,{stiffness:20});
  return (
    <>
    <motion.div style={{scale:smoothScaleY}} className="card" onClick={()=>{setIsOpen(true)}}>
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
    {isOpen &&
      <PageItem imageURL={imageURL} details={description} setIsOpen={setIsOpen}/>
    }
    </>
  );
}

export default Cards;
