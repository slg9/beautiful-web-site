import React from "react";
import { useSpring, animated } from "react-spring";
import Logo from "../../assets/programming.svg";
import "./body.css";

function Body() {
  const fadein = useSpring({ opacity: 1, from: { opacity: 0 } });
  const growup = useSpring({ width: "100px", from: { width: "0px" } });
  const progress = useSpring({ x: 100, from: { x: 0 } });
  return (
    <div className="body">
      <animated.h1 style={fadein}>voici ma premiere animation</animated.h1>
      <animated.img src={Logo} style={growup} />
      <animated.span>{progress.x}</animated.span>
    </div>
  );
}

export default Body;
