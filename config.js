//configuracion puerto

module.exports = {
    port: process.env.PORT || 3001,
    db:   process.env.MONGODB || 'mongodb://localhost:27017/shop',
    
    //es recomendable que sea un código más largo
    SECRET_TOKEN: 'miclavedetokens'
}