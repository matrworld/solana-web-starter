# Solana Web Starter Template
- React
- Tailwind
- DaisyUI
- Solana Wallet Adapter

## Develop
#### We use `pnpm` for packages
1. Install node 20+ if you don't have it: https://nodejs.org/en
2. Install pnpm if you don't have it: `npm i -g pnpm`.
3. Install NX CLI if you don't have it: `pnpm i -g nx`.

#### We use Nx to manage apps
https://nx.dev/getting-started/intro

#### We use Railway for hosting
https://railway.app/

## Development
Start apps by running `npx nx serve [appname]`.


### Web App
To start the included React app run `npx nx serve web`.

### Api
To start the included Fastify API run `npx nx serve api`.

### Lib
Put things you want shared across apps such as types and utilities in `./packages/lib`.

**Usage**

`import { lib } from "@template--solana-web-app/lib"`

### Add Apps
View the available NX generators here.
https://nx.dev/nx-api

## Deploy
To deploy the included apps on a platform like Railway, we use the following settings:

### Example Static Web App

**Build Command:** `npx nx build web`

**Watch Paths:** `/apps/web`

**Start Command:** `npx http-server ./dist/apps/web`

### Example Node API

**Build Command:** `npx nx build api`

**Watch Paths:** `/apps/api`

**Start Command:** `node ./dist/apps/api`

<hr>

**_WIP_**

_This is still a WIP. It would be nice to add example Anchor integration as well._