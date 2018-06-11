const Twitter = require('./../../config/services/authProvider/twitter');
module.exports = {
    async getTwitterLogin(req,res){
        let twitter = new Twitter();
        let link = await twitter.getDailogLink();
        res.send({link});
    },
    async getUser(req,res){
        let twitter = new Twitter();
        let user = await twitter.getUser(req.body);
        res.send({user});
    }
}