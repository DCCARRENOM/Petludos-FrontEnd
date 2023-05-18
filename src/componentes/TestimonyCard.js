import React from "react";
import Card from "react-bootstrap/Card";
import profile from '../IMGs/ProfileTestimony.jpg';
import '../CSS/TestimonyCard.css'

function TestimonyCard( {info:{attributes}}) {
  return (
    <Card style={{ width: "18rem",  height:"30rem"}}>
      <Card.Body>
        <div className="ProfilePhotoContainer">
            <img className="ProfilePhoto" src={`http://localhost:1337${attributes.pet.data.attributes.picture.data.attributes.url}`} alt="PhotoTestimony"/>
        </div>
        <Card.Subtitle className="mb-2 text-muted">
            <h1 className="ProfileName"> {attributes.pet.data.attributes.name}</h1>
        </Card.Subtitle>
        <Card.Text className="ProfileText">
            {attributes.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TestimonyCard;
