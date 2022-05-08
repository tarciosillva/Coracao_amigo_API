const VoluntaryRepository = require('../Repository/VoluntaryRepository')
const bcript = require("bcrypt");
class VoluntaryService {
    async newVoluntary(voluntary) {
        const salt = bcript.genSaltSync(12);
        try {
            const hash = await bcript.hash(voluntary.senha, salt);
            voluntary.senha = hash
            const res = await VoluntaryRepository.newVoluntary(voluntary)
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async voluntaryId(id) {
        try {
            const res = await VoluntaryRepository.voluntaryId(id)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listAllVoluntaries() {
        try {
            const res = await VoluntaryRepository.listAllVoluntary()
            return res
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new VoluntaryService()