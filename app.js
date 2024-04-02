const express = require('express');

require('dotenv').config;
const mongoose = require(`mongoose`);
const app = express();


app.set(`view engine`, `ejs`);
app.set(`view engine`, `/views`);

app.use(express.static(`public`));

const url="mongodb+srv://chukwudiossai1974:Chukwudi1@cluster0.tt8vgje.mongodb.net/";




mongoose.connect(url)
.then(() =>{
  console.log(`Connected to MongoDB Database`);
})
.catch((err) =>{
  console.log(`Error connecting to the database: ${err}`)
})








const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{

  console.log(`Successfully connected to ${PORT}`);

});