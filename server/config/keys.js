if(process.env.NODE_ENV == 'production'){
    //Production
}
else{
    //Development
    module.exports =require('./dev');
}