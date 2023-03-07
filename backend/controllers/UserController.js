const {User} = require("../models")

module.exports = {
    getUser(req, res){
        res.status(200).json("hello user")
    },

    signup(req, res){
        let data = req.body
        console.log(data)
        res.status(200).json("placeholder login")
    },
}