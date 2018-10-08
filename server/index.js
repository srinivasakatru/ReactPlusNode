const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send({hi:'full stack developers'});
});

const PORT = process.env.PORT || 8010;
app.listen(PORT);