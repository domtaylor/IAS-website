import React from "react";
import PropTypes from "prop-types";

import CommentFAIcon from "components/CommentFAIcon";

import "./TestimonialItem.scss";

const TestimonialItem = ({ content, author, snippet, iconName }) => {
    let iconPart;
    if (iconName) {
        iconPart = <CommentFAIcon iconName={iconName} />;
    }
    /*  let imagePart;
     if (imageFileName) {
         imagePart = <Image className="service-item-image" fileName={imageFileName} />;
     } */

    return (
        <>
            <div className="testimonial-section">
                <div className="divide-y-2 divide-solid">
                    <p className="testimonial1 text-gray-700 align-left">{content}</p>
                    <p className="author">{author}</p>
                </div>
                <div className="comment-alt">
                    <p className="snippet1"><span className="blockquote">{snippet}</span></p>
                </div>
            </div>
        </>
    );
};

TestimonialItem.propTypes = {
    content: PropTypes.string,
    author: PropTypes.string,
    snippet: PropTypes.string,
    iconName: PropTypes.string,
};

TestimonialItem.defaultProps = {
    iconName: null,
    content: PropTypes.string,
    author: PropTypes.string,
    snippet: PropTypes.string,
};

export default TestimonialItem;
