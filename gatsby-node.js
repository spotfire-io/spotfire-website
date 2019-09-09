/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs");

const envFilePath = `.env.${process.env.NODE_ENV}`;

if (fs.existsSync(envFilePath)) {
  require("dotenv").config({
    path: envFilePath,
  });
} else {
  console.warn(`Ignoring envfile path '${envFilePath}' as it doesn't exist`);
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  switch (page.path) {
    // Make the front page match everything client side.
    // Normally your paths should be a bit more judicious.
    case `/`: {
      page.matchPath = `/*`;
    }
    case `/callback/`: {
      createPage(page);
      break;
    }
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig,
}) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_AUTH0_DOMAIN: JSON.stringify(process.env["GATSBY_AUTH0_DOMAIN"]),
        GATSBY_AUTH0_CLIENT_ID: JSON.stringify(
          process.env["GATSBY_AUTH0_CLIENT_ID"]
        ),
        GATSBY_AUTH0_REDIRECT_URI: JSON.stringify(
          process.env["GATSBY_AUTH0_REDIRECT_URI"]
        ),
        GATSBY_GRAPHQL_API_ENDPOINT: JSON.stringify(
          process.env["GATSBY_GRAPHQL_API_ENDPOINT"]
        ),
      }),
    ],
  });
};
