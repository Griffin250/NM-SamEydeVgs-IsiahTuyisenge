# Use Node.js base image
FROM node:20-alpine3.18

# Set working directory
WORKDIR /app

# Copy frontend files
COPY . .

# Install dependencies and build
RUN npm install && npm run build

# Use nginx to serve built files
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=0 /app/dist /usr/share/nginx/html

# Copy nginx config (optional)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
