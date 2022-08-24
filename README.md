# Overview

This repository is an E-Commerce API used as my `Principle of Database Management` and `Web Application Development` projects at International University (HCMIU). In order to not waste time on system design, I decided to make it based on [Shopee](https://shopee.vn). Because of API's simplicity, only some of Shopee basic features are covered in the project.

# Features

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
    - [x] Email verification
    - [x] Password reset
- [x] User account management
    - [x] Profile
    - [x] Addresses
    - [x] Bank accounts
    - [x] Credit cards
- [x] Shop management
    - [x] Profile
    - [x] Products
    - [x] Orders
    - [x] Statistics
- [ ] Discount management
    - [x] Wholesale price
    - [ ] Apply voucher
    - [ ] Discount product
- [x] Product management
    - [x] CRUD
    - [x] Searching (currently using Wildcard Characters - Elasticsearch in future)
    - [x] Review
- [x] Order management
    - [x] CRUD
    - [x] Progress
- [ ] Payment management
    - [ ] Credit card
    - [ ] On delivered

# Tools And Technologies

- [Laravel (PHP Framework)](https://laravel.com)
- [NGINX Web Server](https://en.wikipedia.org/wiki/Nginx)
- [PHP-FPM](https://www.php.net/manual/en/install.fpm.php)
- [PostgreSQL](https://www.postgresql.org)
- [Adminer](https://www.adminer.org)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose)
- [Kubernetes](https://kubernetes.io)
- [minikube](https://minikube.sigs.k8s.io/docs)
- [kubectl](https://kubernetes.io/docs/tasks/tools)
- [Terraform](https://www.terraform.io)
- [Microsoft Azure](https://azure.microsoft.com/en-us)
- [Github Actions](https://github.com/features/actions)
- [draw.io](https://app.diagrams.net)

# Details

## Use Case Diagram

Updating...

## Database Design

I just referred to Shopee's workflows and assumed that the tables below are used in their system, so the design may not be the same as theirs.

![E-commerce Database Design](/docs/img/database.jpg)

## API Documentaion

Read [here](https://tp-o.github.io/e-commerce-api).

# Setup

## Clone repo

```bash
$ git clone git@github.com:tp-o/e-commerce-api.git

$ cd e-commerce-api
```

### Run with Docker Compose

> Install Docker & Docker Compose: [https://docs.docker.com/desktop/#download-and-install](https://docs.docker.com/desktop/#download-and-install)

```bash
$ cp .env.example .env
```

Then fill in:
- `DB_DATABASE`, `DB_USERNAME` and `DB_PASSWORD` to connect database.
- `MAIL_` to make emailing functions work.
- `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET` if you want users to be able sign in with Facebook (the same with Google and Github).

```bash
$ docker-compose -f docker-compose.demo.yml up -d --build

$ docker-compose -f docker-compose.demo.yml exec api php artisan key:generate

$ docker-compose -f docker-compose.demo.yml exec api php artisan migrate --seed
```

Access `https://127.0.0.1/api/v2` or `https://localhost/api/v2` to interact with the API endpoints.

### Run with minikube

> Install Docker: [https://docs.docker.com/desktop/#download-and-install](https://docs.docker.com/desktop/#download-and-install)

> Install minikube: [https://minikube.sigs.k8s.io/docs/start/](https://minikube.sigs.k8s.io/docs/start)

> Install kubectl: [https://kubernetes.io/docs/tasks/tools/](https://kubernetes.io/docs/tasks/tools)

```bash
$ minikube start
```

```bash
$ cd .infrastructure/local
```

[Next steps](https://github.com/tp-o/e-commerce-api/tree/2.x.x/.infrastructure/local)

### Run with AKS

> Install Terraform: [https://learn.hashicorp.com/tutorials/terraform/install-cli](https://learn.hashicorp.com/tutorials/terraform/install-cli)

```bash
$ cd .infrastructure/azure
```

[Next steps](https://github.com/tp-o/e-commerce-api/tree/2.x.x/.infrastructure/azure)

# Contributors

## Version 1.x.x (Principle of Database Management project)

<table>
  <tr>
    <td align="center"><a href="https://github.com/nhatnguyen510"><img src="https://avatars.githubusercontent.com/u/71200617?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nhatnguyen510</b></sub></a></td>
    <td align="center"><a href="https://github.com/Titactics"><img src="https://avatars.githubusercontent.com/u/71199588?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Titactics</b></sub></a></td>
    <td align="center"><a href="https://github.com/duythinh26"><img src="https://avatars.githubusercontent.com/u/67096386?v=4?s=100" width="100px;" alt=""/><br /><sub><b>duythinh26</b></sub></a></td>
  </tr>
</table>

## Version 2.x.x (Web Application Development project)

<table>
  <tr>
    <td align="center"><a href="https://github.com/thanhson1207"><img src="https://avatars.githubusercontent.com/u/68525507?v=4?s=100" width="100px;" alt=""/><br /><sub><b>thanhson1207</b></sub></a></td>
    <td align="center"><a href="https://github.com/thuongtruong1009"><img src="https://avatars.githubusercontent.com/u/71834167?v=4?s=100" width="100px;" alt=""/><br /><sub><b>thuongtruong1009</b></sub></a></td>
  </tr>
</table>

# License

- ##### This project is distributed under the [MIT License](LICENSE).
- ##### Copyright of [@TP-O](https://github.com/TP-O), 2022.
