import React from "react";
import { Container } from "reactstrap";

function IndexHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header" filter-color="primary">
        <div
          className="page-header-image"
          style={{ backgroundImage: "url(" + require("assets/img/IMG_2997.jpeg") + ")" }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="logo"
              src={require("../../assets/logo/Planks & Cranks-logo-white.png")}
            ></img>
            <h3>A better way to buy and sell quality outdoor gear.</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
