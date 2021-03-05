import React from "react";

import { Cancel } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Modal from "../elements/Modal";
function ContentVideo({ videoURL, setIsOpen }) {
 
  return (
    <Modal setIsOpen={setIsOpen}>
        <iframe
          src={`${videoURL}&mute=0&controls=1`}
          style={{ scale:1.1,flex: 1 ,backgroundColor:"black",paddingBottom:"10px"}}
          frameborder="0"
          allow="loop;muted;autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
    
      
    </Modal>
  );
}

export default ContentVideo;
