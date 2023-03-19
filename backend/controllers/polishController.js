const jwt = require("jsonwebtoken");

const {User} = require("../models")
const { authMiddleware } = require("../utils/auth");

module.exports = {
    async getAllPolishes(req, res){
        const user = await User.findOne({_id:  req.user._id});
        res.json(user.savedPolishes)
    },
    async findPolish({user, params}, res){
        try {
            console.log()
            user = await User.findOne({_id: user._id});
            let polishes = user.savedPolishes

            let category = params.category?.toLowerCase()
            let type = params.type?.toLowerCase()
            console.log(category, type)
            let filteredList = []
            if (category) {
                polishes.forEach((item) =>{
                    if (item.category === category) {
                        filteredList.push(item)
                    }
                })
            }
            else if (type){
                polishes.forEach((item) =>{
                    if (item.type === type) {
                        filteredList.push(item)
                    }
                })
            }

            return res.json(filteredList)
        }
        catch (err){
            console.log(err);
            return res.status(400).json(err)
        }
    },
    async addPolish({user, body}, res){
        try{
            const updatedUser = await User.findOneAndUpdate(
                {_id: user._id},
                {$addToSet: {savedPolishes: body}},
                { new: true, runValidators: true }
                )


            return res.json(updatedUser.savedPolishes)
        }
        catch (err){
            console.log(err);
            return res.status(400).json(err)
        }


    },
    async removePolish({ user, params }, res){
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: {savedPolishes: {_id: params.polishID} }},
                { new: true }
                )
            return res.json(updatedUser.savedPolishes)
        }
        catch (err){
            console.log(err);
            return res.status(400).json(err)
        }
    },
    async modifyPolish({ user, params, body}, res){
        try {
            await User.findOneAndUpdate(
                { _id: user._id, "savedPolishes._id": params.polishID },
                { $set: {"savedPolishes.$": body}},
                { runValidators: true }
                )

            let updatedUser = await User.findOne({ _id: user._id})

            return res.json(updatedUser.savedPolishes)
        }
        catch (err){
            console.log(err);
            return res.status(400).json(err)
        }
    }
}