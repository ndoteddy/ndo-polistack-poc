package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

// Models
type Restaurant struct {
	ID       string    `json:"id,omitempty"`
	Name     string    `json:"name,omitempty"`
	Address  string    `json:"address,omitempty"`
	Follower *Follower `json:"follower,omitempty"`
}

type Follower struct {
	Total string `json:"total,omitempty"`
	Like  string `json:"like,omitempty"`
}

// Handler with in-memory data
type APIHandler struct {
	restaurants []Restaurant
}

func main() {
	port := getPort()

	handler := &APIHandler{
		restaurants: []Restaurant{
			{
				ID: "1", Name: "Ayam Super Nando",
				Address: "Jalan Bulan 10th Kuala Lumpur",
				Follower: &Follower{Total: "10", Like: "5"},
			},
			{
				ID: "2", Name: "Kopi Hoho Nando",
				Address: "Central Boulevard 20th Singapore",
				Follower: &Follower{Total: "25", Like: "2"},
			},
		},
	}

	router := mux.NewRouter()
	handler.registerRoutes(router)

	log.Printf("Server listening on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

func getPort() string {
	if port := os.Getenv("PORT"); port != "" {
		return port
	}
	return "8080"
}

func (h *APIHandler) registerRoutes(router *mux.Router) {
	router.HandleFunc("/restaurant", h.getAllRestaurants).Methods("GET")
	router.HandleFunc("/restaurant/{id}", h.getRestaurantByID).Methods("GET")
}

func (h *APIHandler) getAllRestaurants(w http.ResponseWriter, r *http.Request) {
	h.respondWithJSON(w, http.StatusOK, h.restaurants)
}

func (h *APIHandler) getRestaurantByID(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	for _, rest := range h.restaurants {
		if rest.ID == id {
			h.respondWithJSON(w, http.StatusOK, rest)
			return
		}
	}
	h.respondWithJSON(w, http.StatusNotFound, map[string]string{"error": "Restaurant not found"})
}

func (h *APIHandler) respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	if err := json.NewEncoder(w).Encode(payload); err != nil {
		log.Printf("Error encoding JSON response: %v", err)
	}
}
