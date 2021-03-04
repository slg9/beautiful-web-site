import React, { useEffect } from "react";
import Panel from "../Panel";
import Cards from "../Cards";
import { Grid } from "@material-ui/core"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const animations = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div className="body">
      <Panel
        title="Services"
        subtitle="Nos services !"
        imageURL="https://cdn.pixabay.com/photo/2020/12/15/13/44/children-5833685_960_720.jpg"
      />
      <div className="body__container">
        <div class="content">
          <Grid container spacing={3}>
            <Grid item lg={6} md={12}>
              <motion.div
                ref={ref}
                variants={animations}
                initial="hidden"
                animate={controls}
              >
                <Cards
                  name="Pyramide"
                  imageURL="https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501_960_720.jpg"
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

export default Services;
