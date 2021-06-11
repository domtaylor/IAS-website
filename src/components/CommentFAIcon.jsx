import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import "./CommentFAIcon.scss";

const CommentFAIcon = ({ iconName, ...restProps }) => {
    return (
        <div className="comment-alt">
            <Icon iconName={iconName} inverse size="4x" {...restProps} />
        </div>
    );
};

CommentFAIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
};

export default CommentFAIcon;
