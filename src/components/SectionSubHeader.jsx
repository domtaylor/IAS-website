import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import "./SectionSubHeader.scss";

const SectionSubHeader = ({ subheading, className, ...restProps }) => {
    const subheaderPart = subheading ? (
        <h3 className="section-subheading--new text-white">{subheading}</h3>
    ) : null;

    return (
        <Col lg={12} className={clsx("section-header--new", "text-center", className)} {...restProps}>
            {subheaderPart}
        </Col>
    );
};

SectionSubHeader.propTypes = {
    subheading: PropTypes.string,
    className: PropTypes.string,
};

SectionSubHeader.defaultProps = {
    subheading: "",
    className: null,
};

export default SectionSubHeader;
