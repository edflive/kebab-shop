# 🥙 Kebab Shop — Starter avancé

## Contenu

- backend/ : Strapi v4 (à initialiser) avec modèles Menu, Produit, Promotion, Créneau, Commande, endpoint /checkout (Stripe)
- frontend/ : Nuxt 3 avec panier, pages menus, intégration GraphQL, paiement Stripe
- docker-compose.yml : Postgres + Strapi + Nuxt + Nginx
- nginx/nginx.conf : reverse proxy simple

## Installation

1. Installer Docker Desktop.

2. Dans `backend/`, installer les dépendances Strapi :

```bash
cd backend
npm install
```

3. Dans `frontend/` :

```bash
cd ../frontend
npm install
```

4. Revenir à la racine et lancer :

```bash
cd ..
docker-compose up --build
```

- Strapi : http://localhost:1337/admin
- Frontend : http://localhost

> Remarque : ce projet est un squelette avancé. Tu devras :
> - mettre ta vraie clé STRIPE_SECRET dans les variables d'environnement du service `strapi`
> - ajuster les modèles et la logique métier selon tes besoins.
