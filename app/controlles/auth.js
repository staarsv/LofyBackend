const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

//TODO: Login!
const loginCtrl = async(req, res) => {
    try {

        const mockUser = {
            name: 'EstrellaSV',
            email: 'estrella@lofy.com',
            password: '12345678',
            avatar: 'https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2019/08/de-donde-salio-el-meme-del-gato-en-la-mesa-portada.jpg'
        }

        const { email, password } = req.body


        if (mockUser.email !== 'estrella@lofy.com') {
            res.status(404)
            res.send({ error: 'Usuario no enconetrado :(' })
        }

        const checkPassword = (mockUser.password === password)

        
        const tokenSession = await tokenSign(mockUser) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: mockUser,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Contraseña incorrecta'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
}


//Registrar
const registerCtrl = async(req, res) => {
    try {
        // Datos que envias desde el front (postman)
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) // (123456)
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }