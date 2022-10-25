import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
            <Link
              style={{
                padding: "7px",
                marginTop: "10px",
                textDecoration: "none",
                color: "black",
                border: "1px solid black",
                borderRadius: "5px",
              }}
              to={`/programmings/${programme._id}`}
            >
              {programme.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
