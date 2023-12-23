import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2022 - Dec 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Conestoga College</h3>
          <h4 className="vertical-timeline-element-subtitle">Post Graduate Diploma</h4>
          <p> Web Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - Feb 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Jr. NodeJS Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Technostacks Infotech Pvt. Ltd.</h4>
          <p>
            I specialize in MERN stack development, crafting dynamic web applications with precision
            and creativity.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2017 - May 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Indus University</h3>

          <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>

          <p> Computer Science & Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
