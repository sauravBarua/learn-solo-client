import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Programmes = () => {
  const programmes = useLoaderData();
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img variant="top" src={programmes.img} />
      <Card.Body>
        <Card.Title> {programmes.title} </Card.Title>
        <Card.Text>{programmes.desc}</Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Programmes;
