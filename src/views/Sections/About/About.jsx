import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
/* import TimelineItem from "components/TimelineItem"; */
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Image from "components/Image";
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
