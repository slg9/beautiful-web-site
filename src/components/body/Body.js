import React from "react";
import Panel from "./Panel";
import Cards from "./Cards";

import "./body.css";

function Body() {
  return (
    <div className="body">
      <Panel
        title="ADVENTURE AWAITS MAN"
        subtitle="What are you waiting for ?"
        button1={{ name: "GET STARTED" }}
        button2={{ name: "WATCH TRAILER" }}
        imageURL="https://cdn.pixabay.com/photo/2015/11/07/11/02/milky-way-1030765_960_720.jpg"
      />
      <div className="body__container">
        <div className="content">
          <div className="row">
            <Cards
              name="Tour Eiffel"
              imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
              categorie="ville"
              description="magnifique ville a visiter"
              classic={false}
            />
            <Cards
              name="Tour Eiffel"
              imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
              categorie="ville"
              description="magnifique ville a visiter"
              classic={false}
            />
          </div>
          <div className="row">
            <Cards
              name="Tour Eiffel"
              imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
              categorie="ville"
              description="magnifique ville a visiter"
              classic={true}
            />
            <Cards
              name="Tour Eiffel"
              imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
              categorie="ville"
              description="magnifique ville a visiter"
              classic={true}
            />
            <Cards
              name="Tour Eiffel"
              imageURL="https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg"
              categorie="ville"
              description="magnifique ville a visiter"
              classic={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
