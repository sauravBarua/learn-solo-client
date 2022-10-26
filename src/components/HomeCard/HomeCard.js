import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomeCard = ({ programme }) => {
  const { _id, img, title } = programme;
  return (
    <div style={{ margin: "5px" }}>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Link to={`/programmings/${_id}`}>
            <Button variant="outline-dark">Details </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCard;
