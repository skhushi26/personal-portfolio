import React from "react";
import "../styles/Home.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2 className="mb-5 name-heading"> Hi, My Name is Khushali Shah</h2>
        <div className="prompt">
          <p className="mb-5">
            Welcome to my personal website! I am a passionate full-stack software engineer with a
            knack for crafting robust, efficient, and user-friendly applications.
          </p>
          <Link to="/about">
            <button className="btn btn-lg p-3 about-btn">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
