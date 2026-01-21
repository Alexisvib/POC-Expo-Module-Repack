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
