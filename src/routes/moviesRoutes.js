const express = require("express")
const userController = require("../controllers/movieControllers")
const userRouter = express.Router()
const Leite = require("leite")

const leite = new Leite()

//CREATE -> C
userRouter.post('/users',userController.createUser)

// READ -> R
userRouter.get('/users',userController.findUserAll)

userRouter.get('/users/:id',userController.findUserId)

//UPDATE -> U
userRouter.put('/users/:id',userController.updateUser)

//DELETE -> D
userRouter.delete('/users/:id',userController.deleteUser)


module.exports = userRouter