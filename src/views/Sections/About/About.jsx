import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Row, Col } from "react-bootstrap";
/* import TimelineItem from "components/TimelineItem"; */
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Image from "components/Image";
import Logo from "content/assets/IASstudio_CMYK_white.png"
/* import nl2br from "utils/nl2br"; */

import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, featuredImage, alt, content: body, contentSecond: secondParagraph, contentLast: lastParagraph, action: cta } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <Col lg={12}>
          <Image fileName={featuredImage} alt={alt} className="featured-image--about" />
          {/* <ul className="timeline">
            {timeline.map(({ content, header, imageContent, imageFileName, subheader }, ind) => (
              <TimelineItem
                invert={ind % 2 === 1}
                key={header}
                imageFileName={imageFileName}
                header={header}
                subheader={subheader}
                content={content}
                imageContent={
                  imageContent ? (
                    <div dangerouslySetInnerHTML={{ __html: `<h4>${nl2br(imageContent)}</h4>` }} />
                  ) : null
                }
              />
            ))}
          </ul> */}
        </Col>
      </Row>
      <Row>
        <div className="about-description">
          <p className="about-content">{body}</p>
          <p className="about-content">{secondParagraph}</p>
          <p className="about-content">{lastParagraph}</p>
        </div>
      </Row>
      <Row>
        <Col md={12} key="cta" className="text-center">
          <div className="cta-about">
            <span className="cta-arrow">&nbsp;</span>{cta}<span className="cta-arrow--second">&nbsp;</span></div>
        </Col>
      </Row>
      <Row>
        <Row>
          <div className="navbar-secondary--about">
            <ul className="navbar-items--secondary--about text-capitalize:first align-left space-between pt-4">
              <Link to="/#Services">Services</Link>
              <Link to="/#Studio/">Studio</Link>
              <Link to="/#Contact/">Contact</Link>
              <Link to="/#Team/">Team</Link>
              <Link to="/#"><img src={Logo} width="80" height="40" alt="IAS Logo" className="logo--secondary align-items-right ml-6" /></Link>
            </ul>
          </div>
        </Row>
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
