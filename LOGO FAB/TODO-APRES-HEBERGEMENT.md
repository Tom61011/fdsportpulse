# ✅ LISTE DES TÂCHES APRÈS HÉBERGEMENT

## 🚨 URGENT - À FAIRE IMMÉDIATEMENT (5 minutes)

### 1️⃣ Héberger le site sur Netlify
- [ ] Aller sur https://app.netlify.com/signup
- [ ] S'inscrire avec email
- [ ] Glisser-déposer le dossier "LOGO FAB"
- [ ] Noter l'URL donnée : `https://__________.netlify.app`

---

## 2️⃣ METTRE À JOUR LES URLs (15 minutes)

**Remplacer `https://votresite.com` par votre vraie URL Netlify**

### Fichiers à modifier :

#### 📄 index.html
Lignes à modifier :
- [ ] Ligne ~16 : `<meta property="og:url">`
- [ ] Ligne ~20 : `<meta property="og:image">`
- [ ] Ligne ~23 : `<meta property="twitter:url">`
- [ ] Ligne ~25 : `<meta property="twitter:image">`

#### 📄 sitemap.xml (TRÈS IMPORTANT)
- [ ] Remplacer TOUTES les occurrences de `https://votresite.com`
- [ ] Mettre à jour `<lastmod>` avec la date d'aujourd'hui : 2026-02-10

Exemple :
```xml
<loc>https://VOTRE-URL.netlify.app/index.html</loc>
<lastmod>2026-02-10</lastmod>
```

#### 📄 robots.txt
- [ ] Remplacer `https://votresite.com` dans la ligne Sitemap

---

## 3️⃣ ACTIVER LE FORMULAIRE DE CONTACT (5 minutes)

### Dans contact.html :

Trouver cette ligne :
```html
<input type="hidden" name="_next" value="http://localhost/contact.html?success=1">
```

Remplacer par :
```html
<input type="hidden" name="_next" value="https://VOTRE-URL.netlify.app/contact.html?success=1">
```

### Tester le formulaire :
- [ ] Remplir le formulaire sur votre site en ligne
- [ ] Vérifier l'email sur `fdsportpulse@gmail.com`
- [ ] **IMPORTANT:** Cliquer sur le lien de confirmation (vérifier spam !)
- [ ] Tester à nouveau → devrait fonctionner ✅

---

## 4️⃣ GOOGLE SEARCH CONSOLE (10 minutes)

- [ ] Aller sur https://search.google.com/search-console
- [ ] Ajouter votre propriété (URL Netlify)
- [ ] Soumettre le sitemap : `https://VOTRE-URL.netlify.app/sitemap.xml`
- [ ] Demander l'indexation des 3 pages principales

---

## 5️⃣ GOOGLE MY BUSINESS (20 minutes)

**Pour apparaître sur Google Maps et recherches locales**

- [ ] Aller sur https://business.google.com
- [ ] Créer une fiche entreprise
- [ ] Informations :
  - Nom : Fd Sport Pulse
  - Catégorie : Coach sportif / Éducateur sportif
  - Zone de service : CCHF + CUD (57 communes du Nord)
  - Téléphone : 06 23 77 30 44
  - Email : fdsportpulse@gmail.com
  - Site web : URL Netlify
- [ ] Ajouter des photos (logo, vous en action)
- [ ] Remplir la description
- [ ] Définir les horaires

---

## 📅 DANS 1 SEMAINE

- [ ] Vérifier l'indexation Google (rechercher "Fd Sport Pulse")
- [ ] Analyser le trafic dans Netlify Analytics
- [ ] Partager le site sur les réseaux sociaux
- [ ] Demander les premiers avis clients

---

## 🎯 DANS 1 MOIS

- [ ] Écrire 1er article de blog (conseils fitness)
- [ ] Optimiser selon les retours utilisateurs
- [ ] Analyser les mots-clés dans Search Console

---

## 💡 OPTIONNEL (Quand vous avez le temps)

- [ ] Acheter un nom de domaine personnalisé (ex: fdsportpulse.fr)
- [ ] Créer des comptes sociaux (Facebook, Instagram)
- [ ] Ajouter Google Analytics pour suivre les visiteurs
- [ ] Créer une section "Témoignages clients"
- [ ] Ajouter des photos de vos séances

---

## 🆘 BESOIN D'AIDE ?

**Problèmes courants :**

❓ **Site ne se charge pas**
→ Vérifiez que `index.html` est à la racine du dossier

❓ **Formulaire ne marche pas**
→ Avez-vous cliqué sur l'email de confirmation ?

❓ **Pas dans Google**
→ Attendez 48h après soumission du sitemap

❓ **Site lent**
→ Contactez Netlify support (gratuit)

---

**Date de création :** 10 février 2026
**Dernière mise à jour :** À compléter après hébergement
