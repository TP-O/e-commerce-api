# Overview

This repository is a E-Commerce API used as my Principle of Database Management project at International University (HCMIU). Read more about this repository [here](https://github.com/tpo-project/e-commerce-api/tree/2.x.x/docs).

# Setup

## Step 1: Create .env file

```bash
$ cp .env.example .env
```

Fill in:
- `DB_DATABASE`, `DB_USERNAME` and `DB_PASSWORD` to connect database.
- `MAIL_USERNAME`, `MAIL_PASSWORD` and `MAIL_FROM_ADDRESS` to make emailing functions work.
- `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET` if you want users to be able sign in with Facebook (the same with Google and Github).

## Step 2: Start containers

```bash
$ docker-compose -f docker-compose.prod.yml up
```

## Step 3: Create secret key

```bash
$ docker-compose -f docker-compose.prod.yml exec api php artisan key:generate
```
