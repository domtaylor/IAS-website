import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";

import SummaryItem from "components/SummaryItem";
import SectionHeader from "components/SectionHeader";
import SectionSubHeader from "components/SectionSubHeader";
import PageSection from "components/PageSection";
import "./Summaries.scss";

const Summaries = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { header: rootHeader, subheader: rootSubHeader, subheading: rootSubHeading, action: cta, summaries } = frontmatter;

    return (
        <PageSection className={clsx("bg-dark", className)} id="ServicesSummary">
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} className="text-white text-center" />
                <SectionSubHeader subheading={rootSubHeading} className="text-white text-center" />
            </Row>
            <Row className="text-center">
                {summaries.map((summary) => (
                    <Col md={4} key={summary.header}>
                        <SummaryItem {...summary} />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col md={12} key="cta" className="text-center">
                    <div className="cta">
                        <span className="cta-arrow">&nbsp;</span>{cta}<span className="cta-arrow--second">&nbsp;</span></div>
                </Col>
            </Row>
        </PageSection >
    );
};

Summaries.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Summaries.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Summaries;
