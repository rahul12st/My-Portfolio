import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nftmarketplace from "../../Assets/Projects/nftmarketplace.png";
import digidrive from "../../Assets/Projects/digidrive.png";

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
              imgPath={nftmarketplace}
              isBlog={false}
              title="NFT MarketPlace"
              description="Developed an Ethereum-based NFT Marketplace contract for NFT Bazaar, featuring Buy, Sell, List, and List functions to enhance trading capabilities. Utilized Infura IPFS for robust and efficient storage of NFT metadata. "
              ghLink="https://github.com/rahul12st/NFT-Marketplace"
              demoLink="https://nftbazaar.vercel.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digidrive}
              isBlog={false}
              title="Digi drive"
              description=" D-app deployed ontest net where users can save, view, limit access to images etc to others on decentralized blockchain safely. LeveragedPinata IPFS for storing NFTs metadata."



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
