const Sequelize = require('sequelize')
const sequelize = new Sequelize('pessoa','root','',{dialect:'mysql',host:'localhost'});

sequelize.authenticate().then(function(){
    console.log("conexão realiazda com sucesso")
}).catch(function(error){
    console.log("Error"+error)


})