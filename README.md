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
* **Sistema de Bonos:** Nueva sección para aplicar modificadores de daño. El sistema suma automáticamente el resultado de los dados con el bono configurado.
* **Cálculo Automático:** Muestra el daño total de forma clara y visual para la mesa.

### 3. 🎡 Ruleta del Destino

* **Gestión Dinámica:** El GM puede editar las cuñas de la ruleta (nombre, color, texto) en tiempo real.
* **Sin Restricciones:** Ahora permite crear ruletas desde **cero opciones**, eliminando la necesidad de un mínimo de elementos para una creación de listas mucho más ágil e improvisada.
* **Sincronización de Estado:** El giro y el resultado final son consistentes para todos los usuarios conectados.

### 4. 📝 Historial de Actividad (Log)

* **Registro Unificado:** Nuevo apartado que guarda todo el historial de la sesión.
* **Trazabilidad:** Consulta en cualquier momento los resultados previos de los lanzamientos D20, el daño infligido y los giros de ruleta. Mantén un control total de lo ocurrido durante la partida.

---

## ⚡ Stack Tecnológico

* **Frontend:** React, TypeScript, Vite, Tailwind CSS.
* **Backend:** Firebase Realtime Database (RTDB) para la sincronización de estado en tiempo real.
* **Lógica:** Implementación de físicas deterministas en Canvas para los dados 3D.

---

## 📄 Licencia

Proyecto de código abierto para uso personal y comunitario en partidas de rol.

---