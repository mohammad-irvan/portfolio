import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Irvan.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Developer Intern [Flash Tech]"
              date="July 2021 - September 2021"
              content={[
                "Worked on the development of an E-commerce website",
                "Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.",
                " Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Back-End APIs to display data using the Custom Components, library Components, and Redux.",
                "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="AMIK TRIDHARMA PALU [Diploma Degree] "
              date="2017 - 2020"
              content={[
                " Informatics Engginer"
              ]}
            />
             <Resumecontent
              title="SMK N 1 BANAWA SELATAN [Vocational School]"
              date="2014 - 2017"
              content={[
                "Multimedia "
              ]}
            />
            
          

            

            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
