# Simplify Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/e96ca8e3-a629-4a27-8379-d63a4d8c4f14/deploy-status)](https://app.netlify.com/sites/simplifylgp/deploys)

Website for LGP Company Simplify.

## Installation

### Prerequisites

- [`Node JS`](https://nodejs.org)

## Usage

### Development

```bash
npm install # use node version 12.16.1
npm start
```

If there's no new packages to install, you can simply run:

```bash
npm start
```

This will create a development server with hot reloading which will listen on `http://localhost:8000`.

It also makes available GraphiQL, an in-browser IDE, to explore the site's data and schema on `http://localhost:8000/___graphql`.

## Project Details

This project uses [`Gatsby.js`](https://gatsbyjs.org/). The visual framework used is [`React Bootstrap`](https://react-bootstrap.github.io/).

### Project Structure

```
    .
    ├── src
        ├── components :: General React Components
            ├── home :: Components for the home page
            ├── projects :: Components for projects pages
            ├── team :: Components for the team page
            └── contact :: Components for the contact page
        ├── data :: Markdown and JSON data to be displayed on the site
        ├── images :: Image assets
        ├── pages :: Page components
        ├── styles :: Global styles
        └── templates :: Templates for pages using markdown data
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md
```
