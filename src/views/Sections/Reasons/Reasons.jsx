import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ReasonItem from "components/ReasonItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Reasons = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { header: rootHeader, reasons } = frontmatter;

    return (
        <PageSection className={className}>
            <Row>
                <SectionHeader header={rootHeader} />
            </Row>
            <Row className="text-center">
                {reasons.map((reason) => (
                    <Col md={6} key={reason.title}>
                        <ReasonItem {...reason} />
                    </Col>
                ))}
            </Row>
        </PageSection>
    );
};

Reasons.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Reasons.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Reasons;
