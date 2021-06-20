import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import Logo from "content/assets/IASstudio_CMYK_white.png"

import "./ImageCard.scss";
import "components/Arrow.scss";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, extraInfo }) => {
  return (
    <Card className={clsx("image-card text-white text-center", className)}>
      <Image className="image bg-blend-darken" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding transparent-box">
        <Container>
          <div className="intro-text z-50">
            <div className="intro-heading text-capitalize:first text-left z-50">{header}</div>
            <div className="intro-lead-in text-left z-50">{subheader}</div>
            {extraInfo}
            <div className="intro-arrow align-center mt-3"><Link to="/#Services">&nbsp;</Link></div>
            {/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8" fill="none" viewBox="0 0 24 24" stroke="#E9D038">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg> */}
          </div>
          <div className="navbar-secondary">
            <ul className="navbar-items--secondary text-capitalize:first align-left space-between pt-4">
              <Link to="/#Services">Services</Link>
              <Link to="/#Studio/">Studio</Link>
              <Link to="/#Contact/">Contact</Link>
              <Link to="/#Team/">Team</Link>
              <Link to="/#"><img src={Logo} width="80" height="40" alt="IAS Logo" className="logo--secondary align-items-right ml-6" /></Link>
            </ul>
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
