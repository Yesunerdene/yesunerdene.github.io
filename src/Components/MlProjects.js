import React, { useState } from "react";
import config from "../config";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";

function MlProjects() {
  const [selected, select] = useState();

  const render = () => {
    return (
      <div>
        <p className="title text-bigger mb2">
          <a target="_blank" href={selected?.href}>
            {selected?.title}
          </a>
        </p>
        {!!selected?.embed && (
          <iframe
            src={selected?.embed || ""}
            height="550"
            width="100%"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        )}
      </div>
    );
  };

  return (
    <div className="my-card my-info experience">
      <p className="card-title">Machine Learning projects</p>
      {/* <Row> */}
      {config?.mlprojects?.map((item) => (
        <Col
          key={item?.title}
          sm={12}
          md={6}
          onClick={() => {
            if (!item?.link) {
              select(item);
            }
          }}
        >
          <div key={item?.title} className="company-holder">
            <div className="tech-row mb0">
              <p className="title text-bigger ">
                <a target="_blank" href={item?.href}>
                  {item.title}
                </a>
              </p>
              <p
                onClick={() => {
                  if (!item?.link) {
                    select(item);
                  }
                }}
              >
                ℹ️
              </p>
            </div>
            {/* <p className="title">{item.position}</p> */}
            {/* <p className="title text-small-gray">{`${item.from} - ${item.to}`}</p> */}
            <p className="title text-medium-gray mb2">{item.description}</p>
            <div className="tech-row">
              {item?.techs?.map((tech) => (
                <div className="tech" key={tech}>
                  <p className="techtitle">{tech}</p>
                </div>
              ))}
            </div>
            <div className="line" />
            <div className="dot" />
          </div>
        </Col>
      ))}
      <Modal show={!!selected} onHide={null}>
        <Modal.Header closeButton>
          <Modal.Title>{`${selected?.type} project`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{render(selected)}</Modal.Body>
        <Modal.Footer>
          <Button
            className="custom-btn"
            // variant="primary"
            onClick={() => select(null)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* </Row> */}
    </div>
  );
}

export default MlProjects;
