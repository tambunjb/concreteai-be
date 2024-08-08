# <span id="tjidtitle">Account and Transaction</span>

<div>Technologies: <span id="tjidtechs">Node.js, Fastify, MongoDB, Supertokens, Docker, JavaScript</span></div>
<br />

START THE CONTAINER :
docker-compose up --build

ACCOUNT MANAGER: http://localhost:3000
- POST /register
- POST /login
- POST /account
- GET /accounts

PAYMENT MANAGER: http://localhost:3001
- POST /send
- POST /withdraw
- GET /transactions
- GET /transaction/:id

POSTMAN LINK
https://red-trinity-662156.postman.co/workspace/Public~a46612a0-17b5-4856-9e1d-f841bd0e023e/collection/1669089-52128928-b9d8-496c-9582-21365d817bbe?action=share&creator=1669089
