# vmcilwain.github.io

Welcome to the repository for **vmcilwain.github.io**, the professional website of Lovell McIlwain. This site serves as a portfolio and central hub for professional information and projects.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Dependencies](#dependencies)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This project is a static website built with [Middleman](https://middlemanapp.com/), designed to showcase professional experience and projects. The site is generated using Ruby and deployed as a static site.

## Features

- Clean, responsive design
- Descriptive sections about me and the services I can provide
- Ability to download resume, work examples and process material
- Fast static site generation

## Dependencies

### Production

- None! The site is fully static and requires no server-side dependencies.

### Development

- Ruby 3.3.3
- Middleman 4.6.0

## Development

To run the site locally for development:

1. **Clone the repository:**

```sh
git clone https://github.com/vmcilwain/vmcilwain.github.io.git
cd vmcilwain.github.io
```

2. **Install dependencies:**

```sh
gem install bundler
bundle install
```

3. **Start the development server:**

```sh
middleman server
```

Then open [http://localhost:4567](http://localhost:4567) in your browser.

4. **Build for production:**

```sh
middleman build
```

The static files will be generated in the `doc/` directory.

## Deployment

Deploy the contents of the `doc/` directory to your preferred static hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [Lovell McIlwain](mailto:lovell.mcilwain@gmail.com).
vmcilwain.github.io
