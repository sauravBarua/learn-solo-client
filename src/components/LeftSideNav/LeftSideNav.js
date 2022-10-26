import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [programmes, setProgrammes] = useState([]);

  useEffect(() => {
    fetch(
      "https://lerning-platform-server-sauravbarua.vercel.app/programmings/"
    )
      .then((res) => res.json())
      .then((data) => setProgrammes(data));
  }, []);
  return (
    <div>
      <p>Courses</p>
      <div>
        {programmes.map((programme) => (
          <p key={programme._id}>
            <Link to={`/programmings/${programme._id}`}>
              <Button variant="outline-dark">{programme.title}</Button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
