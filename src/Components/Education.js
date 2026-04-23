import React from "react";
import config from "../config";
import { Col, Row } from "react-bootstrap";

function Education() {
  return (
    <div className="my-card my-info">
      <p className="card-title">Education</p>
      {config?.educations?.map((item) => (
        <div key={item?.from} className="mt2 mb1">
          {/* <div className="my-row"> */}
          <Row>
            <Col sm={6} md={6} lg={9}>
              <p className="title text-bigger3 mb0">{item.major}</p>
            </Col>
            <Col sm={6} md={6} lg={3}>
              <p className="title text-small-gray text-end">{`${item.from} - ${item.to}`}</p>
            </Col>
          </Row>
          <p className="title text-bigger3 mb3">
            <a target="blank" href={item?.href}>
              {item.university}
            </a>
          </p>
          {/* <br /> */}
          <a target="_blank" className="title italic mt1 mb1" href={item?.href}>
            {item.department}
          </a>
          {/* <br />
          <br /> */}
          <p className="title mb0 mt1">Thesis: {item.thesis}</p>
          {/* <p className="title mb0">{item.thesisDescription}</p> */}
          <p className="title mb0">GPA: {item.grade}</p>
          {item?.scholarships && (
            <p className="title mb0">{item.scholarships}</p>
          )}
          <div className="tech-row mt01">
            {item?.techs?.map((tech) => (
              <div className="techa" key={tech}>
                <p className="techtitle">{tech}</p>
              </div>
            ))}
          </div>
          <div className="line" />
        </div>
      ))}
    </div>
  );
}

export default Education;
