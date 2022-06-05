const express = require("express")

const userRouter = require("./src/routes/moviesRoutes")

const Leite = require("leite")
const leite = new Leite()

const app = express()
const port = 3000

app.use(userRouter)
app.use(express.json())

app.get('/', (req,res) => {
    res.send(leite.pessoa.nome())
})


app.listen(port, () =>{
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})