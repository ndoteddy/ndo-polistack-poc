

# Project Polistack



[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/ndoteddy/ndo-polistack-poc/tree/main/api-web/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Background

Project Polistack is a **Proof of Concept** for an **Event Planner System** built using **ReactJS** for the front-end and **NodeJS with Express** for the API layer. This system follows a **Microservices Architecture** to ensure modularity, scalability, and ease of maintenance. It can be easily extended for use in mobile applications such as **React Native** or **native mobile apps**.

---

## Table of Contents

1. [Objective](#objective)
2. [Prerequisite](#prerequisite)
3. [Installation & Setup](#installation--setup)
4. [Contributing](#contributing)
5. [Changelog](#changelog)
6. [License](#license)

---

## Objective

* **Build a fully functional Event Planner System**
* Use **Agile Methodology** for development
* Leverage **ReactJS** as the core front-end framework
* Use **NodeJS** with **Express** for the back-end API
* Adopt **Microservices Architecture** for scalability
* Integrate **Continuous Integration (CI)** tools such as Jenkins or TeamCity
* Estimate and manage the **complexity** of software development
* Create a **full-stack ecosystem**, extending from web apps to mobile apps
* Analyze and mitigate **security vulnerabilities**

---

## Prerequisite

1. **Software Requirements**:

   * [Node.js](https://nodejs.org/en/)
   * [ReactJS](https://reactjs.org/tutorial/tutorial.html)
   * [Git](https://git-scm.com/download/win)
   * [WebStorm](https://www.jetbrains.com/webstorm/)
   * [Postman](https://www.getpostman.com/)

2. **Setup Instructions**:

   * Clone or fork this repository:
     [https://github.com/ndoteddy/ndo-polistack-poc/tree/main/api-web](https://github.com/ndoteddy/ndo-polistack-poc/tree/main/api-web)
   * Install dependencies:

     ```bash
     npm install
     ```
   * Start the development server:

     ```bash
     npm start
     ```

     You can customize the port in the `webpack.config.js` if needed.
   * Happy coding! 🚀

3. **Hosting**:

   * This app can be hosted on platforms like **Heroku**, or you can deploy it yourself using **Docker** or **AWS**.

---

## Installation & Setup

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/ndoteddy/ndo-polistack-poc/tree/main/api-web.git
   ```

2. **Navigate** into the project directory:

   ```bash
   cd ndo-polistack-poc/tree/main/api-web
   ```

3. **Install dependencies** using npm:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm start
   ```

   Your app should now be accessible at `http://localhost:3000` (or whichever port you configure).

5. **Deployment**:

   * You can deploy the application to **Heroku** or **any cloud provider**. For Heroku, simply:

     ```bash
     heroku create
     git push heroku master
     ```

---

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. **Fork** the repository
2. **Create a new branch** for your feature:

   ```bash
   git checkout -b my-new-feature
   ```
3. **Commit your changes**:

   ```bash
   git commit -am 'Add some feature'
   ```
4. **Push to the branch**:

   ```bash
   git push origin my-new-feature
   ```
5. **Create a pull request** on GitHub

See the [Contributing Guidelines](CONTRIBUTING.md) for more details.

Check out our [list of contributors](https://github.com/ndoteddy/ndo-polistack-poc/tree/main/api-web/graphs/contributors).

---

## Changelog

See the details of the project changes in the [Changelog](CHANGELOG.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

### Refactoring Notes:

1. **Updated Dependencies**: Ensure all dependencies are updated to their latest versions. Use `npm outdated` to check for any outdated packages.
2. **React Version**: Update React to the latest version and ensure compatibility with any other dependencies.
3. **Add Tests**: Introduce unit and integration tests if not already in place. Use tools like **Jest** or **Mocha** for testing.
4. **Improve CI/CD**: If you're still using older CI tools, consider switching to **GitHub Actions** or **GitLab CI** for better integration and easier configuration.

---

Feel free to customize the instructions according to your specific project needs!
