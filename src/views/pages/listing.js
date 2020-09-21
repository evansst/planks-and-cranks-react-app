import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row } from 'reactstrap';
import ListingCarousel from '../../components/Carousel/ListingCarousel';
import IndexNavbar from '../../components/Navbar/IndexNavbar';
import Description from '../../components/Specs/Description';
import Specs from '../../components/Specs/Specs';


const ListingPage = (props) => {
  const { id } = useParams()
  const { listings } = props
  const [listing, setListing] = useState();


  useEffect(() => {
      setListing(listings.find(listing => listing.id === +id))

      document.body.classList.add("index-page")
      document.body.classList.add("sidebar-collapse")
      document.documentElement.classList.remove("nav-open")
      window.scrollTo(0, 0)
      document.body.scrollTop = 0

      return () => {
        document.body.classList.remove("index-page")
        document.body.classList.remove("sidebar-collapse")
      }
    }, [listings, id])
    
    return (
      <Container fluid>
        <IndexNavbar navbarDefault="" />
        <div className="separator separator-primary" style={{height: '80px'}}></div> 
        {
          listing
            ? (
              <Row className='justify-content-center'>
                <ListingCarousel images={listing.images} />
                <Specs listing={listing} />
                <Description listing={listing} />
              </Row>
            )
            : null
        }
      </Container>
    )
};

export default ListingPage;