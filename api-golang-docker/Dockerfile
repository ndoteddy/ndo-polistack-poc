# ----- Build Stage -----
FROM golang:1.21-alpine AS builder

# Add Maintainer Info
LABEL maintainer="nando teddy"

# Install git for modules that require it
RUN apk add --no-cache git

# Set working directory inside container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the rest of the application source code
COPY . .

# Build the Go application
RUN go build -o main .

# ----- Run Stage -----
FROM alpine:latest

# Create non-root user (optional for security)
RUN adduser -D appuser

WORKDIR /app

# Copy the compiled binary from the build stage
COPY --from=builder /app/main .

# Use non-root user
USER appuser

# Expose port
EXPOSE 8080

# Command to run the executable
CMD ["./main"]
