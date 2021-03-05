import React from "react";

import { Cancel } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Modal from "../elements/Modal";
import "./contentVideo.css";
function ContentVideo({ videoURL, setIsOpen }) {
 
  return (
    <Modal setIsOpen={setIsOpen}>
        <iframe
          src={`${videoURL}&mute=0&controls=1`}
          style={{ flex: 1 }}
          frameborder="0"
          allow="loop;muted;autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
    
      <div className="toggleVideo">
        <IconButton
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Cancel color="secondary" />
        </IconButton>
      </div>
    </Modal>
  );
}

export default ContentVideo;
