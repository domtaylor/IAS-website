import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText, iconName } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;

  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className={clsx("button-align-left box sb2 text-capitalize:first")} onClick={scrollToSection}>
        {jumpToAnchorText}
      </Button>
    );
  }
  /* 
    let arrowDisplay;
  
    if (!jumpToAnchor && !jumpToAnchorText) {
      arrowDisplay = (
        <Arrow>{' '}</Arrow>
      );
    } */

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
      iconName={iconName}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

/* export const query = graphql`
  query {
    arrow: file(relativePath: { eq: "content/assets/icons/arrow.svg" }) {
      childImageSharp {
        fluid(maxWidth: 22, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
` */
export default Top;
