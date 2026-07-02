# Plateforme MCF 2iE

Plateforme numérique d'accompagnement académique et professionnel des étudiants de l'Institut 2iE, Mastercard Foundation.

## Installation

```bash
npm install
```

## Configuration

Copie `.env.local` et configure :
```
DATABASE_URL="mysql://user:password@localhost:3306/2ie_mcf"
JWT_SECRET="votre-secret"
```

## Lancement

```bash
npx prisma generate
npx prisma db push
npm run dev
```

## Pages

- `/` — Page de connexion / inscription
- `/dashboard` — Tableau de bord
- `/ressources` — Hub de ressources pédagogiques
- `/stages` — Répertoire de stages
- `/annonces` — Annonces officielles
- `/giveback` — Vitrine Give Back
- `/contacts` — Annuaire des contacts
- `/profil` — Profil utilisateur

## Stack

- **Frontend** : Next.js 14, React, TypeScript
- **Backend** : Next.js API Routes
- **Base de données** : MySQL + Prisma ORM
- **Auth** : JWT + bcryptjs
