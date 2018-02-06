var express = require('express');
var mongoose = require('mongoose');
var Naveen = require('./employee');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect('mongodb://localhost:27017/NaveenDB',function(err)
{ 
	if(err)
	{  
		console.log("DB Error"+err); 
	}
	else 
	{     
		console.log("MongoDB connected");
	
	
	app.get('/insertData',function(req,res)
	{
		res.sendFile( __dirname + "/create.html" );
	});

	app.post('/api/insert', function(req, res) 
	{
		var employee ={
			_id: req.body.eEmail,
			eName: req.body.eName,
			eEmail: req.body.eEmail,
			ephno: req.body.ephno,
			addrees: req.body.addrees
        }
		console.log(employee);
		insertEmployee(employee, function(createData)
		{
			
			res.json(createData);
		});
	
	});

	var insertEmployee = function(createData, callback)
	{
		Naveen.create(createData, function(err, employee) 
		{
			if (employee) 
			{
				response = 
				{
					"result": "Data inserted succesfully"
				}
				callback(response);
			} else 
			{
				error = {
					"error": "Sorry insertion failed"
				}
				callback(error);
			}
		});
	}

	app.post('/api/retrieve', function(req, res) 
	{
		var employee ={
			_id: req.body.eEmail,
			eEmail: req.body.eEmail,
			
		}
		getEmployee(employee, function(showData)
		{
			res.json(showData);
		});
	
	});

	var getEmployee = function(showData, callback)
	{
		Naveen.find(showData, function(err, employee) 
		{
			if (employee) 
			{
				response = {
					"output": employee
				}
				console.log(response)
				callback(response);
			} else 
			{
				error = {
                "error": "No data found"
				}
				callback(error);
			}
		});
	}

	app.post('/api/update', function(req, res) 
	{
		var employee = {
			_id: req.body.eEmail,
			eName: req.body.eName,
			eEmail: req.body.eEmail,
			ephno: req.body.ephno,
			addrees: req.body.addrees
			}
			console.log(employee);
			updateEmployee(employee, function(updateData)
			{
				res.json(updateData);
			})
	})
   
	var updateEmployee = function(updateData, callback)
	{
		var id = updateData.eEmail;
		var id1 = updateData.eName;
		var id2 = updateData.ephno;
		var id3 = updateData.addrees
		console.log(id1)
		Naveen.findOneAndUpdate({"eEmail":id}, {$set:{"eName":id1,"ephno":id2,"addrees":id3}}, function(err, employee) 
		{
			if (employee) 
			{
				response = {
                "result": employee
				}
				callback(response);
				console.log(response)
			} else
			{
			error = {
                "error": "Sorry update failed"
				}
				callback(error);
			}
		});
	};
		app.post('/data', function(req, res) {
			console.log("hi");
    var id = req.body.sEmail;
	console.log(id);
    Naveen.remove(id, function(err, student) {
        if (!err) {
            response = {
                "result": "Student Record has been deleted!"
            }
            res.json(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
        }
    });
});
	}

});

app.listen(1995,function(){
console.log('Server is running on port: 1995');
});
