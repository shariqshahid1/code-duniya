# 🐳 Docker & Docker Compose - Complete Guide

> **"Docker = Application ko box mein band karo. Har jagah chalao!"**

---

## 📖 What is Docker?

| Aspect | Detail |
|--------|--------|
| **Difficulty** | ⭐⭐⭐ Medium |
| **Time** | 2 weeks |
| **Prerequisites** | Linux basics |

### Definition
Docker is a platform for developing, shipping, and running applications in **containers**.

### Roman English Explanation
Docker ko "shipping container" samjho. Jaise shipping container mein aap kuch bhi rakh sakte ho aur ship, train, truck se bhej sakte ho - waise hi Docker container mein aap apna application + uski saari dependencies (libraries, configs) daal kar kahi bhi chala sakte ho.

### Container vs VM
| Feature | Container | VM |
|---------|-----------|-----|
| OS | Shares host OS | Full OS per VM |
| Size | MBs | GBs |
| Start | Seconds | Minutes |
| Isolation | Process level | Hardware level |

---

## Basic Commands
```bash
# Images
docker pull ubuntu             # Download image
docker images                  # List images
docker rmi <image>            # Remove image
docker build -t app:1.0 .     # Build from Dockerfile

# Containers
docker run nginx               # Run container
docker run -d nginx            # Detached mode
docker run -p 8080:80 nginx   # Port mapping
docker run --name web nginx    # Named container
docker ps                      # Running containers
docker ps -a                   # All containers
docker stop <container>        # Stop
docker start <container>       # Start
docker rm <container>          # Remove
docker logs <container>        # See logs
docker exec -it <container> sh  # Shell inside

# Dockerfile
FROM node:20-alpine            # Base image
WORKDIR /app                   # Working directory
COPY package*.json ./          # Copy package files
RUN npm install                # Install dependencies
COPY . .                       # Copy source code
EXPOSE 3000                    # Open port
CMD ["npm", "start"]           # Default command

# Docker Compose (multi-container)
# docker-compose.yml
version: '3.8'
services:
    web:
        build: .
        ports:
            - "3000:3000"
        environment:
            - NODE_ENV=production
        depends_on:
            - db
    db:
        image: postgres:15
        environment:
            POSTGRES_DB: myapp
            POSTGRES_PASSWORD: secret
        volumes:
            - pgdata:/var/lib/postgresql/data

volumes:
    pgdata:
```

---

> **"Docker seekho, deploy karo, scaling maje karo!" 🐳**
