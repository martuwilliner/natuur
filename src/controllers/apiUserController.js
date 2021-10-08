const {User} = require("../database/models");

const apiUserController = {
    index: async (req,res) => {
        try {
            const user = await User.findAll()
            return res.status(200).json({
                total: user.length,
                users: user,
                status: 200
            })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = apiUserController;