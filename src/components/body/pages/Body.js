import React, { useEffect ,useState} from "react";
import Panel from "../elements/Panel";
import Cards from "../elements/Cards";
import { Grid } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { motion, useAnimation , useViewportScroll,useTransform } from "framer-motion";


import "./body.css";

function Body() {
 
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div className="body">
      <Panel
        title="Bienvenue!"
        subtitle=""
        //button1={{ name: "GET STARTED" }}
        button2={{ name: "VOIR VIDEO" }}
        //imageURL="https://cdn.pixabay.com/photo/2015/11/07/11/02/milky-way-1030765_960_720.jpg"
        videoURL="https://www.youtube.com/embed/BHACKCNDMW8?autoplay=1&showinfo=0&autohide=1&start=5"
     />
      <div className="body__container">
        <div className="content">
           
          <Grid container spacing={6}>

            <Grid item lg={6} md={12}>
              <motion.div >
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter les gars"
                />
              </motion.div>
            </Grid>
            <Grid item lg={6} md={12}>
              <motion.div >
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={4} md={6}>
              <motion.div >
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={4} md={6}>
              <motion.div  >
                <Cards
                  name="Tour Eiffel"
                  imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
                  categorie="ville"
                  description="magnifique ville a visiter"
                />
              </motion.div>
            </Grid>
            <Grid item lg={4} md={6}>
              <motion.div  >
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
