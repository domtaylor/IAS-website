import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import TestimonialItem from "components/TestimonialItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Testimonials = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader, testimonials } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row className="text-center">
                {testimonials.map((testimonial) => (
                    <Col md={10} key={testimonial.header}>
                        <TestimonialItem {...testimonial} />
                    </Col>
                ))}
            </Row>
        </PageSection>
    );
};

Testimonials.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Testimonials.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Testimonials;
