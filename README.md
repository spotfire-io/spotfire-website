# Spotfire Website

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Spotfire Website
</h1>

This is the application code for the public-facing Spotfire.io website. It uses Gatsby, React, TypeScript and Apollo.

## Requirements
`spotfire-api` running locally. Refer to the [API's repo](https://github.com/spotfire-io/spotfire-api) for instructions.

## Setup
1. `asdf install` will install node and the tool for decrypting the required credentials.
2. `make dotenv-decrypt`
3. `yarn install`
	If you get this error `error Incorrect integrity when fetching from the cache` do a `yarn cache clean` 
	then a `yarn install` again. 
4. `yarn generate`
5. `export NODE_ENV=development`
6. `yarn start` to start the API in your local machine or  `yarn dev` to get real time compilation after every change to the source.


## Deployment

The website gets deployed to `Netlify` after every push to `master`.  
