const path = require('path');
const  express = require('express');
const http = require('http');
const socketIO  = require('socket.io');

const publicPath = path.join( __dirname,'../public');
var app = express();
const port = process.env.PORT||3000

app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);


io.on('connection',()=>{
	console.log('New User connected');

	socket.on('disconnect',()=>{
		console.log('client disconnected');
	})
});


server.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
});



