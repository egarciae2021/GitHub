const express = require('express')
const app = express()
app.use(express.json)
app.get('/',(req,res)=>{
res.send("Hola mundo")
})
app.get('/traer',(req,res)=>{
    res.json(
    {
        autor:'demo',
        clave:'demo'
    }
    )
})

app.post('/crear',(req,res)=>{
    console.log(req.body)
    res.send("hecho")
})

app.listen(65432,()=>{
    console.log("Servidor en linea")
})