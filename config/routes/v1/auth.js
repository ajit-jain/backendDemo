const authController = require('./../../../app/controller/auth'); 
module.exports = [
    {
        type:'GET',
        address:'/gettwitterDailog',
        controller:[authController.getTwitterLogin]
    },
    {
        type:'POST',
        address:'/getUser',
        controller:[authController.getUser]
    }
]