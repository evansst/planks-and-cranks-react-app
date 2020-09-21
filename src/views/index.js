import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import IndexHeader from '../components/Headers/IndexHeader';


const Index = (props) => {
 
  return (
    <>
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">What is Planks & Cranks?</h2>
                <h5 className="description">
                  Planks & Cranks is an online marketplace to buy and sell high-quality used outdoor gear
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/IMG_1695.png") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                    I was in a winter skeeball league where I knew no one. I had a blast. I am now in a soccer league and a corn hole league.<br></br>
                      <br></br>
                      <small>-Andrea</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/IMG_2997.png") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/IMG_4920.png") + ")",
                    }}
                  ></div>
                  <h3>
                    So what does "a better way to play rec sports" actually mean?
                  </h3>
                  <p>
                    It means nothing.  Its just a pretty tag-line to entice you in to joining our leagues.
                  </p>
                  <p>
                    This site is much prettier than other rec league sites, right?  It must mean our leagues are better run and more attractive people are in them. The next paragraph is a lie.  We stole it directly from one of our competitors.
                  </p>
                  <p>
                    Our league perks include: discounted food and drink prices at our sponsor bars each week, bar coupons for winning teams each week, separate flip cup leagues for some of our more social sports, end of season free beer parties, Has Beens League group outings and much much more.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        </div>
      </div>
    </>
  );
};

export default Index;