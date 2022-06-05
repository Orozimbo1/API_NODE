const userController = {}
const Leite = require("leite")

const leite = new Leite()

const user_1 = {
    "Nome":leite.pessoa.nome(),
    "RG": leite.pessoa.rg(),
    "idade": leite.pessoa.idade()
}

const user_2 = {
    "Nome":leite.pessoa.nome(),
    "RG": leite.pessoa.rg(),
    "idade": leite.pessoa.idade()
}

const BANCO = [user_1, user_2]

userController.findUserAll = (req,res) => {
    res.send(BANCO)
}

userController.findUserId = (req,res) => {
    const newUser = req.params.id
    res.send(BANCO[newUser])
}

userController.createUser = (req,res) => {
    const newUser = {"Nome":leite.pessoa.nome(),"RG": leite.pessoa.rg(),"idade": leite.pessoa.idade()}
    BANCO.push(newUser)
    res.status(201).send(newUser)
}

userController.updateUser = (req,res) => {
    const userId = req.params.id
    const oldUser = BANCO[userId]
    const newUser = req.body
    BANCO[userId] = {...oldUser, ...newUser}
    res.send(BANCO[userId])
}

userController.deleteUser = (req,res) => {
    const userId = req.params.id
    BANCO[userId] = {}
    res.send(BANCO[userId])
}




module.exports = userController