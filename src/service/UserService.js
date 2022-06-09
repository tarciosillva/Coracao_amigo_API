const UserRepository = require('../Repository/UserRepository')
const bcript = require("bcrypt");
class UserService {
    async newUser(user) {
        const salt = bcript.genSaltSync(12);
        try {
            const hash = await bcript.hash(user.senha, salt);
            user.senha = hash
            const res = await UserRepository.newUser(user)
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async voluntaryId(id) {
        try {
            const res = await UserRepository.voluntaryId(id)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listAllVoluntaries() {
        try {
            const res = await UserRepository.listAllVoluntary()
            return res
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new UserService()