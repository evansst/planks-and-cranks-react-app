import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Description = (props) => {
  const { listing } = props
  return (
    <Container>
      <Row className="justify-content-sm-center p-4">
        <h3>Details</h3>
      </Row>
      <Row className="justify-content-sm-center">
        <Col sm="9">
          {listing.description}
        </Col>
      </Row>
    </Container>
  );
};

export default Description;