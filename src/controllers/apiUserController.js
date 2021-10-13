const {User} = require("../database/models");

const apiUserController = {
    index: async (req,res) => {
        try {
            const user = await User.findAll()
            return res.status(200).json({
                count: user.length,
                users: [...user].map(({id,username,email}) => Object({
                    user_id:id,
                    name:username,
                    email:email,
                    url: `http://localhost:3100/api/users/${id}`
                })),
                status: 200
            })
        } catch (error) {
            res.send(error)
        }
    },
    show: async (req,res) => {
        try {
            const user = await User.findByPk(req.params.id)
            const {id,firstName,lastName,username,email,roll} = user
            return res.status(200).json({
                user_id:id,
                firstName:firstName,
                lastName:lastName,
                username:username,
                email:email,
                roll: roll != 1 ? 'Admin' : 'Client'
            })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = apiUserController;