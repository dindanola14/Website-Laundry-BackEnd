//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint nanti ditambahkan di sini
//endpoint member
const member = require('./routes/member');
app.use("/member", member)

//endpoint user
const user = require('./routes/user');
app.use("/user", user)

//endpoint outlet
const outlet = require('./routes/outlet');
app.use("/outlet", outlet)

//endpoint paket
const paket = require('./routes/paket');
app.use("/paket", paket)

//endpoint transaksi
const transaksi = require('./routes/transaksi');
app.use("/transaksi", transaksi)

//endpoint detail_transaksi
const detail_transaksi = require('./routes/detail_transaksi.js');
app.use("/detail_transaksi", detail_transaksi)

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})

