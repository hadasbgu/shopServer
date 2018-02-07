var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var queries = require("./queryForDB.js");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'sampledb',
});


connection.connect(function(error){
	if(error){
		console.log('Error');
	} else {
		console.log('Connected');
	}
})

// express wait for the user to enter a URL
app.get('/',function(req,resp){
	 try {
        resp.redirect('index.html');
    } catch (e) {
        console.log("Can't get Index file" );
        resp.status(404).send();
    }

})


app.get('/first', function(req,resp){
	connection.query("SELECT * FROM sampletable", function(err, result){
		if(err){
			console.log(err);
			result.status(400).send("DB error");
		}
		console.log(result);
	})

});


app.post('/login', function(req,resp){
 console.log("in login");
 console.log("req-\n" + req);
 try {
        var user_name = mysql.escape(req.body.username);
        /* user_name can be id or email */
        var password = mysql.escape(req.body.password);

        console.log('Got a login request from: \n' + user_name + "," + password);

		var query = queries.getUserByNicknameOrEmail(user_name,password);
		connection.query(query, function(err,ans){
            if (err) {
                console.log("err" + err);
                resp.status(400).send("ERROR IN LOGIN");
            }
            else {
                console.log("ans:" + ans);
                if (ans.length > 0) {
                    resp.status(200).json(ans);
                    console.log('OK');
                }
                else {
                    resp.status(204).send('ERROR');
                    console.log('No Such User!\n');
                }
            }

		});
     
    }catch (err) {
        console.log("Error - " + err);
        resp.status(404).send();
    }

});

app.post('/register', function(req,resp){
 console.log("in register");
 console.log("req-\n" + req);
 try {
        var user_name = mysql.escape(req.body.username);
        var user_email = mysql.escape(req.body.email);
        var password = mysql.escape(req.body.password);

        console.log('Got a register request from: \n'
         + user_name + "," + password +"," +user_email);

		var query = queries.registerUser(user_name,user_email,password);
		connection.query(query, function(err,ans){
            if (err) {
                console.log("err" + err);
                resp.status(400).send("Email Already Register!\n");
            }
            else {
                console.log("ans:" + ans);
                resp.status(200).json(ans);
                console.log('OK');
            }
        });
     
    }catch (err) {
        console.log("Error - " + err);
        resp.status(404).send();
    }

});




app.listen(1337, function(){
	console.log('listening 1337');
});
