require("dotenv").config();
const jwt = require("jsonwebtoken");

class JwtAutenticate {
    async autenticate(request, response, next) {
        const authToken = request.headers["authorization"];

        if (authToken != undefined) {
            const bearer = authToken.split(" ");
            var token = bearer[1];
           
            jwt.verify(token, process.env.SECRET, (err, data) => {
                if (err) {
                    console.log(err)
                    response.status(401);
                    response.send(err);
                } else {
                    request.token = token;
                    request.loggedUser = {
                        id: data.id,
                        perfil: data.perfil
                    };
                    next();
                }
            });
        } else {
            response.status(400);
            response.send("Credencias de autenticação não foram providas");
        }
    }
}

module.exports = new JwtAutenticate();