import React, { useEffect } from "react";
import Panel from "../Panel";
import Cards from "../Cards";
import { Grid } from "@material-ui/core";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

function Products() {
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
    window.scrollTo(1500, 0);
  }, []);
  return (
    <div className="body">
      <Panel
        title="Products"
        subtitle="Nos produits !"
        imageURL="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg"
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
                  name="Chausures"
                  imageURL="https://cdn.pixabay.com/photo/2016/01/19/18/06/brown-shoes-1150071_960_720.jpg"
                  categorie="Vetements"
                  description="magnifique paire de chaussures"
                />
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Products;
