# Use an official Node.js runtime as the base image for the build stage
FROM node:18-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Start a new stage for the production image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built assets from the builder stage
COPY --from=builder /app/build ./build

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]