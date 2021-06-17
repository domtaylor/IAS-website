import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Help from "components/Help";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";


const Helpers = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { helpers: help, strapline } = frontmatter;

    return (
        <PageSection className={className}>
            <Row>
                <SectionHeader header={strapline} />
            </Row>
            <Row className="text-center">
                <Col md={12} key={strapline} classname="button-align-right">
                    <Help {...help} />
                </Col>
            </Row>
        </PageSection>
    );
};

Helpers.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Helpers.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Helpers;
