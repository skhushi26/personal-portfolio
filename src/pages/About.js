import React from "react";
import KhushaliShahImg from "../assets/Khushali-Shah.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-img">
        <img src={KhushaliShahImg} alt="Khushali Shah" />
      </div>
      <div className="about-me-details">
        <p>
          Greetings! I embarked on my journey in the world of technology during my undergraduate
          studies in Computer Science & Engineering, which culminated in 2021. Through hands-on
          experience in languages such as HTML5, CSS, JavaScript, Bootstrap, and Python, I honed my
          skills and crafted websites for diverse course projects.
        </p>
        <p>
          Following graduation, I stepped into the role of a Junior Node.js Developer at
          Technostacks Infotech Pvt. Ltd. Here, I played an active role in the development team,
          contributing to ongoing projects. My responsibilities included designing and implementing
          RESTful APIs, facilitating seamless communication between client-side and server-side
          applications. I also had the opportunity to delve into front-end development, engage in
          team-building activities, and gain a taste of cloud technologies, particularly AWS.
        </p>
        <p>
          In pursuit of expanding my horizons, I decided to pursue a Post Graduation Diploma in Web
          Development at Conestoga College in Canada, commencing in the fall of 2022. This program
          refined my proficiency in web development, equipping me with advanced skills in
          JavaScript, Node.js, React.js, PHP, MongoDB, MySQL, and UI/UX design. Alongside my
          studies, I immersed myself in course projects that further fortified my existing
          capabilities and introduced me to new technologies.
        </p>
        <p>
          Beyond my professional endeavors, I love to dance, enjoy watching movies, and I'm
          passionate about exploring new places. One of my favorite experiences is witnessing the
          breathtaking Northern Lights, a true marvel of nature.
        </p>
      </div>
    </div>
  );
};

export default About;
