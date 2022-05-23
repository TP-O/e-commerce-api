# Overview

This repository is an E-Commerce API used as my `Principle of Database Management` and `Web Application Development` projects at International University (HCMIU). In order to not waste time on system design, I decided to make it based on [Shopee](https://shopee.vn/). Because of API's simplicity, only some of Shopee basic features are covered in the project.

# Feature

- [x] Resource uploading
    - [x] Images
- [x] Authentication (user and admin)
    - [x] Sign-up
    - [x] Sign-in
        - [x] System account
        - [x] Facebook account
        - [x] Google account
        - [x] Github account
    - [x] Sign-out
    - [x] Email verification (only user)
    - [x] Password reset
- [x] User account management
    - [x] Profile
    - [x] Addresses
    - [x] Bank accounts
    - [x] Credit cards
- [ ] Shop management
    - [x] Profile
    - [x] Products
    - [ ] Orders
    - [ ] Statistics
- [ ] Product management
    - [ ] Searching
    - [x] CRUD
- [ ] Order management
    - [ ] Progress
- [ ] Payment management
    - [ ] Credit card
    - [ ] On delivered

# Technology

- [Laravel (PHP Framework)](https://laravel.com/)
- [NGINX Web Server](https://en.wikipedia.org/wiki/Nginx)
- [PHP-FPM](https://www.php.net/manual/en/install.fpm.php)
- [PostgreSQL](https://www.postgresql.org/)
- [Adminer](https://www.adminer.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Kubernetes](https://kubernetes.io/)
- [minikube](https://minikube.sigs.k8s.io/docs/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Terraform](https://www.terraform.io/)
- [Microsoft Azure](https://azure.microsoft.com/en-us/)
- [Github Actions](https://github.com/features/actions)
- [draw.io](https://app.diagrams.net/)

# Detail

## Database Design

I just referred to Shopee's workflows and assumed that the tables below are used in their system, so the design may not be the same as theirs.

![E-commerce Database Design](/docs/img/database.jpg)

## API Documentaion

Read [here](https://tpo-project.github.io/e-commerce-api/).

# Setup

## Clone repo
```bash
$ git clone git@github.com:tpo-project/e-commerce-api.git
```

### Run with Docker Compose

> Install Docker & Docker Compose

```bash
$ cp .env.example .env
```

Then fill in:
- `DB_DATABASE`, `DB_USERNAME` and `DB_PASSWORD` to connect database.
- `MAIL_` to make emailing functions work.
- `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET` if you want users to be able sign in with Facebook (the same with Google and Github).

```bash
$ docker-compose -f docker-compose.demo.yml up -d

$ docker-compose -f docker-compose.demo.yml exec api php artisan key:generate

$ docker-compose -f docker-compose.demo.yml exec api php artisan migrate --seed
```

Access `https://127.0.0.1/api/v2` or `https://localhost/api/v2` to interact with the API endpoints.

### Run with minikube

> Install Docker

> Install minikube

> Install kubectl

```bash
$ minikube start
```

```bash
$ cd .infrastructure/local
```

[Next steps](https://github.com/tpo-project/e-commerce-api/tree/2.x.x/.infrastructure/local)

### Run with AKS

> Install Terraform

```bash
$ cd .infrastructure/local
```

[Next steps](https://github.com/tpo-project/e-commerce-api/tree/2.x.x/.infrastructure/azure)

# Contributor

## Version 1.x.x (Principle of Database Management project)

- [duythinh26](duythinh26)
- [Titactics](https://github.com/Titactics)
- [nhatnguyen510](https://github.com/nhatnguyen510)

## Version 2.x.x (Web Application Development project)

- [thanhson1207](https://github.com/thanhson1207)
- [thuongtruong1009](thuongtruong1009)

# 📰 [License](LICENSE)

- ##### This project is distributed under the [MIT License](LICENSE).
- ##### Copyright of [@TP-O](https://github.com/TP-O), 2022.
