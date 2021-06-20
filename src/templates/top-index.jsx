import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Footer from "views/Footer";
import * as Sections from "views/Sections";
import SEO from "components/SEO";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";
import fileNameToSectionName from "utils/fileNameToSectionName";

import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          brand
          anchor
          clients {
            href
            imageFileName
          }
          content
          contentSecond
          contentLast
          copyright
          header
          email
          featuredImage
          alt
          jumpToAnchor
          jumpToAnchorText
          buttonText
          imageFileName
          menuText
          portfolios {
            content
            extraInfo
            header
            subheader
            imageFileNameDetail
            imageFileName
          }
          privacyHref
          privacyText
          services {
            content
            header
            iconName
            imageFileName
          }
          testimonials {
            iconName
            content
            author
            snippet
          }
          reasons {
            imageFileName
            title
            subtitle
            content
          }
          action
          summaries {
            header
          }
          help {
            strapline
            buttonText
            jumpToAnchor
          }
          locations {
            header
            addressLine1
            addressLine2
            addressLine3
            city
            phone
            email
          }
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          subheader
          subheading
          teamMember {
            header
            imageFileName
            social {
              facebook
              github
              linkedin
              medium
              twitter
            }
            subheader
          }
          telephone
          termsHref
          termsText
          title
          timeline {
            content
            header
            imageContent
            imageFileName
          }
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const IndexPage = ({ data, pageContext: { langKey } }) => {
  const {
    site: {
      siteMetadata: { title, description },
    },
    allMarkdownRemark: { nodes },
  } = data;

  const { topNode, navBarNode, anchors, footerNode, sectionsNodes } = breakDownAllNodes(nodes);

  /*   let langSelectorPart;
    if (langTextMap != null && Object.keys(langTextMap).length > 1) {
      langSelectorPart = (
        <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
      );
    } */

  return (
    <>
      <SEO lang={langKey} title={title || 'Integrated Architectural Solutions'} description={description} />
      <Navbar
        anchors={anchors}
        frontmatter={navBarNode.frontmatter}
      /*  extraItems={langSelectorPart} */
      />
      <Top frontmatter={topNode.frontmatter} />
      {
        // dynamically import sections
        sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
          const sectionComponentName = fileNameToSectionName(fileName);
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent ? (
            <SectionComponent
              key={sectionComponentName}
              className={ind % 2 === 1 ? "bg-light" : null}
              frontmatter={frontmatter}
            />
          ) : null;
        })
      }
      <Footer frontmatter={footerNode.frontmatter} />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
};

IndexPage.defaultProps = {
  pageContext: {
    langKey: "en",
    defaultLang: "en",
    langTextMap: {},
  },
};

export default IndexPage;
