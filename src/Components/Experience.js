import React from "react";
import config from "../config";
import { Row, Col, Container } from "react-bootstrap";

function Experience() {
  return (
    <div className="my-card my-info experience">
      <p className="card-title">Experience</p>
      {/* <Row> */}
      {config?.experiences?.map((item) => (
        <Col key={item?.company} sm={12} md={6}>
          <div key={item?.company} className="company-holder">
            <Row className="my-row items-center">
              <Col key={item?.company} sm={12} md={9}>
                <p className="title text-bigger mb0">{item.position}</p>
              </Col>
              <Col key={item?.company} sm={12} md={3}>
                <p className="title text-small-gray">{`${item.from} - ${item.to}`}</p>
              </Col>
            </Row>
            <p className="title text-bigger3">
              <a target="blank" href={item?.href}>
                {item.company}
              </a>
            </p>
            <p className="title text-medium-gray">{item.description}</p>
            {/* <div className="tech-row">
              {item?.techs?.map((tech) => (
                <div className="tech" key={tech}>
                  <p className="techtitle">{tech}</p>
                </div>
              ))}
            </div> */}
            <div className="line" />
            <div className="dot" />
          </div>
        </Col>
      ))}
      {/* </Row> */}
    </div>
  );
}

export default Experience;
