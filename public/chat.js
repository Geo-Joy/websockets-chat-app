// Make Connection

const socket = io.connect('http://localhost:8888');

// Query DOM

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// Emit Events

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
});

message.addEventListener('keypress', msg =>{
    socket.emit('typing', handle.value);
});

//Listen for events

socket.on('chat', data =>{
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
    feedback.innerHTML = '';
});

socket.on('typing', data =>{
    feedback.innerHTML = '<p><em>' +data+ ' is typing a message... </em></p>';
});