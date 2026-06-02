# 🎲 GameMaster Suite 📜

¡Bienvenido a **GameMaster Suite**! Una herramienta multijugador en tiempo real diseñada para Directores de Juego (Game Masters) y mesas de rol (RPGs) que juegan online.

El objetivo de esta plataforma es agilizar las sesiones de juego sustituyendo los bots de texto por herramientas visuales interactivas, fluidas y sincronizadas al milisegundo mediante Firebase Realtime Database.

---

## 🕹️ Funcionalidades Implementadas

### 1. 🎲 Sistema de Dados D20 3D

* **Físicas en Canvas:** Lanzamiento de dados D20 con renderizado 3D.
* **Sincronización Total:** La semilla (`seed`) del lanzamiento se replica en tiempo real, garantizando que todos los jugadores vean el mismo resultado al mismo tiempo.
* **Modo Estándar:** Ideal para pruebas de características o salvaciones rápidas.

### 2. ⚔️ Sistema de Dados de Daño (Damage Dice)

* **Pool Personalizable:** Permite al Game Master configurar una tirada combinada de diferentes dados (d4, d6, d8, d10, d12, d100).
* **Cálculo Automático:** El sistema suma el resultado total de la tirada incluyendo bonificadores, mostrando el daño total de forma clara y visual para la mesa.

### 3. 🎡 Ruleta del Destino

* **Gestión Dinámica:** El GM puede editar las cuñas de la ruleta (nombre, color, texto) en tiempo real para adaptarse a cualquier situación de la partida.
* **Sincronización de Estado:** El giro, la duración y el resultado final son consistentes para todos los usuarios conectados a la sala.

---

## ⚡ Stack Tecnológico

* **Frontend:** React, TypeScript, Vite, Tailwind CSS.
* **Backend:** Firebase Realtime Database (RTDB) para la sincronización de estado en tiempo real.
* **Lógica:** Implementación de físicas deterministas en Canvas para los dados 3D.

---

## 📄 Licencia

Proyecto de código abierto para uso personal y comunitario en partidas de rol.

---
