import React,{useState} from "react";
import { Button } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import PageItem from "./pages/PageItem"
import "./panel.css";
function Panel({ title, subtitle, button1, button2, imageURL, videoURL }) {
  const [isOpen,setIsOpen] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1.2]);

  const smoothScale = useSpring(scale, { duration: 0.5 });
  return (
    <div className="panel__container">
      {/* <motion.div className="panel" style={{ scale:smoothScale,backgroundImage: `url(${imageURL})` }}> */}
      <motion.div
        className="panel"
        style={{ scale: smoothScale, backgroundImage: `url(${imageURL})` }}
      >
        {videoURL && (
          /*
        <video
        id="background-video"
        loop
        autoPlay
        muted
        className="videoStyle"
       
      >
        <source src={videoURL} type="video/mp4" />
      </video> */
          <div
            className="framer__container"
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "100%",
              height: "100%",
              
            }}
          >
            <iframe
              src={`${videoURL}&mute=1&controls=0`}
 
              className="video__frame"
              frameborder="0"
              allow="loop;muted;autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}

        <div className="title">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1], transition: { delay: 0.1 } }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1], transition: { delay: 0.4 } }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="options"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
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
                  onClick={()=>{setIsOpen(true)}}
                >
                  {button2.name}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
      {isOpen && (
        <PageItem
          videoURL={videoURL}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}

export default Panel;
