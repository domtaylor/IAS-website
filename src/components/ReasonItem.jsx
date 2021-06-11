import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import "./ReasonItem.scss";

const ReasonItem = ({ imageFileName, title, subtitle, content }) => {
    let imagePart;
    if (imageFileName) {
        imagePart = <Image className="reason-item-image" fileName={imageFileName} />;
    }
    return (
        <>
            <div className="reason-section">
                {imagePart}
                <p className="reason-title text-gray-700 align-left">{title}</p>
                <p className="reason-subtitle text-gray-700 align-left">{subtitle}</p>
                <p className="small-divider">&nbsp;</p>
                <p className="reason-description">{content}</p>
            </div>
        </>
    );
};

ReasonItem.propTypes = {
    imageFileName: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
};

ReasonItem.defaultProps = {
    imageFileName: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string
};

export default ReasonItem;
