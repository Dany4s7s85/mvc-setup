const express = require('express');
const app = express()
const cors = require('cors');
const router = require('./routes/routes.js')

const port = 5000;

app.use('*',cors());
app.use(express.json());
app.use(router)


app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
  })


app.listen(port,()=>{
    console.log(`server running on ${port} port`)
})
