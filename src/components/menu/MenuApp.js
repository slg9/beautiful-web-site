import React from "react";
import { Button, withStyles, Fab } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import "./menu.css";

function MenuApp() {
  const BlackFab = withStyles((theme) => ({
    root: {
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "transparent",
        color: "gray",
      },
    },
  }))(Fab);
  return (
    <div className="menu">
      <div className="left">
        <svg
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="56"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
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
        </svg>
      </div>
      <div className="left__responsive">
        <BlackFab>
          <Menu fontSize="large" />
        </BlackFab>
      </div>
      <div className="right">
        <div className="item">Home</div>
        <div className="item">Services</div>
        <div className="item">Products</div>
        <div className="sign">
          <Button variant="contained">SIGN UP</Button>
        </div>
      </div>
      <div className="right__responsive">
        <svg
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="56"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
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
        </svg>
      </div>
    </div>
  );
}

export default MenuApp;