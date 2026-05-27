# ============================================
# SmartUmrechnen – Production Dockerfile
# Multi-stage build für Next.js 14 Standalone
# ============================================

# --- Stage 1: Dependencies ---
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production=false

# --- Stage 2: Build ---
FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Standalone output für minimales Produktions-Image
ENV NEXT_OUTPUT_MODE=standalone
ENV NEXT_DIST_DIR=.next
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN yarn build

# --- Stage 3: Production Runner ---
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Sicherheit: non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Statische Assets kopieren
COPY --from=builder /app/public ./public

# Standalone-Output kopieren
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
