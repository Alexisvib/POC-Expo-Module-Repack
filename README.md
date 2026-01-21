# One App – Expo Modules POC

## 🎯 Goal

Validate a **One App architecture** in React Native (Expo) with:

- a single **Shell app**
- multiple **isolated business modules**
- modules **enabled dynamically based on the user profile**

This repository is a **technical proof of concept**, not a production-ready app.

---

## 🧱 Project Structure

    one-app-poc/
    ├─ apps/
    │  └─ shell/
    │     └─ App.tsx
    ├─ modules/
    │  ├─ invoicing/
    │  ├─ accounting/
    │  └─ banking/
    └─ package.json

---

## 📦 Tech Stack

- Expo (managed workflow)
- React Native
- Yarn (workspaces)
- React Navigation

---

## 🚀 Installation

From the repository root:

    yarn install

---

## ▶️ Start the Expo App (Shell)

Move to the shell app:

    cd apps/shell

Start Expo:

    yarn expo start

Or the short equivalent:

    yarn start

---

## 📱 Run the App

From the Expo CLI:

- Press `i` to open the iOS simulator
- Press `a` to open the Android emulator
- Or scan the QR code using **Expo Go**

---

## 🧪 POC Notes

- The user profile is **mocked**
- Modules are loaded dynamically
- Disabled modules:
  - do not register routes
  - do not mount screens
  - do not initialize state

---

## 🧩 POC Purpose

This POC validates that:

- a single Expo Shell can load feature modules
- navigation can be built dynamically
- a modular **One App** architecture is viable on mobile

---

# Suivi a résumer en anglais :

-> En gros on créer 3 modules : accounting, invoicing et banking (represenant ce qu'on veut comme one app vision)

-> Au niveau du shell on importe les modules via un registry :

```js
import "@modules/invoicing";
import "@modules/banking";
import "@modules/accounting";
```

-> Via un hook et un context on dit quel module à le droit de voir le user.

-> A cette étape le soucis
un module disparaît de la navigation
mais :

- son state peut rester vivant
- ses side-effects peuvent rester actifs
- ses listeners peuvent rester branchés

* Step Init / Tear Down modules
  Les modules sont vraiment indépendants
  Le Shell contrôle leur cycle de vie
  Tu peux activer/désactiver des produits à chaud

On ajoute donc un init lorsqu'un module est monté et un dispose quand il est démonté si besoin de reset du store, clean listener, ...

-> Step suivante si on est sur un module et qu'il est désactivé => redirect sur home
