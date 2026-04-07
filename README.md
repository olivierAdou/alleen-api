# alleen-api

> **One API. Multiple databases. Any language.**
> Transformez Prisma en **API universelle** pour gérer toutes vos bases de données.

---

## ⚡ Le problème

Avec plusieurs bases de données, votre backend devient vite complexe :

```ts
switch (database) {
  case 'phoenix': ...
  case 'bulk': ...
}
```

👉 Du code dupliqué
👉 Difficile à maintenir
👉 Peu scalable

---

## ✅ La solution

**alleen-api supprime totalement ce problème.**

> ➜ Une commande = une base de données prête
> ➜ Un seul endpoint = toutes vos requêtes
> ➜ Une API utilisable depuis n’importe quel langage

---

## 🌍 Utilisable avec n’importe quel langage

alleen-api expose une **API HTTP universelle**.

Peu importe votre stack :

* Node.js
* Python
* PHP
* Java
* Go
* Mobile (Flutter, Swift, Kotlin)
* Frontend (React, Vue…)

👉 Vous interagissez avec vos bases via une simple requête HTTP.

---

### Exemple en Python

```python
import requests

response = requests.post("http://localhost:3000/api/alleen/dbinstance", json={
    "database": "phoenix",
    "model": "User",
    "action": "findMany",
    "args": {
        "where": {"active": True}
    }
})

print(response.json())
```

---

### Exemple en PHP

```php
$response = file_get_contents("http://localhost:3000/api/alleen/dbinstance", false, stream_context_create([
  "http" => [
    "method"  => "POST",
    "header"  => "Content-Type: application/json",
    "content" => json_encode([
      "database" => "phoenix",
      "model"    => "User",
      "action"   => "findMany",
      "args"     => ["where" => ["active" => true]]
    ])
  ]
]));

echo $response;
```

---

## 🚀 Installation rapide

```bash
git clone https://github.com/olivierAdou/alleen-api.git
cd alleen-api
cp .env.example .env
npm install
npm run start:dev
```

---

## ➕ Ajouter une base de données

```bash
npx alleen db:add --name=phoenix --url=postgresql://user:pass@host/phoenix
```

✅ Service généré automatiquement
✅ Configuration ajoutée
✅ Connexion prête

👉 Vous définissez vos modèles Prisma, et c’est tout.

---

## 🔥 Endpoint universel

```
POST /api/alleen/dbinstance
```

### Exemple : récupérer des données

```json
{
  "database": "phoenix",
  "model":    "User",
  "action":   "findMany",
  "args": {
    "where": { "active": true },
    "take":  10
  }
}
```

---

### Exemple : créer une donnée

```json
{
  "database": "phoenix",
  "model":    "User",
  "action":   "create",
  "args": {
    "data": {
      "email": "john@example.com",
      "name":  "John"
    }
  }
}
```

---

## 📦 Réponse standard

```json
{
  "success": true,
  "data": { "id": 1, "email": "john@example.com" },
  "meta": {
    "database": "phoenix",
    "model":    "User",
    "action":   "create",
    "duration": 18
  }
}
```

---

## 🧰 Commandes CLI

#### Ajouter une base de données
```bash
npx alleen db:add --name=phoenix --url=postgresql://user:pass@host/phoenix
npx alleen db:add --name=bulk --url=mysql://user:pass@host/bulk --provider=mysql
```

#### Supprimer une base de données

```bash
npx alleen db:remove --name=phoenix
```

#### Lister toutes les bases de données

```bash
npx alleen db:list
```

#### Régénérer le registry

```bash
npx alleen db:generate
```

#### Régénérer le client Prisma d’une DB

```bash
npx alleen db:generate:client --name=phoenix
```

#### Pull / Push du schema Prisma

```bash
npx alleen db:pull --name=phoenix
npx alleen db:push --name=phoenix
```


#### Migration

```bash
npx alleen db:migrate --name=phoenix --version=add-user-table
npx alleen db:migrate:deploy --name=phoenix
```
---

## 🔎 Endpoints utiles

```
GET /api/alleen/databases
GET /api/alleen/health
```

---

## 💡 Pourquoi alleen-api ?

* ❌ Plus de switch/case
* ⚡ Ajout instantané de nouvelles bases
* 🌍 Utilisable depuis n’importe quel langage
* 🧩 Architecture scalable
* 🔁 Un seul endpoint pour tout

---

## 🧠 Cas d’usage

* Backend multi-tenant (SaaS)
* Microservices avec plusieurs bases
* API centralisée pour mobile + web
* Remplacement rapide d’un backend CRUD
* Bridge entre plusieurs systèmes

---

## 🤝 Contribuer

```bash
git clone https://github.com/olivierAdou/alleen-api
cd alleen-api
npm install
```

PRs et issues bienvenues 🙌

---

## 📄 License

MIT © Olivier Adou