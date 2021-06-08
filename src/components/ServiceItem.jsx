import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import "./ServiceItem.scss";

const ServiceItem = ({ imageFileName, header, content }) => {
  /*   let iconPart;
    if (iconName) {
      iconPart = <CircleFAButton iconName={iconName} />;
    } */

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} />;
  }

  return (
    <>
      {imagePart}
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-black-300">{content}</p>
    </>
  );
};

ServiceItem.propTypes = {
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
};

ServiceItem.defaultProps = {
  imageFileName: null,
  header: "",
  content: "",
};

export default ServiceItem;
