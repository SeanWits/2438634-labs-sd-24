const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`it's alive on http://localhost:${PORT}`)
});

app.get('/tshirt', (req, res)=> {
    res.status(200).send({
        tshirt: 'RAW',
        size: 'L'
    })
});

app.post('/tshirt/:id', (req,res) => {

    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(418).send({message: 'we need a logo!'})
    }

    res.send({
        tshirt: `RAW with ${logo} and ID: ${id}`,
    });
});