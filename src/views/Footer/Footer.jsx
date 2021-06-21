import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "gatsby";

import { Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";
import NavItem from "components/NavItem";
import PageSection from "components/PageSection";
import Logo from "content/assets/IASstudio_CMYK_white.png"

const Footer = ({ className, frontmatter, href }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    social: { facebook, github, linkedin, medium, twitter }
  } = frontmatter;

  return (
    <PageSection className={clsx("bg-dark", "footer", "py-12", className)} id="Footer">
      <Row className="align-items-center text-center">
        <Col lg={12} className="my-0 my-lg-0 text-white">
          <NavItem to="/#Services" onClick={href} className="inline-block text-white mx-4">Services</NavItem>
          <NavItem to="/#Studio" onClick={href} className="inline-block text-white mx-4">Studio</NavItem>
          <NavItem to="/#Contact" onClick={href} className="inline-block text-white mx-4">Contact</NavItem>
          <NavItem to="/#Team" onClick={href} className="inline-block text-white mx-4">Team</NavItem>
          <Link to="/#"><img src={Logo} width="80" height="40" alt="IAS Logo" className="inline-block logo--secondary align-items-right ml-6" /></Link>
        </Col>
        <Col lg={3} className="my-3 my-lg-0">
          {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
          {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
          {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
          {github ? <SocialIcons.Github userName={github} /> : null}
          {medium ? <SocialIcons.Medium userName={medium} /> : null}
        </Col>
        <Col lg={4} className="text-lg-right text-white">
          {copyright}
        </Col>
        {/*    <Col lg={4} className="text-lg-right">
          <a className="mr-3" href={privacyHref}>
            {privacyText}
          </a>
          <a href={termsHref}>{termsText}</a>
        </Col> */}
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
