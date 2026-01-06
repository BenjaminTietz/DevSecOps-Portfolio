---
id: wordpress
title: WordPress
sidebar_label: WordPress
sidebar_position: 5
---

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition link="https://github.com/BenjaminTietz/wordpress-docker" text="Github Repository" type="info">
**Reach me out via** [LinkedIn](https://www.linkedin.com/in/benjamin-tietz/)**,** [Portfolio Contact Form](https://benjamin-tietz.com/#contactMe) **or** [Drop me a mail](mailto:mail@benjamin-tietz.com)
</GithubLinkAdmonition>
# WordPress Dockerized

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Quickstart](#quickstart)
4. [Usage](#usage)
5. [Environment Variables](#environment-variables)
6. [Contact](#contact)
7. [Checklist](https://github.com/BenjaminTietz/wordpress-docker/blob/main/checklist.pdf)

---

## Project Description

This repository provides a minimal and functional Docker-based setup for running WordPress locally. It uses the official WordPress and MariaDB containers via Docker Compose. All content is persisted using volumes, and the setup is ready to be deployed via Docker with a custom (optional) `.env` configuration.

---

## Prerequisites

```sh
sudo apt update && sudo apt install -y docker.io
```

---

## Project Structure

```
wordpress/
├── docker-compose.yml
├── .env                # Environment variables (manually created)
├── .gitignore
└── README.md
```

---

## Quickstart

1. **Install dependencies:**

```sh
sudo apt update && sudo apt install -y docker.io docker-compose git
```

2. **Clone the repository:**

```
git clone https://github.com/BenjaminTietz/wordpress-docker.git
cd wordpress-docker

```

---

3. **Generate and configure the .env file:**

The environment file will be created automatically from template.env.
Adjust the values to match your setup (optional):

```sh
cp template.env .env
nano .env (optional)
```

---

4. **Start the project:**

```
docker compose up -d
```

5. **Access WordPress:**

Visit in your browser:

```
http://localhost:8080
```

Or, if deployed on a remote VM:

```
http://<your-vm>:8080
```

## Usage

### **Environment Variables**

All WordPress and MySQL credentials are configured via environment variables defined in the `.env` file:

Example:

```env
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wp_user
WORDPRESS_DB_PASSWORD=wp_pass
WORDPRESS_DB_HOST=db:3306

MARIADB_ROOT_PASSWORD=rootpass
MARIADB_DATABASE=wordpress
MARIADB_USER=wp_user
MARIADB_PASSWORD=wp_pass
```
