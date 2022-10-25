import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
  const allprogrammes = useLoaderData();

  return (
    <div>
      {allprogrammes.map((programme) => (
        <HomeCard key={programme._id} programme={programme}></HomeCard>
      ))}
    </div>
  );
};

export default Home;
