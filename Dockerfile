# Install dependencies using npm
FROM node:lts AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM node:lts AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Final image for running the application
FROM node:lts AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV="production"
ENV HOSTNAME="0.0.0.0"

# Copy necessary files from the builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port and set the command to start the server
EXPOSE 3000
CMD ["npm", "start"]
