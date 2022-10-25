import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
  const allprogrammes = useLoaderData();

  return (
    <div>
      <h1> Home: {allprogrammes.length} </h1>
      {allprogrammes.map((programme) => (
        <HomeCard key={programme._id} programme={programme}></HomeCard>
      ))}
    </div>
  );
};

export default Home;
