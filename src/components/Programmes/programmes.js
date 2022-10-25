import React from "react";
import { useLoaderData } from "react-router-dom";

const Programmes = () => {
  const programmes = useLoaderData();
  return (
    <div>
        <img src= {programmes.img} alt="" />
      <p>{programmes.title} </p>
      <p> {programmes.desc} </p>
    </div>
  );
};

export default Programmes;
