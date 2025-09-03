# 🔔 GitHub Webhook → Notificaciones en Discord

Este proyecto implementa un **servidor en Node.js con Express** que actúa como receptor de webhooks de GitHub.  
Cada vez que ocurre un evento en el repositorio (star, issues...), el servidor valida la firma de GitHub y envía un mensaje formateado a un **servidor de Discord** mediante un bot **Discord Webhook**.

## Características

- Middleware para verificar la firma HMAC SHA-256 enviada por GitHub (`x-hub-signature-256`).
- Recepción de eventos de GitHub vía **webhooks**.
- Envío de notificaciones a un canal de Discord.
- Configuración sencilla mediante variables de entorno.

## Instalación

```bash
1. Clonar el repositorio.
2. Ejecutar el comando "npm i" para recuperar los modulos de Node
3. Ejecutar el comando "npm run dev"
4. Configurar el enlace del webhook del repositorio (asegurase que este         desplegado y sea publico).
5. Crear un servidor de Discord.
6. Crear un bot de webhooks y obtener la URL.
7. Pegar esa URL en la variable de entorno "DISCORD_WEBHOOK_URL"
```
