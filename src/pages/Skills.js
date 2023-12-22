import React from "react";
import { Card } from "antd";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Card title="My Technical Skills" bordered={false} style={{ width: "70%" }}>
        <div className="list">
          <li className="item">
            <h5>Front-End</h5>
            <span>ReactJs, TypeScript, JavaScript, Web2, Web3, Webpack, Babel</span>
          </li>
          <hr />
          <li className="item">
            <h5>Back-End</h5>
            <span>NodeJs, Express, NestJs, Python, JAVA</span>
          </li>
          <hr />
          <li className="item">
            <h5>Databases</h5>
            <span>MySQL, SQL, Oracle, MongoDB, GraphQL, Data stage, Data Mapping, Data Flow</span>
          </li>
          <hr />
          <li className="item">
            <h5>Cloud Services</h5>
            <span>Basic Understanding of AWS</span>
          </li>
          <hr />
          <li className="item">
            <h5>Other Tools & Concepts</h5>
            <span>
              JWT, auth0, Microservices in the back end, JIRA, GitHub, Scrum, Agile, Basic Knowledge
              of Selenium, UI/UX (Adobe, Photoshop)
            </span>
          </li>
        </div>
      </Card>
    </div>
  );
};

export default Skills;
