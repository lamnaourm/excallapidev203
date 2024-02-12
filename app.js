import express from "express";

const app = express();
const port = 3000

app.use(express.json())

app.get('/home/:id', (req, res) => {
    console.log(req.body)
    res.send('GET - OK.............' + req.params.id)
})

app.post('/home', (req, res) => {
    res.status(203).json({id:1,message:'sdsds'})
})

app.delete('/home', (req, res) => {
    res.send('DELETE - OK.............')
})

app.listen(port, (error) => {
    if(!error)
        console.log('Serveur lance au port 3000')
    else
        console.log('erreur de lancement de serveur')
}
)