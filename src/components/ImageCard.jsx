import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";

import "./ImageCard.scss";
import "components/Arrow.scss";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, extraInfo }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image bg-dark" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-heading text-capitalize:first text-left">{header}</div>
            <div className="intro-lead-in text-left">{subheader}</div>
            {extraInfo}
            <Link to="/#Services"><div className="intro-arrow align-center mt-3">&nbsp;</div></Link>
            {/*  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8" fill="none" viewBox="0 0 24 24" stroke="#E9D038">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg> */}
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
