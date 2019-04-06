/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")

const envFilePath = `.env.${process.env.NODE_ENV}`

if (fs.existsSync(envFilePath)) {
  require("dotenv").config({
    path: envFilePath,
  })
} else {
  console.warn(`Ignoring envfile path '${envFilePath}' as it doesn't exist`)
}

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
        GATSBY_AUTH0_DOMAIN: JSON.stringify(process.env["GATSBY_AUTH0_DOMAIN"]),
        GATSBY_AUTH0_CLIENT_ID: JSON.stringify(
          process.env["GATSBY_AUTH0_CLIENT_ID"]
        ),
      }),
    ],
  })
}
