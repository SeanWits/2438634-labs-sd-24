const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`live on http://localhost:${PORT}`);
});

app.get('/app', (req,res) =>{
   res.status(200).send({
    stuff: "stuff"
   })
});