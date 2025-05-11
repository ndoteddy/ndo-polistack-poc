

# 🚀 NDO Polistack POC – Modular Fullstack API System

A modern fullstack proof-of-concept system by **@ndoteddy**, combining GoLang, React, web scraping, and scalable API architecture — containerized with Docker and ready for cloud deployment.

---

## 🧩 Project Structure

| Folder                                     | Description                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------ |
| [`api`](./api)                             | Central API service – handles core business logic, written in Node.js.               |
| [`api-web`](./api-web)                     | Frontend client – built with **React**, upgraded to latest standards.                |
| [`api-golang-docker`](./api-golang-docker) | Microservice written in **Go** + **Gorilla Mux**, Docker-ready, API starter example. |
| [`api-scrapper`](./api-scrapper)           | A web-scraping utility for pulling data, likely using Puppeteer or Cheerio.          |

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **Backend**: Node.js, GoLang
* **Web Scraper**: Cheerio / Puppeteer
* **Routing**: Express / Gorilla Mux
* **Containerization**: Docker
* **Orchestration**: Kubernetes-ready (GKE/Minikube)
* **Cloud**: Google Cloud Platform

---

## 🧪 Getting Started

Clone this monorepo:

```bash
git clone https://github.com/ndoteddy/ndo-polistack-poc.git
cd ndo-polistack-poc
```

Run individual services from their directories (see their README files for detailed steps).

---

## 📦 Common Commands

### Run All (Docker Compose – Optional Future Setup)

> *(Not yet implemented, but good for future planning)*

```bash
docker-compose up --build
```

---

## 📂 Deployment Plan (Coming Soon)

* Kubernetes manifests for `api` and `api-golang-docker`
* CI/CD with GitHub Actions
* Cloud Run compatibility
* GKE deployment guides

---

## 👨‍💻 Author

**Nando Teddy (@ndoteddy)**
🔗 [LinkedIn](https://www.linkedin.com/in/hernandoivanteddy)
📖 [Medium Blog](https://medium.com/scriptkiddiez)

---

## 📄 License

MIT License. See [LICENSE](./LICENSE) for details.
