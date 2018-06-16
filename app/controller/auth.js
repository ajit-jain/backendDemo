const Twitter = require('./../../config/services/authProvider/twitter');
module.exports = {
    async getTwitterLogin(req,res){
        try{
            console.log("get dialog route");
            let twitter = new Twitter();
            let link = await twitter.getDailogLink();
            res.send({link});
        }catch(e){
            res.status(500).send({
                success: false,
                error: e});
        }
        
    },
    async getUser(req,res){
        try{
            console.log("getUser route");
            let twitter = new Twitter();
            let {user,token} = await twitter.getUser(req.body);
            res.send({user,token,message:'Login Successful'});
        }catch(e){

            res.status(500).send({
                success: false,
                error: e});
        }
       
    }
}