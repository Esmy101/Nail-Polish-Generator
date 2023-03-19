const {User} = require("../models")
const { signToken } = require("../utils/auth");

module.exports = {
    getUser(req, res){
        res.status(200).json("hello user")
    },

    async signup(req, res){
        let data = req.body
        console.log(data)
        const user = await User.create(data);

        if (!user) {
            return res.status(400).json({message: "something went wrong"})
        }

        const token = signToken(user);
        res.json({ token, user });
    },

    async login(req, res){
        let data = req.body
        console.log("searching for", data)
        const user = await User.findOne({email : data.email})

        if (!user){
            return res.json({message: "No user"})
        }

        const correctPassword = await user.isCorrectPassword(data.password)

        if (correctPassword && typeof correctPassword == "boolean"){
            const token = signToken(user);

            return res.status(200).json({ token, user });
        }
        else {
            return res.json({message: "Login error"})
        }

    },
}