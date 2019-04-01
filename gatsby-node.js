/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig,
}) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        AUTH0_DOMAIN: JSON.stringify(process.env["AUTH0_DOMAIN"]),
        AUTH0_CLIENT_ID: JSON.stringify(process.env["AUTH0_CLIENT_ID"]),
      }),
    ],
  })
}
