# geofront

This is a monorepo to manage corporate website for GeoFront.

## packages

| package | description |
|---|---|
|[geohub.io](/sites/geofront.io/)|The main website for GeoFront|

## Setup

```bash
npm install -g pnpm
```

Then install the project dependencies by running the following command:

```bash
pnpm install
```

Install lefthook by the following command. This is required for the first time when you clone from Github.

```bash
pnpm lefthook install
```

```bash
pnpm --filter="./sites/geofront.io" dev
```

If your local computer can use Make command, the following commands can also be used for setup

```bash
make install
make dev
make build
```
