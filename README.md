## Fair AUTO

The fastest way to approve new customers requests.

Features

- [x] Create new customer

- [x] Create new customer's vehicle

## Endpoints

<details>
            <summary>
                <strong>GET</strong> /health
            </summary>

- it returns status <strong>200</strong> for succes
</details>

<details>
            <summary>
                <strong>POST</strong> /customers
            </summary>

- You need to send a body like this:

```JSON
{
    "name":"Rick",
    "lastName":"Sanches",
    "birthDate":"02/15/1975",//MM/DD/YYYY  must be 18 years at least
    "cpf":"16843218549" // 11 digits
}
```

- it returns status <strong>201</strong> for succes
</details>

<details>
            <summary>
                <strong>POST</strong> /vehicles
            </summary>

- You need to send a body like this:

```JSON
{
    "name":"Camaro",
    "licensePlate":"ar5t82",
    "purchaseDate":"12/10/2021",//MM/DD/YYYY
    "cpf":"00296049158" // 11 digits
}
```

- it returns status <strong>201</strong> for succes
</details>

## Technologies

<div style="display: flex; gap: 10px; height: 40px;">
  <a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
      <img src="https://user-images.githubusercontent.com/85591297/157519943-9da08e53-e59d-450a-8b0d-81af17974fd0.svg" alt="TypeScript" height="40"/>
  </a>
  <a title="Node JS" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" height="40"/> 
  </a>
  <a title="Express JS" href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="expressjs" height="40"/> 
  </a>
  <a title="Postgre" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> 
      <img style="background: green;" src="https://user-images.githubusercontent.com/85591297/157520309-59a18d2e-ee4d-433c-8990-12fdbba37a0d.svg" alt="Postgre" height="40"/> 
  </a>
  <a title="Prisma" href="https://www.prisma.io/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://miro.medium.com/max/1400/1*X6wCDTpjcn_WcvDW9jS4WQ.png" alt="Prisma" height="40"/> 
  </a>
</div>

## Requirements

### [npm](https://www.npmjs.com/)

<details>
    <summary>install npm</summary>

```bash
wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh> | bash

## Or this command
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Close and open terminal
nvm install --lts
nvm use --lts
# Verify node version
node --version # Must show v14.16.1
# Verify npm version
npm -v
```

</details>

### [postgreSQL](https://www.postgresql.org/)

<details>
    <summary>install postgres</summary>

```bash
sudo apt install postgresql postgresql-contrib
```

</details>

## How to run

1. Clone this repository
2. Install dependencies

```bash
npm i
```

3. set your .env file

4. Create database with prisma

- open terminal and run

```bash
npx prisma init
npx prisma migrate dev
```

5. Run the project with

```bash
npm run start (deploy)
```

6. Run the project in development mode (nodemon)

```bash
npm run dev
```
