import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Programmes = () => {
  const programmes = useLoaderData();
  return (
    <Card>
      <Card.Header>
        <span>{programmes.title}</span>
        <span className="">
          {" "}
          <Button variant="outline-dark">Download pdf</Button>
        </span>
      </Card.Header>
      <Card.Img variant="top" style={{ width: "5rem" }} src={programmes.img} />
      <Card.Body>
        <Card.Text>{programmes.desc}</Card.Text>
        <Link to={"/checkout"}>
          <Button variant="outline-dark">Get Premium Access</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Programmes;
