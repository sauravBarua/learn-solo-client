import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import "./Home.css";

const Home = () => {
  const allprogrammes = useLoaderData();

  return (
    <div className="home">
      {allprogrammes.map((programme) => (
        <HomeCard key={programme._id} programme={programme}></HomeCard>
      ))}
    </div>
  );
};

export default Home;
