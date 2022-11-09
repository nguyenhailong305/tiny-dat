const Models = require('../model/index')
const fs = require('fs')

exports.getItem = async (req, res, next) => {
    try {
        const listData = await Models.find({})
        res.send({listData})
    } catch (error) {
        res.send(error)
    }
}

exports.addItem = async (req, res, next) => {
    try {
        const files = req.files
        const arrPicture = []
        for(let i = 0; i < files.length; i++) {
            const url = `http://localhost:3001/${files[i].filename}`
            arrPicture.push(url)
        }
        res.send({ arrPicture})
    } catch (error) {
        res.send(error)
    }
}
exports.addTiny= async (req, res, next) => {
    try {
        await Models.create({title : req.body.title , content : req.body.content })
        res.send({})
    } catch (error) {
        res.send(error)
    }
}

exports.deleteItem = async (req, res, next) => {
    try {
        const data = await Models.findByIdAndDelete(req.params.id)
        for(let i = 0; i < data.img.length; i++) {
            fs.unlinkSync(`media/${data.img[i].slice(22)}`)
        }
        res.send({})
    } catch (error) {   
        res.send(error)
    }
}


exports.updateItem = async (req, res, next) => {
    try {
        const data = await Models.findByIdAndUpdate(req.params.id , {title : req.body.title , content : req.body.content})
        for(let i = 0; i < data.img.length; i++) {
            fs.unlinkSync(`media/${data.img[i].slice(22)}`)
        }
        res.send({})
    } catch (error) {   
        res.send(error)
    }
}

