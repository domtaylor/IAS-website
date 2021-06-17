import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

import "./Help.scss";

const Help = ({ strapline, buttonText, jumpToAnchor }) => {
    const scrollToSection = useSmoothScrollTo(jumpToAnchor);
    const anchorText = "Start with a conversation with us today"
    const heading = "Whether you need us to work with you now, in a few months or anything in between. We're here to help."
    let extraInfoPart;

    if (jumpToAnchor && buttonText) {
        extraInfoPart = (
            <Button size="xl" variant="primary" className={clsx("button-align-right box sb2 text-capitalize:first font-bold")} onClick={scrollToSection}>
                {buttonText}{anchorText}
            </Button>
        );
    }
    return (
        <>
            <h2>{strapline}{heading}</h2>
            {extraInfoPart}
        </>
    );
};

Help.propTypes = {
    strapline: PropTypes.string,
    jumpToAnchor: PropTypes.string,
    buttonText: PropTypes.string
};

Help.defaultProps = {
    strapline: PropTypes.string,
    jumpToAnchor: PropTypes.string,
    buttonText: PropTypes.string
};

export default Help;
