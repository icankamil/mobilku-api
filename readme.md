
# Mobilku test API

API Management data mobilku menggunakan Nodejs, dengan dukungan expressjs, sequelize, express-fileupload, sharp, body-parser, cookie-parser dan mysql, dengan menerapkan design pattern service repository.

## API Collection
API Collection terdapat dalam repo ini bernama APICollection.json

## Setup Project
Seperti biasa npm install terlebih dahulu, kemudian hubungkan projek dengan database mysql local dengan mengikuti konfigurasi di .env yang disediakan. setelah itu jalankan sequelize db:migrate.

## API Endpoint
Insert : ```POST | http://host/insert```

Update : ```PUT | http://host/update/:id```

Get Single : ```GET | http://host/get/:id```

Get All : ```GET | http://host/get```

Delete Single : ```DELETE | http://host/delete/:id```
