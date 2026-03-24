# 🚀 Job Queue API

API backend desarrollada con Node.js para la creación y procesamiento de tareas en segundo plano mediante un enfoque **event-driven**. Permite a los usuarios crear jobs y consultar su estado en tiempo real.

---

## 📋 Descripción

Este proyecto implementa un sistema básico de **cola de trabajos (job queue)** donde:

- Los usuarios pueden crear tareas a través de la API
- Las tareas se procesan de forma asíncrona en segundo plano
- Se utiliza un sistema basado en eventos para desacoplar la creación del procesamiento
- Se puede consultar el estado y resultado de cada tarea

Este tipo de arquitectura es común en sistemas reales como:

- procesamiento de logs
- envío de emails
- generación de reportes
- pipelines de datos

---

## 🧠 Conceptos aplicados

Este proyecto está enfocado en reforzar fundamentos clave de backend:

- ⚡ **Asincronía y Event Loop**
- 📡 **Arquitectura Event-Driven**
- 🧩 **Separación de responsabilidades (Clean Architecture básica)**
- 🔄 **Procesamiento en segundo plano (background jobs)**
- 🧱 **Modularización del código**

---

## 🏗️ Estructura del proyecto

```
src/
 ├── controllers/    # Manejo de requests/responses HTTP
 ├── services/       # Lógica de negocio
 ├── routes/         # Definición de endpoints
 ├── events/         # EventEmitter central
 ├── listeners/      # Suscriptores a eventos
 ├── workers/        # Procesamiento de jobs
 ├── jobs/           # Almacenamiento en memoria
 └── config/         # Configuración general
```

---

## ⚙️ Funcionamiento

### 1. Creación de un Job

Cuando se crea una tarea:

- Se almacena en memoria
- Se emite el evento `createdJob`
- Un worker escucha este evento y procesa la tarea en segundo plano

```js
const job = {
  id: i++,
  status: "Pending",
  result: null,
};

addJobs(job);
emitter.emit("createdJob", job);
```

---

### 2. Procesamiento en segundo plano

El worker simula un proceso asíncrono:

```js
for (let i = 0; i < 10; i++) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
```

Al finalizar:

```js
job.status = "procesada";
job.result = "resuelta";
```

---

## 🔌 Endpoints

### ➕ Crear un job

**POST /jobs**

Crea una nueva tarea y dispara su procesamiento en segundo plano.

#### Response

```json
{
  "id": 1,
  "status": "Pending",
  "result": null
}
```

---

### 📄 Obtener todos los jobs

**GET /jobs**

Devuelve la lista completa de tareas.

---

### 🔍 Obtener job por ID

**GET /jobs/:id**

Devuelve el estado actual de una tarea específica.

#### Response

```json
{
  "id": 1,
  "status": "procesada",
  "result": "resuelta"
}
```

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- EventEmitter (arquitectura basada en eventos)

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/job-queue-api.git
cd job-queue-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm start
```

Servidor disponible en:

```
http://localhost:3000
```

---

## ⚠️ Limitaciones actuales

Este proyecto está diseñado con fines educativos, por lo que:

- Los jobs se almacenan **en memoria**
- No hay persistencia (se pierden al reiniciar)
- No hay control de concurrencia avanzado
- No hay sistema de reintentos

---

## 🔮 Posibles mejoras

- Persistencia con Redis / MongoDB / PostgreSQL
- Implementación de colas reales (BullMQ, RabbitMQ)
- Control de concurrencia (workers paralelos)
- Sistema de retries y manejo de errores
- Prioridad de jobs
- Logging estructurado
- Monitorización de jobs

---

## 🎯 Objetivo del proyecto

Demostrar conocimientos en:

- Diseño de APIs REST
- Arquitecturas desacopladas
- Procesamiento asíncrono en Node.js
- Organización de código escalable

---

## 👨‍💻 Autor

Desarrollado como parte del aprendizaje en backend con Node.js y sistemas asíncronos.

---

## 📌 Nota

Este proyecto representa una implementación simplificada de un sistema de colas, útil como base conceptual antes de trabajar con herramientas profesionales como BullMQ o sistemas distribuidos.

---
