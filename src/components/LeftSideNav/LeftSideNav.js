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
      <div>
        {programmes.map((programme) => (
          <p key={programme._id}>
            <Link to={`/programmings/${programme._id}`}>
              {programme.title}{" "}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
