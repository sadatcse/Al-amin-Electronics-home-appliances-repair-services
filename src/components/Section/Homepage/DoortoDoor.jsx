import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

const DoortoDoor = ({ image }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 ">
      <Container className="py-8">
        <Row noGutters={["lg", "md"]}>
          <Col lg={6} className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Door to Door Service</h2>
            <p className="text-lg mb-6">Experience the convenience of our door-to-door delivery service. Our professional couriers ensure your package reaches its destination safely and on time.</p>
            <button className="border hover:border-indigo-300 px-6 py-2 rounded hover:bg-indigo-600 hover:text-white font-bold uppercase tracking-wide transition duration-300 ms">Learn More</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoortoDoor;
