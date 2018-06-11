
module.exports = function(router){

    configureRoutes(router,[require('./auth')]);
    return router;
}
function configureRoutes(router,routes){
    routes.forEach((route)=>{
        route.forEach(r=>{
            switch(r.type){
                case 'GET':
                    router.get(r.address,r.controller);break;
                case 'POST':
                router.post(r.address,r.controller);break;
            }
        })
    })
}