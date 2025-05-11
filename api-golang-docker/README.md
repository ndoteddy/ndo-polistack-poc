
# 🍜 Simple Restaurant API – GoLang + Docker + Kubernetes

This project demonstrates a beginner-friendly RESTful API built using **Go**, containerized with **Docker**, and ready for orchestration with **Kubernetes (GKE)**.

> 🎯 Ideal for those starting with backend APIs, Docker, and Kubernetes on **Google Cloud**.

---

## 📚 Blog Series (Highly Recommended)

> Read the full tutorial:
> **[How to Start Your Journey with GoLang + Google Cloud + Kubernetes](https://medium.com/scriptkiddiez/how-to-start-your-journey-with-golang-google-cloud-and-kubernetes-need-hello-world-part-1-4ca530d4d6ea)**

---

## 📂 Project Structure

| File/Folder  | Description                                    |
| ------------ | ---------------------------------------------- |
| `main.go`    | The Go API server (Gorilla Mux + sample data). |
| `Dockerfile` | Docker build configuration.                    |
| `go.mod`     | Go module and dependencies.                    |

---

## 🚀 Features

* Basic REST API (GET list & GET by ID)
* Uses `gorilla/mux` for routing
* Follows clean and readable Go structure
* Containerized with Docker
* Deployable on Kubernetes (GKE, Minikube, etc.)

---

## 🛠️ Tech Stack

* [GoLang](https://golang.org/)
* [Docker](https://www.docker.com/)
* [Gorilla Mux](https://github.com/gorilla/mux)
* [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/)
* [Google Cloud Platform](https://cloud.google.com/)

---

## 🧪 Getting Started

### Prerequisites

* Docker installed
* Go installed
* (Optional) Google Cloud SDK + Kubernetes CLI

### 1. Run Locally

```bash
# Install dependencies
go mod tidy

# Run the server
go run main.go
```

API will be accessible at `http://localhost:8080`

### 2. Run with Docker

```bash
# Build Docker image
docker build -t restaurant-api .

# Run the container
docker run -p 8080:8080 restaurant-api
```

---

## 📬 API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/restaurant`      | Get all restaurants  |
| GET    | `/restaurant/{id}` | Get restaurant by ID |

Example:

```bash
curl http://localhost:8080/restaurant
curl http://localhost:8080/restaurant/1
```

---

## ☁️ Deployment (Coming Soon)

> Kubernetes YAML + GKE deployment guide will be included in upcoming tutorials.

---

## 🙋‍♂️ Author

**Hernando Ivan Teddy**
🔗 [LinkedIn](https://www.linkedin.com/in/hernandoivanteddy/)
📖 Articles: [Medium @scriptkiddiez](https://medium.com/scriptkiddiez)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---
