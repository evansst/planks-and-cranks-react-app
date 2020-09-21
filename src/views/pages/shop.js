import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import ListingCard from '../../components/Cards/ListingCard';
import IndexNavbar from '../../components/Navbar/IndexNavbar';

const ShopPage = (props) => {
  const { listings } = props

  return (
    <>
      <IndexNavbar navbarDefault=""/>
      <div className="separator separator-primary" style={{height: '80px'}}></div>
      <Container fluid={true} className="themed-container">
        <Row md="3" >
          {listings.map((listing) => (
            <Col key={listing.id} className="p-3" xl="3" lg="4" md="5" sm="6" xs="12">
              <ListingCard listing={listing} />
            </Col>  
          ))}
        </Row >
      </Container>
    </>
  );
};

export default ShopPage;