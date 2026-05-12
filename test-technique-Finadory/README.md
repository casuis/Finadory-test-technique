# Test technique Finadory

Ce projet est une reproduction front-end de l'application de demande disponible sur [demande.ma-batterie-solaire.fr](https://demande.ma-batterie-solaire.fr/), réalisée dans le cadre d'un test technique pour Finadory.

L'objectif est de recréer un parcours de formulaire permettant d'orienter un utilisateur selon sa situation solaire, de collecter les informations utiles à son projet et d'afficher un JSON final exploitable.

## Accès en ligne

Le projet est déployé sur Vercel et accessible ici :

[https://finadory-test-technique.vercel.app/](https://finadory-test-technique.vercel.app/)

## Fonctionnalités

- Choix initial du parcours utilisateur : installation solaire existante ou nouveau projet solaire.
- Parcours dédié aux utilisateurs ayant déjà des panneaux solaires.
- Parcours dédié aux utilisateurs n'ayant pas encore d'installation solaire.
- Étapes de sélection simples, multi-choix, slider de puissance, objectifs et formulaire de contact.
- Validation progressive des étapes avant passage à la suivante.
- Sauvegarde de la progression dans le `localStorage` pour reprendre le formulaire après rechargement.
- JSON final structuré avec des champs communs et des champs spécifiques au parcours choisi.

## Stack technique

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/radix-ui
- react-hook-form
- Zod
- Phosphor Icons

## Structure du formulaire

Le formulaire commence par une question commune :

```text
Avez-vous déjà des panneaux solaires installés ?
```

Selon la réponse, l'application charge un flow différent.

### Installation existante

Ce parcours concerne les utilisateurs qui possèdent déjà des panneaux solaires.

Étapes principales :

- puissance de l'installation solaire
- habitudes de consommation
- objectifs
- formulaire de contact

### Nouveau projet

Ce parcours concerne les utilisateurs qui n'ont pas encore d'installation solaire.

Étapes principales :

- information sur l'accompagnement possible
- type de projet souhaité
- type de logement
- délai de lancement du projet
- formulaire de contact

## JSON final

Le résultat final est affiché dans une modale au format JSON.

Les champs communs sont regroupés dans `shared`, et les champs spécifiques sont isolés selon le parcours :

```json
{
  "solarProjectType": "new-installation",
  "shared": {
    "contactForm": {},
    "isContactFormValid": true
  },
  "newInstallation": {
    "answers": {}
  }
}
```

ou :

```json
{
  "solarProjectType": "existing-installation",
  "shared": {
    "contactForm": {},
    "isContactFormValid": true
  },
  "existingInstallation": {
    "answers": {}
  }
}
```

## Persistance locale

La progression est sauvegardée dans le `localStorage` avec des clés séparées :

- `finadory-form-project-type`
- `finadory-form-new-project`
- `finadory-form-existing-installation`

Cela permet de recharger la page et de reprendre le formulaire au dernier écran consulté.

## Installation

```bash
npm install
```

## Lancement en développement

```bash
npm run dev
```

L'application est ensuite disponible sur l'URL affichée par Vite, généralement :

```text
http://localhost:5173
```

## Vérification

```bash
npx tsc -b
```

ou :

```bash
npm run build
```

Note : Vite 8 requiert Node.js `20.19+` ou `22.12+`.

## Scripts disponibles

- `npm run dev` : lance le serveur de développement.
- `npm run build` : vérifie TypeScript puis génère le build de production.
- `npm run preview` : lance une prévisualisation du build.
- `npm run lint` : exécute ESLint.
- `npm run format` : formate le projet avec Prettier.

## Organisation du code

Les fichiers principaux du formulaire sont situés dans :

```text
src/components/form
src/data/form
src/constants/form
src/types/form.ts
```

Les définitions de steps sont séparées dans `src/data/form`, tandis que les constantes de type de step, identifiants et valeurs métier sont centralisées dans `src/constants/form`.
