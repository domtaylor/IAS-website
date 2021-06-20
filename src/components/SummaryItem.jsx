import React from "react";
import PropTypes from "prop-types";

import "./SummaryItem.scss";

const SummaryItem = ({ header, action }) => {

    return (
        <>
            <div className="summary-section">
                <div className="summary-list">
                    <p className="featured-summaries md:auto-cols-min">{header}</p>
                    <p className="cta">{action}</p>
                </div>
            </div>
        </>
    );
};

SummaryItem.propTypes = {
    header: PropTypes.string,
    action: PropTypes.string
};

SummaryItem.defaultProps = {
    header: PropTypes.string,
    action: PropTypes.string
};

export default SummaryItem;
