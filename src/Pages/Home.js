import React from "react";
import Footer from "../Components/Footer";

import { Row, Col } from "react-bootstrap";
import {
  Others,
  MyInfo,
  Contact,
  Project,
  Education,
  Experience,
  Techlonogy,
  Certificate,
} from "../Components";
import MlProjects from "../Components/MlProjects";
import Visualization from "../Components/Visualization";

function Home({ theme, changeTheme }) {
  return (
    <div className="my-containera">
      <div>
        <Col sm={12}>
          <MyInfo theme={theme} changeTheme={changeTheme} />
        </Col>
      </div>
      <div className="my-container">
        <Row>
          {/* <Col sm={12}>
          <MyInfo theme={theme} changeTheme={changeTheme} />
        </Col> */}
          <Col sm={12}>
            <Row>
              <Col sm={12} md={12} lg={3}>
                <Contact theme={theme} />
              </Col>
              <Col sm={12} md={12} lg={6}>
                <Education theme={theme} />
              </Col>
              <Col sm={12} md={12} lg={3}>
                <Techlonogy theme={theme} />
              </Col>
              {/* <Col sm={12} md={12} lg={3}>
                <Certificate theme={theme} />
              </Col> */}
            </Row>
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <Visualization theme={theme} />
          </Col> */}
          <Col sm={12} md={12} lg={12}>
            <Project theme={theme} />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Experience theme={theme} />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <MlProjects theme={theme} />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Certificate theme={theme} />
          </Col>
          {/* <Col sm={12} md={12} lg={12}>
            <Others theme={theme} />
          </Col> */}
        </Row>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
