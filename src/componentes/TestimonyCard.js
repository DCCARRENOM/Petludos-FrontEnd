import React from "react";
import Card from "react-bootstrap/Card";
import profile from '../IMGs/ProfileTestimony.jpg';
import '../CSS/TestimonyCard.css'

function TestimonyCard( {Nombre}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <div className="ProfilePhotoContainer">
            <img className="ProfilePhoto" src={profile} />
        </div>
        <Card.Subtitle className="mb-2 text-muted">
            <h1 className="ProfileName"> {Nombre}</h1>
        </Card.Subtitle>
        <Card.Text className="ProfileText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed. Dictum non consectetur 
            a erat nam at lectus urna. Placerat in egestas erat imperdiet sed euismod nisi. Velit laoreet 
            id donec ultrices tincidunt arcu non.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TestimonyCard;
