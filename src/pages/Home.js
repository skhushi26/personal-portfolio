import React from "react";
import "../styles/Home.css";
import { Button } from "antd";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Khushali Shah</h2>
        <div className="prompt">
          <p>
            Welcome to my personal website! I am a passionate full-stack software engineer with a
            knack for crafting robust, efficient, and user-friendly applications.
          </p>
          <a href="/about">
            <Button>Learn more about me</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
