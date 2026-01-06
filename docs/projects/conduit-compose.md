---
id: conduit-compose
title: Conduit Compose
sidebar_label: Conduit Compose
sidebar_position: 3
---

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition link="- https://github.com/BenjaminTietz/conduit-compose" text="Github Repository" type="info">
**Reach me out via** [LinkedIn](https://www.linkedin.com/in/benjamin-tietz/)**,** [Portfolio Contact Form](https://benjamin-tietz.com/#contactMe) **or** [Drop me a mail](mailto:mail@benjamin-tietz.com)
</GithubLinkAdmonition>

# Conduit Containerized

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Quickstart](#quickstart)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [Checklist](https://github.com/BenjaminTietz/conduit-compose/blob/dev/checklist.pdf)

---

## Introduction

This repository provides a fully containerized setup for the **Conduit** full‑stack application  
(Angular frontend + Django REST backend) using Docker Compose.  
It demonstrates a practical containerization setup using Docker Compose,
with a focus on understanding how frontend and backend services
communicate in a real-world (and partly legacy) project.

---

## Project Structure

```
conduit-container/
├── docker-compose.yaml
├── .gitmodules             # Submodules: backend + frontend
├── backend/                # Django backend (git submodule)
├── frontend/               # Angular frontend (git submodule)
├── .env.template           # Environment variable template (root)
└── README.md
```

---

## Quickstart

### 1. Clone the repository (including submodules)

```sh
git clone --recurse-submodules https://github.com/BenjaminTietz/conduit-container.git
cd conduit-container
```

If you forgot `--recurse-submodules`:

```sh
git submodule update --init --recursive
```

# The submodule configuration does not rely on the default branches of the included repositories

### 2. Create your environment file

All backend and frontend configuration values are defined in a single `.env`
file located in the project root.

```sh
cp .env.template .env
```

Modify if needed.

---

### 3. Start the full stack

```sh
docker-compose up --build
```

Backend → http://localhost:8000  
Frontend → http://localhost:8282

---

## Environment Variables

The container uses `.env` to configure Django and PostgreSQL:

```env
# =====================
# Frontend (Angular)
# =====================
BACKEND_API_URL=http://backend:8000/api

# =====================
# Backend (Django)
# =====================
DJANGO_SECRET_KEY=changeme
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=*

CORS_ALLOWED_ORIGINS=http://localhost:8282,http://127.0.0.1:8282

POSTGRES_NAME=conduit
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=db
POSTGRES_PORT=5432

```

---

## Usage

### Backend (Django)

Run inside the backend container:

```
docker exec -it conduit_backend bash
python manage.py createsuperuser
```

---

### Frontend (Angular)

The production build is embedded in an NGINX container and served at:

```
http://localhost:8282
```

---

## Logging

All services log to stdout/stderr and are managed by Docker's json-file logging driver.
Log rotation is enabled to prevent excessive disk usage.

Logs can be accessed via:

```bash
docker logs conduit_backend
docker logs conduit_frontend
```

Logs can optionally be persisted by redirecting Docker logs to a file.

```
docker logs conduit_backend > conduit_backend-logs.txt
docker logs conduit_frontend > conduit_frontend-logs.txt
```
