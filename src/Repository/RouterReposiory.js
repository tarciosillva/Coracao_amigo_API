const Router = require('../models/Rota')

class RouterRepository {
    async newRouter(objectRouter) {
        try {
            const result = await Router.create(objectRouter)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listAllRoutes() {
        try {
            const routes = await Router.findAll()
            return routes
        } catch (error) {
            console.log(error)
        }
    }

    async listRouter(id) {
        try {
            await Router.findOne({
                id: id
            }).then((result) => {
                return result
            })
        } catch (error) {
            console.log(error)
        }
    }

    async listRegistersOfRoutes() {
        try {

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new RouterRepository()