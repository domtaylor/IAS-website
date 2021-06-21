import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "gatsby";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Logo from "content/assets/IASstudio_CMYK_white.png"
import "./Footer.scss";

const Footer = ({ className, frontmatter, href }) => {
  if (!frontmatter) {
    return null;
  }

  const footerText = "Architectural digital project delivery solutions";

  const {
    copyright
  } = frontmatter;

  return (
    <PageSection className={clsx("bg-dark", "footer", "bg-darken", className)} id="Footer">
      <Row className="align-items-left space-around my-0">
        <Col lg={5} className="align-top text-white ml-6 mr-6">
          <Link to="#Studio" onClick={href} className="footer-link inline-block text-white text-lg mx-4">Studio</Link>
          <Link to="#Services" onClick={href} className="footer-link inline-block text-white text-lg mx-4">Services</Link>
          <Link to="#Contact" onClick={href} className="footer-link inline-block text-white text-lg mx-4">Contact</Link>
          <Link to="#Team" onClick={href} className="footer-link inline-block text-white text-lg mx-4">Team</Link>
        </Col>
        <Col lg={4} className="text-lg-right text-white">
          <Link to="/#"><img src={Logo} width="160" height="80" alt="IAS Logo" className="logo--secondary align-items-right ml-6" /></Link>
        </Col>
      </Row>
      <Row className="footer-strapline">
        <Col lg={10} className="text-md-center">
          <h2 className="text-white text-4xl">{footerText}</h2>
        </Col>
      </Row>
      <Row className="copyright">
        <Col lg={11} className="text-md-right text-white my-5">
          {copyright}
        </Col>
      </Row>
    </PageSection>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
  className: PropTypes.string,
  href: PropTypes.string
};

Footer.defaultProps = {
  frontmatter: null,
  className: null,
  href: null
};

export default Footer;
