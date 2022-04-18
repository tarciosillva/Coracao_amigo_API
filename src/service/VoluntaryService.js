const VoluntaryRepository = require('../Repository/VoluntaryRepository')

class VoluntaryService {
    async newVoluntary(voluntary) {
        try {
            const res = await VoluntaryRepository.newVoluntary(voluntary)
            return res
        } catch (error) {
            console.error(error)
            return error
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