import React from "react";
import {Button} from "@material-ui/core"
import {PlayCircleOutline} from "@material-ui/icons"

import "./body.css";

function Body() {
  return (
    <div className="body">
      <div className="panel">
        <div className="title">
          <h1>ADVENTURE AWAITS</h1>
          <h3>What are you waiting for ?</h3>
          <div className="options">
            <Button variant="outlined">GET STARTED</Button>
            <Button variant="contained">WATCH TRAILER <PlayCircleOutline/></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
