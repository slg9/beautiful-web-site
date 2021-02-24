import React, { useState } from "react";
import { Button, withStyles, Fab } from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { motion } from "framer-motion";
import "./menu.css";

function MenuApp() {
  const [isResponsive, setIsResponsive] = useState(false);
  const onResponsive = () => {
    setIsResponsive(!isResponsive);
  };
  const BlackFab = withStyles((theme) => ({
    root: {
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "gray",
      },
    },
  }))(Fab);
  const animation = {
    scale: { scale: 1.05, transition: { stiffness: 10 } },
  };

  const animation2 = {
    open: { x: 0, transition: { type: "spring", damping: 20, resDelta: 2 } },
    closed: { x: "-110%", transition: { type: "spring", stiffness: 60 } },
  };
  const scale = {
    scale: { scale: 1.1, transition: { damping: 10 } },
  };
  return (
    <>
      <motion.div
        className="menuresponsive"
        initial={false}
        variants={animation2}
        animate={isResponsive ? "open" : "closed"}
      >
        <div className="containerResponsive">
          
          <motion.div className="field" variants={scale} whileHover="scale" >
            HOME
          </motion.div>
          <motion.div className="field" variants={scale} whileHover="scale">
            SERVICE
          </motion.div>
          <motion.div className="field" variants={scale} whileHover="scale">
            PRODUCTS
          </motion.div>
          <motion.div className="field" variants={scale} whileHover="scale">
            SIGNUP
          </motion.div>
        </div>
      </motion.div>
      <div className="container">
        <div className="menu">
          <div className="left">
            <motion.svg
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="56"
              viewBox="0 0 512 512"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ stiffness: 20 }}
              whileHover={{ scale: 1.03 }}
              cursor="pointer"
            >
              <path
                fill="white"
                stroke="black"
                d="m20.477 505.774c2.827 3.912 7.354 6.226 12.173 6.226h83.101c32.49 0 61.128-20.654 71.235-51.372l146.089-440.882c1.538-4.57.762-9.595-2.051-13.521-2.827-3.911-7.353-6.225-12.173-6.225h-126.299c-6.46 0-12.188 4.131-14.238 10.254l-159.902 482c-1.524 4.585-.747 9.609 2.065 13.52z"
              />
              <path
                fill="white"
                stroke="black"
                d="m396.254 512h83.101c4.819 0 9.36-2.314 12.173-6.24 2.813-3.911 3.589-8.936 2.051-13.521l-143.091-429.925-78.81 236.479 53.326 161.791c10.107 30.747 38.745 51.416 71.25 51.416z"
              />
            </motion.svg>
          </div>
          <div className="right">
            <motion.div
              className="item"
              whileHover="scale"
              variants={animation}
            >
              HOME
            </motion.div>
            <motion.div
              className="item"
              whileHover="scale"
              variants={animation}
            >
              SERVICES
            </motion.div>
            <motion.div
              className="item"
              whileHover="scale"
              variants={animation}
            >
              PRODUCTS
            </motion.div>
            <motion.div
              className="sign"
              whileHover={{ scale: 1.1 }}
              transition={{ stiffness: 20 }}
            >
              <Button
                variant="outlined"
                style={{ color: "white", border: "1px solid white" }}
              >
                SIGN UP
              </Button>
            </motion.div>
          </div>
          <div className="right__responsive">
            <motion.div onClick={onResponsive} variants={scale} whileHover="scale">
              {isResponsive?<Close fontSize="large" cursor="pointer"/>:<Menu cursor="pointer" fontSize="large" />}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuApp;
