import React, { useEffect } from "react";
import Panel from "./Panel";
import Cards from "./Cards";
import { Grid } from "@material-ui/core"
import { motion, useAnimation , useViewportScroll,useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./body.css";

function Body() {

  const controls = useAnimation();
  const { ref, inView } = useInView();
  const animations = {
    "hidden": { scale: 0 },
    "visible": { scale: 1, transition: { duration: 0.5 } }
  }
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    
  }, [controls, inView])

  useEffect(() => {
    window.scrollTo(1500,0);
  }, [])
  return (
    <div className="body">
      <Panel
        title="ADVENTURE AWAITS MAN"
        subtitle="What are you waiting for ?"
        button1={{ name: "GET STARTED" }}
        button2={{ name: "WATCH TRAILER" }}
        imageURL="https://cdn.pixabay.com/photo/2015/11/07/11/02/milky-way-1030765_960_720.jpg"
      />
      <div className="body__container">
        <div class="content">
           
          <Grid container spacing={6}>

            <Grid item lg={6} md={12}>
              <motion.div ref={ref} variants={animations} initial="hidden" animate={controls}>
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={6} md={12}>
              <motion.div variants={animations} initial="hidden" animate={controls}>
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={4} md={6}>
              <motion.div variants={animations} initial="hidden" animate={controls}>
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={4} md={6}>
              <motion.div  variants={animations} initial="hidden" animate={controls}>
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={4} md={6}>
              <motion.div  variants={animations} initial="hidden" animate={controls}>
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>


          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Body;
