import React from "react";
import { Button } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import { motion } from "framer-motion";
import "./panel.css";
function Panel({ title, subtitle, button1, button2, imageURL }) {
  return (
    <div className="panel" style={{ backgroundImage: `url(${imageURL})` }}>
      <div className="title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="options">
          {button1 && (
            <motion.div
              className="option__field"
              whileHover={{ scale: 1.1 }}
              transition={{ damping: 50 }}
            >
              <Button
                size="large"
                variant="outlined"
                style={{ color: "white", border: "1px solid white" }}
              >
                {button1.name}
              </Button>
            </motion.div>
          )}
          {button2 && (
            <motion.div
              className="option__field"
              whileHover={{ scale: 1.1 }}
              transition={{ damping: 50 }}
            >
              <Button
                size="large"
                variant="contained"
                style={{ backgroundColor: "white" }}
                endIcon={<PlayCircleOutline />}
              >
                {button2.name}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Panel;
