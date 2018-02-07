var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

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

        resp.status(200).send();
    }catch (err) {
        console.log("Error - " + err);
        resp.status(404).send();
    }

})



app.listen(1337, function(){
	console.log('listening 1337');
});
