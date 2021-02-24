import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box
} from "@material-ui/core";
import React from "react";
import { motion } from "framer-motion";
import "./cards.css";
function Cards({ name, imageURL, categorie, description }) {
  return (
    <div className="card">
      <Box boxShadow={3} style={{borderRadius:"30px"}}>
        <Card style={{borderRadius:"30px"}}>
          <CardActionArea>
            <motion.div
              whileHover={{ scale: 1.05,opacity:0.8 }}
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
    </div>
  );
}

export default Cards;
