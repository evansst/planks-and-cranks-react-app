import React from 'react';
import {
  Row,
  Col,
  ListGroupItem,
  ListGroup
} from 'reactstrap';
import { formatMoney } from '../../helpers/helper.js'


const Specs = (props) => {
  const { listing } = props

  const specList = (specs) => {
    const keys = Object.keys(specs);
    const values = Object.values(specs);
    const specList = [];

    for(let i = 0; i < keys.length; i++) {
      specList.push(
        <ListGroupItem className='border-top justify-content-between p-1' key={values[i]}>
          <p className="m-0"><strong>{`${keys[i]}: `}</strong>{`${values[i]}`}</p>
        </ListGroupItem>
      )
    }

    return specList;
  }

  return (
    <Col className="" sm="4">
      <Row className="">
        <h4>{`${listing.brand} - ${listing.model}`}</h4>
      </Row>
      <Row className="">
        <h5><em>{`${formatMoney(listing.price)}`}</em></h5>   
      </Row>
      <Row className="justify-content-start">
        <p>{`${listing.gear_type} ${listing.year}, ${listing.size}`}</p>
      </Row>
      <Row>
        <button listing_id={listing.id} id="add-to-cart" type="button" className="btn btn-secondary btn-block m-4">Add to Cart</button>
      </Row>
      <Row className="justify-content-around">
        <h5>Condition:</h5>
        <p>
          <em>{listing.condition}</em>
        </p>
      </Row>
      <Row className="justify-content-center">
        <h5>Specifications:</h5>
      </Row>
      <Row>
        <ListGroup flush>
          {specList(listing.specs)}
        </ListGroup>
      </Row>

    </Col>
  );
};

export default Specs;