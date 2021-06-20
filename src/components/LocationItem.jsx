import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import "./LocationItem.scss";

const LocationItem = ({ header, addressLine1, addressLine2, addressLine3, city, phone, email, className, ...restProps }) => {
    const locationHeading = header ? (
        <h3 className="location-subheading text-black">{header}</h3>
    ) : null;

    const line1 = addressLine1 ? (
        <p className="text-black text-center">{addressLine1}</p>
    ) : null;

    const line2 = addressLine2 ? (
        <p className="text-black text-center">{addressLine2}</p>
    ) : null;

    const line3 = addressLine3 ? (
        <p className="text-black text-center">{addressLine3}</p>
    ) : null;

    const cityAddress = city ? (
        <p className="text-black text-center py-0">{city}</p>
    ) : null;

    const emailAddress = email ? (
        <p className="text-black text-center">{email}</p>
    ) : null;

    const phoneAddress = phone ? (
        <p className="text-black text-center">{phone}</p>
    ) : null;

    return (
        <Col md={4} className={clsx("address-location", "text-center", className)} {...restProps}>
            <p>{locationHeading}</p>
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
            <p>{cityAddress}</p>
            <p>{emailAddress}</p>
            <p>{phoneAddress}</p>
        </Col>
    );
};

LocationItem.propTypes = {
    header: PropTypes.string,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    addressLine3: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    className: PropTypes.string,
};

LocationItem.defaultProps = {
    header: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    phone: "",
    email: "",
    className: null,
};

export default LocationItem;
