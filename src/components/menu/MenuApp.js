import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import { Menu, Close, ExpandLess } from "@material-ui/icons";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion";
import "./menu.css";

function MenuApp() {
  const [isResponsive, setIsResponsive] = useState(false);
  const history = useHistory();
  const control = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const visible = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const smoothVisible = useSpring(visible,{type:"spring",stiffness:400,damping:40});
  const onResponsive = () => {
    setIsResponsive(!isResponsive);
  };

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
  const updateMenu = (pathname) => {
    let x1 = 0,
      x2 = 120;
    switch (pathname) {
      case "/services":
        x1 = 120;
        x2 = 240;
        break;
      case "/products":
        x1 = 240;
        x2 = 360;
        break;
      default:
        break;
    }
    control.start({ scale: 1, opacity: [0.5, 1], x1, x2 ,transition:{delay:0.2}});
  };
  useEffect(() => {
    updateMenu(history.location.pathname);
  }, []);

  useEffect(() => {
    history.listen((location) => {
      updateMenu(location.pathname);
    });
  }, [history.location]);

  return (
    <div className="menu__container">
      <motion.div
        className="menuresponsive"
        initial={false}
        variants={animation2}
        animate={isResponsive ? "open" : "closed"}
      >
        <div className="containerResponsive">
          <motion.div
            className="field"
            variants={scale}
            whileHover="scale"
            onClick={() => {
              history.push("/");
              setIsResponsive(false);
            }}
          >
            HOME
          </motion.div>
          <motion.div
            className="field"
            variants={scale}
            whileHover="scale"
            onClick={() => {
              history.push("/services");
              setIsResponsive(false);
            }}
          >
            SERVICE
          </motion.div>
          <motion.div
            className="field"
            variants={scale}
            whileHover="scale"
            onClick={() => {
              history.push("/products");
              setIsResponsive(false);
            }}
          >
            PRODUCTS
          </motion.div>
          <motion.div className="field" variants={scale} whileHover="scale">
            SIGNUP
          </motion.div>
        </div>
      </motion.div>
      <div className="menu">
        <div className="left">
          <Link to="/">
            <motion.svg
              id="Capa_1"
              enable-background="new 0 0 512 512"
              height="30"
              viewBox="0 0 512 512"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
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
          </Link>
        </div>
        <div className="right">
          <div className="menu__tile">
            <motion.div
              className="item"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => {
                history.push("/");
              }}
            >
              HOME
            </motion.div>

            <motion.div
              className="item"
    
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => {
                history.push("/services");
              }}
            >
              SERVICES
            </motion.div>
            <motion.div
              className="item"
       
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => {
                history.push("/products");
              }}
            >
              PRODUCTS
            </motion.div>
            <motion.div
              className="sign"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 ,delay:0.5}}
            >
              <Button variant="contained" size="medium">
                SIGN UP
              </Button>
            </motion.div>
          </div>
          <div className="menu__underline">
            <svg height="1" width="350">
              <motion.line
                initial={{ scale: 0 }}
                y1="1"
                y2="1"
                style={{ stroke: "white", strokeWidth: "2" }}
                animate={control}
                variants={animation}
              />
            </svg>
          </div>
        </div>
        <div className="right__responsive">
          <motion.div
            onClick={onResponsive}
            variants={scale}
            whileHover="scale"
            initial={{ opacity: 0, x: "100%", rotate: 90 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isResponsive ? (
              <Close fontSize="large" cursor="pointer" />
            ) : (
              <Menu cursor="pointer" fontSize="large" />
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="scrollup"
        style={{ scale: smoothVisible,border:"1px solid gray" ,backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"50%"}}
        animate={{ y: -2}}
        transition={{ type:"spring",stiffness:1500,repeat: Infinity, repeatDelay: 0.2 }}
        onClick={()=>{window.scrollTo(1500,0)}}
      >
        <IconButton >
          <ExpandLess  />
        </IconButton>
      </motion.div>
      coucou
    </div>
  );
}

export default MenuApp;
