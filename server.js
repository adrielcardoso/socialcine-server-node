var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.send('Ola mundo');
});

io.on('connection', function(socket){

  console.log('a user connected');

	  socket.on('novamensagem', function(msg){

	  	var mensagem = msg.mensagem;
	  	var sou = msg.sou;

	  	console.log(mensagem);

	    io.emit("recebemensagem", msg);
	  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});