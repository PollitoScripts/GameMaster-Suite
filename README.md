# 🎲 GameMaster Suite 📜

¡Bienvenido a **GameMaster Suite**! Una navaja suiza de herramientas multijugador en tiempo real diseñada para Directores de Juego (Game Masters) y mesas de rol de mesa (RPGs) que juegan online.

El objetivo de esta plataforma es agilizar las sesiones de juego sustituyendo los bots de dados tradicionales por herramientas visuales interactivas, fluidas y compartidas por toda la mesa en el mismo milisegundo.

---

## 🚀 Concepto y Filosofía del Proyecto

En las partidas de rol virtuales, la emoción de ver rodar el dado a veces se pierde en un simple mensaje de texto en un chat. **GameMaster Suite** devuelve la tensión a la mesa permitiendo que tanto el GM como los jugadores compartan la experiencia visual de los lanzamientos y las decisiones del destino en tiempo real, manteniendo una interfaz oscura y limpia que no rompe la atmósfera de la sesión.

---

## 🕹️ Módulos Incluidos

### 1. 🎲 Sistema de Dados D20 3D Sincronizado
* **Físicas Deterministas en Canvas:** Lanzamiento masivo de dados de 20 caras (D20) usando un motor matemático puro sobre HTML5 Canvas (sin librerías externas pesadas).
* **Renderizado Colectivo:** La semilla del lanzamiento se comparte por red, garantizando que todos los jugadores vean el dado girar con la misma inercia y detenerse en la misma cara simultáneamente.
* **Alertas Visuales Críticas:** El sistema resalta de manera dinámica los éxitos críticos (20 natural en color verde) y las pifias catastróficas (1 natural en color rojo).

### 2. 📊 Mecánica de Margen de Éxito Acumulativo
Diseñado para sistemas de rol avanzados donde no solo importa superar una dificultad, sino *por cuánto* se supera. 
* El Game Master establece una **Dificultad (DT)** en su panel de control.
* El sistema filtra los dados lanzados, descarta los fracasos y calcula la sumatoria total del margen de éxito de la tirada usando la siguiente lógica:
    
    $$\text{Suma Total} = \sum (\text{Resultado del Dado} - \text{DT})$$

> **Ejemplo Práctico:** Con una DT de 10, si lanzas tres dados y obtienes `[18, 5, 12]`, el sistema descarta el `5` por fallo, y acumula los márgenes de los otros: $(18 - 10) + (12 - 10) = 8 + 2$. ¡El panel mostrará una **Suma Total de Éxito de 10** instantáneamente!

### 3. 🎡 Ruleta del Destino Multijugador
* **Gestión de Cuñas en Vivo:** El GM puede alterar las opciones de la ruleta en pleno juego para improvisar encuentros aleatorios, tablas de botín (loot), toma de decisiones grupales ("Sí / No") o consecuencias de trampas.
* **Sincronización Absoluta:** Cuando la ruleta gira, se calcula el ángulo final en el servidor y se replica la cinemática de giro de forma idéntica en las pantallas de todos los aventureros conectados.

---

## ⚡ El Núcleo Tecnológico (Cómo funciona por detrás)

* **React + TypeScript + Vite:** Estructura modular, rápida y fuertemente tipada para asegurar que los eventos de juego no sufran bugs durante la partida.
* **Firebase Realtime Database (RTDB):** Todo el estado de la sala de juego se almacena como un único árbol JSON reactivo. Cualquier cambio del GM (cambiar de juego, lanzar dados, girar ruleta) altera la base de datos y se propaga a los jugadores inmediatamente por websockets.
* **Tailwind CSS:** Diseño UI cyberpunk/oscuro optimizado para sesiones nocturnas, enfocado en maximizar el espacio de juego y evitar menús aparatosos.

---

## 🗺️ Próximas Funcionalidades en Desarrollo (Roadmap)

- [ ] ⚔️ **Gestor de Iniciativa Global:** Lista ordenada en tiempo real para controlar los turnos de combate de los monstruos y la *party*.
- [ ] 📜 **Chat Integrado con Comandos de Dados:** Soporte para comandos rápidos en teclado (ej: `/roll 4d6 + 2`) para tiradas de daño o atributos secundarios.
- [ ] 👥 **Vitals de la Party (Fichas Rápidas):** Barras de puntos de vida (HP) y recursos de los jugadores visibles en tiempo real para el director de juego.
