import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomeCard = ({ programme }) => {
  const { _id, img, title } = programme;
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Link to={`/programmings/${_id}`}>
          <Button variant="outline-dark">Details </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
