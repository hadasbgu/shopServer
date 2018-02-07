var express = require('express');
var mysql = require('mysql');


var app = express();

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

app.listen(1337, function(){
	console.log('listening 1337');
});
