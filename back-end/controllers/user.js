let connection = require("../config/db");

const addUser = (email,pass)=>
{
	console.log(email+" "+pass)
    connection.query("insert into user values(null,?,?)",[email,pass],(err,result)=>{
        if(err){
            return {
            	error:true,
            	errorSystem:true
            }
        }else{
        	console.log(result)
            return result
        }
    })
};


module.exports = addUser;