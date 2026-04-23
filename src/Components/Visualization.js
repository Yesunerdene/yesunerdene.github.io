import React, { useState } from "react";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Modal,
  Button,
  Badge,
} from "react-bootstrap";

function Visualization({ theme }) {
  const cardClass =
    theme === "dark"
      ? "bg-dark text-light border-secondary"
      : "bg-white text-dark border-light";
  const badgeVariant = theme === "dark" ? "secondary" : "primary";

  const visualizationConfig = {
    jobTimeline: [
      {
        title: "Frontend Developer",
        company: "YESU Company",
        period: "Jan 2023 - Dec 2023",
        summary:
          "Built customer-facing dashboards, KPI visualizations, and product pages for internal stakeholders.",
        tools: ["React", "Redux", "Bootstrap", "Sass", "Git"],
      },
      {
        title: "Machine Learning Engineer",
        company: "YESU Company",
        period: "Jan 2024 - Present",
        summary:
          "Designed ML pipelines for predictive analytics, deployed model monitoring dashboards, and collaborated with product teams.",
        tools: ["Python", "TensorFlow", "FastAPI", "Docker", "PostgreSQL"],
      },
    ],
    companyProjects: [
      {
        name: "Sales Performance Dashboard",
        role: "Lead UI/UX Developer",
        period: "Q1 2024",
        description:
          "Interactive sales analytics platform showing revenue, forecast, and team performance.",
        tools: ["React", "Recharts", "Axios", "Bootstrap"],
      },
      {
        name: "Employee Training Tracker",
        role: "Full Stack Engineer",
        period: "Q3 2023",
        description:
          "Training progress tracker with user roles, progress charts, and notifications.",
        tools: ["React", "Node.js", "Express", "MongoDB"],
      },
      {
        name: "Customer Feedback Portal",
        role: "Frontend Specialist",
        period: "Q4 2023",
        description:
          "Feedback collection and reporting interface with sentiment analysis and visual summaries.",
        tools: ["React", "Chart.js", "REST API"],
      },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Bootstrap", category: "Frontend" },
      { name: "Redux", category: "State" },
      { name: "Python", category: "Backend" },
      { name: "TensorFlow", category: "ML" },
      { name: "Docker", category: "DevOps" },
      { name: "PostgreSQL", category: "Database" },
      { name: "FastAPI", category: "Backend" },
    ],
  };

  return (
    <div className="visualization-section py-4">
      <Row className="mb-4">
        <Col>
          <h2
            className={`mb-3 ${theme === "dark" ? "text-light" : "text-dark"}`}
          >
            Visualization
          </h2>
          <p className={theme === "dark" ? "text-muted" : "text-secondary"}>
            Timeline of job experiments, company projects, and tools/frameworks
            used.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col lg={4}>
          <Card className={`${cardClass} h-100`}>
            <Card.Body>
              <Card.Title>Job Timeline</Card.Title>
              <ListGroup variant="flush">
                {visualizationConfig?.jobTimeline.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    className={
                      theme === "dark"
                        ? "bg-dark text-light border-secondary"
                        : "bg-white text-dark border-light"
                    }
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>{item.title}</strong>
                        <div className="small">{item.company}</div>
                      </div>
                      <Badge bg={badgeVariant}>{item.period}</Badge>
                    </div>
                    <div className="mt-2 small">{item.summary}</div>
                    <div className="mt-3">
                      {item.tools.map((tool) => (
                        <Badge
                          key={tool}
                          bg={badgeVariant}
                          className="me-1 mb-1"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className={`${cardClass} h-100`}>
            <Card.Body>
              <Card.Title>Company Projects</Card.Title>
              {visualizationConfig.companyProjects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h6>{project.name}</h6>
                  <div className="small text-muted">
                    {project.role} · {project.period}
                  </div>
                  <p className="mb-2">{project.description}</p>
                  <div>
                    {project.tools.map((tool) => (
                      <Badge key={tool} bg={badgeVariant} className="me-1 mb-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className={`${cardClass} h-100`}>
            <Card.Body>
              <Card.Title>Tech / Frameworks</Card.Title>
              <Row className="g-2">
                {visualizationConfig.techStack.map((item) => (
                  <Col xs={6} key={item.name}>
                    <Card
                      className={`${
                        theme === "dark"
                          ? "bg-secondary text-light"
                          : "bg-light text-dark"
                      } border-0`}
                    >
                      <Card.Body className="p-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>{item.name}</span>
                          <Badge bg={badgeVariant} pill>
                            {item.category}
                          </Badge>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Visualization;
