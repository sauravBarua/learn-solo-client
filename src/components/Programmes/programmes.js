import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const Programmes = () => {
  const programmes = useLoaderData();
  const ref = React.createRef();

  return (
    <Card>
      <Card.Header>
        <Pdf
          variant="light"
          targetRef={ref}
          filename={`${programmes.title}.pdf`}
        >
          {({ toPdf }) => (
            <Button variant="outline-dark" onClick={toPdf}>
              Download pdf
            </Button>
          )}
        </Pdf>
      </Card.Header>
      <div ref={ref}>
        <Card.Img
          variant="top"
          style={{ width: "5rem" }}
          src={programmes.img}
        />
        <Card.Body>
          <Card.Title>{programmes.title}</Card.Title>
          <Card.Text>{programmes.desc}</Card.Text>
        </Card.Body>
      </div>
      <Link to={"/checkout"}>
        <Button variant="outline-dark">Get Premium Access</Button>
      </Link>
    </Card>
  );
};

export default Programmes;
