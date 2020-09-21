import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Container
} from 'reactstrap';
import { formatMoney } from '../../helpers/helper.js'

const ListingCard = (props) => {
  const { listing } = props;

  return (
    <Link to={`/shop/${listing.id}`}>
      <Card
        style={{height: ''}}
        className="p-2 h-100"
      >
        <CardBody>
          <CardImg
            top width="100%"
            className="align-self-center p-2"
            src={`http://localhost:3000${listing.images[0].url}`}
            alt={`${listing.brand} - ${listing.model}`}
            />
          <Container className="text-right">
            <CardTitle tag="h4">
              {`${listing.brand} - ${listing.model}`}
            </CardTitle>
            <CardText>
              {`${listing.year}, ${listing.size}`}
            </CardText>
            <CardText>
              {formatMoney(listing.price)}
            </CardText>
            <CardSubtitle className="text-muted" tag="del">
              {formatMoney(listing.msrp)}
            </CardSubtitle>
            <CardText>
              <small className="text-muted">Posted on {listing.created_at.split('T')[0]}</small>
            </CardText>
          </Container>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ListingCard;