# Summit Ridge Outfitters

Summit Ridge Outfitters is a responsive outdoor outfitter website built with HTML, SCSS, and vanilla JavaScript ES modules. The site uses a single HTML entry point and hash-based navigation to display its pages.

## Pages

The current application includes these views:

- Home (`#home`)
- Shop (`#shop`)
- Guides (`#guides`)
- About (`#about`)
- Contact (`#contact`)
- Login (`#login`)

Entering a supported hash directly or refreshing the browser loads that view. An empty or unsupported hash opens the Home view.

## Tech stack

- HTML
- SCSS, compiled to CSS with Dart Sass
- Vanilla JavaScript using ES modules

## Getting started

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Install the project dependencies:

   ```sh
   npm install
   ```

3. Start the SCSS watcher in a terminal:

   ```sh
   npm run compile:sass
   ```

4. Serve the project root with a local web server and open `index.html` through that server. ES modules should be loaded over HTTP rather than directly from a `file://` URL. For example, use the VS Code Live Server extension.

The Sass watcher recompiles `scss/styles.scss` into `css/styles.css` when source styles change.

## Project structure

```text
.
├── app/
│   ├── app.js          # Hash router and view injection
│   └── header.js       # Shared navigation markup
├── css/
│   └── styles.css      # Compiled stylesheet
├── images/             # Site imagery
├── model/
│   └── model.js        # Shared model code
├── pages/              # JavaScript templates for each view
├── scss/               # SCSS source files
└── index.html          # Single-page application entry point
```

## Current scope

The Login view is currently a visual form template. Account creation, login validation and state, logout behavior, and action feedback still need to be implemented before the authentication requirements are complete. The Contact form is also currently presentational and does not yet submit a message.
