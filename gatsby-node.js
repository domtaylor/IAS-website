const path = require("path");
const getBaseUrl = require("./src/utils/getBaseUrl");
const { defaultLang } = require("./config/site");
/**
 * add fileName to node for markdown files
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileName = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "fileName",
      value: fileName,
    });

    createNodeField({
      node,
      name: "directoryName",
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
};

/**
 * define nullable items
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    `type Frontmatter {
      anchor: String
      jumpToAnchor: String
      jumpToAnchorText: String
      action: String
      subheading: String
      featuredImage: String
      alt: String
      social: Social
      services: [Service]
      testimonials: [Testimonial]
      reasons: [Reason]
      helpers: [Help]
      summaries: [Summary]
      teamMember: [TeamMember]
      locations: [Location]
    }`,
    `type TeamMember {
      social: Social
    }`,
    `type Service {
      iconName: String
      imageFileName: String
      header: String
      content: String
    }`,
    `type Summary {
      header: String
    }`,
    `type Testimonial {
      iconName: String
      content: String
      author: String
      snippet: String
    }`,
    `type Reason {
      imageFileName: String
      title: String
      subtitle: String
      content: String
    }`,
    `type Help {
      strapline: String
      buttonText: String
      jumpToAnchor: String
    }`,
    `type Location {
      header: String
      addressLine1: String
      addressLine2: String
      email: String
      phone: String
    }`,
    `type Social {
      twitter: String
      facebook: String
      linkedin: String
      medium: String
      github: String
    }`
  ];

  createTypes(typeDefs);
};

/**
 * generate i18n top pages
 */
exports.createPages = ({ graphql, actions: { createPage } }) => {
  const topIndex = path.resolve("./src/templates/top-index.jsx");

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              distinct(field: fields___langKey)
            }
          }
        `,
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        data.allMarkdownRemark.distinct.forEach((langKey) => {
          createPage({
            path: getBaseUrl(defaultLang, langKey),
            component: topIndex,
            context: {
              langKey,
              defaultLang
            },
          });
        });

        return null;
      }),
    );
  });
};
