import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nftmarketplace from "../../Assets/Projects/nftmarketplace.png";


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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftmarketplace}
              isBlog={false}
              title="NFT MarketPlace"
              description="Developed an Ethereum-based NFT Marketplace contract for NFT Bazaar, featuring Buy, Sell, List, and List functions to enhance trading capabilities. Utilized Infura IPFS for robust and efficient storage of NFT metadata. Designed a responsive user interface, optimizing the trading experience and ensuring user-centric navigation."
              ghLink="https://github.com/rahul12st/NFT-Marketplace"
              demoLink="https://nftbazaar.vercel.app/"
            />
          </Col> 
        


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
