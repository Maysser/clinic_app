# Étape 1 : Build
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier tout le code source
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine AS runner

WORKDIR /app

# Copier seulement les fichiers nécessaires depuis le build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Définir la variable d'environnement NODE_ENV
ENV NODE_ENV=production
ENV PORT=3001

# Exposer le port
EXPOSE 3001

# Lancer l'application Next.js
CMD ["npx", "next", "start", "-p", "3001"]
