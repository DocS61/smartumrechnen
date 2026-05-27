# SmartUmrechnen – Deployment-Anleitung

## Übersicht

Diese App wird als Docker-Container auf einem Hetzner-Server mit **Coolify** betrieben.

## Voraussetzungen

- Hetzner Server mit Coolify installiert
- GitHub-Repository (privat empfohlen)
- Domain `smartumrechnen.de` bei Ionos

---

## 1. GitHub-Repository einrichten

```bash
# Lokal (oder per Coolify Git-Integration):
git init
git remote add origin https://github.com/DEIN-NAME/smartumrechnen.git
git add .
git commit -m "Initial commit: SmartUmrechnen v1.0"
git branch -M main
git push -u origin main
```

## 2. Coolify-Konfiguration

### Neues Projekt anlegen
1. Coolify Dashboard → **New Resource** → **Application**
2. **Source:** GitHub → Repository auswählen
3. **Branch:** `main`
4. **Build Pack:** `Dockerfile` (wird automatisch erkannt)
5. **Port:** `3000`

### Environment Variables setzen
In Coolify unter **Environment Variables**:

| Variable | Wert |
|----------|------|
| `NODE_ENV` | `production` |
| `NEXTAUTH_URL` | `https://smartumrechnen.de` |

### Domain konfigurieren
- In Coolify: **Domains** → `smartumrechnen.de` eintragen
- SSL: Let’s Encrypt aktivieren (automatisch)

## 3. DNS bei Ionos einrichten

| Typ | Name | Wert | TTL |
|-----|------|------|-----|
| A | `@` | `<HETZNER-SERVER-IP>` | 3600 |
| A | `www` | `<HETZNER-SERVER-IP>` | 3600 |

Alte Hostinger-Einträge löschen.

## 4. Deployment

Nach dem Push auf `main` baut Coolify automatisch:
1. Docker Multi-Stage Build (deps → build → runner)
2. Standalone-Output (~50 MB Image)
3. Healthcheck alle 30 Sekunden

## 5. Updates deployen

```bash
git add .
git commit -m "Update: Beschreibung"
git push origin main
```
Coolify deployed automatisch (bei aktiviertem Auto-Deploy).

---

## Architektur

```
┌─────────────────┐     ┌───────────────────┐     ┌─────────────────┐
│   Ionos DNS    │ →→→ │ Hetzner Server    │ →→→ │   Docker (3000) │
│ smartumrechnen │     │ Coolify + Traefik │     │   Next.js App   │
│      .de       │     │ Let's Encrypt SSL │     │   Standalone    │
└─────────────────┘     └───────────────────┘     └─────────────────┘
```

## Technische Details

- **Framework:** Next.js 14.2
- **Node:** 18 Alpine
- **Output:** Standalone (minimales Image, ~50 MB)
- **Port:** 3000
- **SSL:** Automatisch via Coolify/Traefik + Let's Encrypt
- **PWA:** Service Worker für Offline-Modus
