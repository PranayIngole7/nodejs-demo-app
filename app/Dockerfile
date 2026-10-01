# Stage 1: Build base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install production and development dependencies for testing/running
RUN npm ci --only=production

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
