# Étape 1: Installation des dépendances et construction
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de lock et package.json pour optimiser le cache Docker
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances en utilisant pnpm
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copier le reste du code source
COPY . .

# Construire l'application Next.js
# NEXT_TELEMETRY_DISABLED=1 désactive la télémétrie de Next.js
# output: "standalone" crée un dossier .next/standalone optimisé pour le déploiement Docker
RUN NEXT_TELEMETRY_DISABLED=1 pnpm run build

# Étape 2: Image d'exécution (Production)
# Utiliser une image Node.js plus petite pour l'exécution
FROM node:20-alpine AS runner

# Définir le répertoire de travail
WORKDIR /app

# Définir l'utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis l'étape de construction
# Le dossier standalone contient le serveur Next.js
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Définir les variables d'environnement
ENV NODE_ENV production
ENV PORT 3000

# Exposer le port
EXPOSE 3000

# Changer l'utilisateur pour l'exécution
USER nextjs

# Commande de démarrage
CMD ["node", "server.js"]
