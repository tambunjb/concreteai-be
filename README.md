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
https://www.postman.com/red-trinity-662156/workspace/public/collection/1669089-52128928-b9d8-496c-9582-21365d817bbe?action=share&creator=1669089
