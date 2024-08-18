import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import VoteList from "../../Assets/Projects/VoteList.png";
import Invoicer from "../../Assets/Projects/Invoicer.png";
import digidrive from "../../Assets/Projects/digidrive.png";
import AnonCounsel from "../../Assets/Projects/AnonCounsel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={VoteList}
              isBlog={false}
              title="VoteList"
              description="Developed a decentralized voting application on Ethereum, featuring candidate and voter registration and IPFS for
secure image storage "
              ghLink="https://github.com/rahul12st/VoteList"
              demoLink="https://votelist.vercel.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digidrive}
              isBlog={false}
              title="Digi drive"
              description=" D-app deployed ontest net where users can save, view, limit access to images etc to others on decentralized blockchain safely. LeveragedPinata IPFS for storing NFTs metadata."



              ghLink="https://github.com/rahul12st/digi-drive-updated"
              demoLink="https://digi-drive.vercel.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={AnonCounsel}
              isBlog={false}
              title="AnonCounsel"
              description="Developed a mental healthcare advisor application using Next.js, React.js, and OpenAI GPT-3.0, offering
personalized advice with real-time interaction and a user-friendly interface.
"
              ghLink="https://github.com/rahul12st/AnonCounsel"
              demoLink="https://anoncounsel.vercel.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Invoicer}
              isBlog={false}
              title="Invoicer"
              description="Developed an invoice management system with features for data capture, item management, and real-time total
calculation."
              ghLink="https://github.com/rahul12st/Invoicer"
              demoLink="https://yourinvoicer.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
