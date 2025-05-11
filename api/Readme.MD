
# Project Polistack API

[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ndoteddy/ndo-polistack-poc/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Background

Staying up to date with modern technology is challenging. This project serves as a **Proof of Concept (PoC)** for an **Event Planner System**, using **ReactJS** for the frontend and **Node.js (Express)** for the backend API.

We aim to implement a **microservices-oriented architecture**, ensuring low coupling between modules. With reusable React components and APIs, integration with mobile apps (native or React Native) is seamless.

**Current Objective:** `Event Planner API v0.0.2`

Join the project and help build a collaborative community — sharing is caring!

**Author:** Nando Teddy

---

## 📚 Table of Contents

* [Objective](#objective)
* [Prerequisite](#prerequisite)
* [Contributing](#contributing)
* [Current Version](#currentversion)

---

## 🎯 Objective

1. Build an Event Planner System
2. Apply Agile Methodology
3. Use ReactJS as the primary frontend framework
4. Use NodeJS (Express) as the API backend
5. Implement Microservices Architecture
6. Integrate CI tools like Jenkins or TeamCity
7. Practice effort estimation and software planning
8. Create an extensible software ecosystem (web & mobile)
9. Address and analyze application security vulnerabilities

---

## 💻 Prerequisite

### 1. Software Requirements

* [Node.js (NPM)](https://nodejs.org/en/)
* [ReactJS](https://reactjs.org/tutorial/tutorial.html)
* [Git](https://git-scm.com/download/win)
* [WebStorm](https://www.jetbrains.com/webstorm/) (optional)
* [Postman](https://www.postman.com/)

### 2. Repository Access

```bash
# Clone or fork the API repo (v0.0.2)
git clone https://github.com/ndoteddy/ndo-polistack-poc.git
cd ndo-polistack-poc/api
```

### 3. Setup and Run

```bash
# Install dependencies
npm install

# Start the development server (uses Webpack + Hot Reloading)
npm start
```

> 🔧 You can customize the development port in `webpack.config.js`.

---

## 🤝 Contributing

```bash
# Fork it
# Create your feature branch
git checkout -b my-new-feature

# Commit your changes
git commit -am "Add some feature"

# Push to the branch
git push origin my-new-feature

# Create a new Pull Request
```

More details in [CONTRIBUTING.md](CONTRIBUTING.md)
Meet our awesome contributors: [Contributors](https://github.com/ndoteddy/ndo-polistack-poc/graphs/contributors)

---

## 🧩 Current Version

### `v0.0.2`

* Added **Scraping Controller** for extracting data from external sources (e.g., [AllConferences](https://hongkongcheapo.com/events/))
* Integrated packages:

  * `request` (HTTP client)
  * `cheerio` (HTML parsing)
* JSON response format
* Promise-based async handling

### `v0.0.1`

* Initial repo and server routing setup
* Configured:

  * NPM & dependencies
  * Express server
  * Babel transpiler with Webpack Hot Loader
  * Travis CI integration
  * MongoDB connection setup

---

Let me know if you’d like the README in `.md` format or want badges, sections, or language translations added.
