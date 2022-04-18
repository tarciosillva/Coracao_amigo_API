const Voluntary = require('../models/Usuario')

class VoluntaryRepository {
    async newVoluntary(objectVoluntary) {
        try {
            await Voluntary.create(objectVoluntary).then((result) => {
                return result
            })
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listAllVoluntary() {
        try {
            await Voluntary.findAll().then((result) => {
                return result
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new VoluntaryRepository()