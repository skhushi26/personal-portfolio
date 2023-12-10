import React from "react";
import { Card } from "antd";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Card title="My Technical Skills" bordered={false} style={{ width: "60%" }}>
        <div className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML5, CSS3, BootStrap, MaterialUI, Tailwind CSS, Ant Design</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, NestJS, ExpressJS, GraphQL, MySQL, MongoDB, Java, .NET Core, PHP, Python,
              Basic Knowledge of AWS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript</span>
          </li>
        </div>
      </Card>
    </div>
  );
};

export default Skills;
