import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Button } from "react-bootstrap";
import PageSection from "components/PageSection";
import LocationItem from "components/LocationItem";

const Contact = ({ className, frontmatter }) => {
  const anchorText = "Start with a conversation with us today"

  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, locations } = frontmatter;

  return (
    <PageSection className={clsx("bg-light", className)} id={anchor}>
      <Row className="bg-gray-300 justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <p className="text-muted mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        {locations.map((location) => (
          <Col md={4} key={location.header}>
            <LocationItem {...location} />
          </Col>
        ))}
        {/*  <Col lg={4} className="ml-auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col> */}
        <Button size="xl" variant="primary" className={clsx("button-align-left box sb2 text-capitalize:first font-bold")}>{anchorText}</Button>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
