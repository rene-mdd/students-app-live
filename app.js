const express = require("express");

const app = express();

// Routes
const studentRoutes = require("./routes/students");

app.use(express.json());
app.use('/api', function (req, res, next) {
	console.log(`Method: ${req.method} on route ${req.originalUrl}`)
    console.log(req.body)
	next()
})
app.use("/api/students", studentRoutes);


app.post("/api/students", (req, res)=>{
	fs.readFile('/data/students.json', (err, data) =>{
		var parsedData = JSON.parse(data);
		parsedData.push(req.body)
		fs.writeFile("/data/students.json", parsedData, function(err){
		if (err) throw err;
		console.log(data);
	} )
})

})

module.exports = app;
