import openSocket from 'socket.io-client';
const socket = openSocket('http://chat.home:8000', {transports: ['websocket'], upgrade: false});

function subscribeToChat(cb) {
  console.log("Setting up the websocket..");
  socket.on('chat message', chat_message => cb(null, chat_message));
}

function unsubscribeFromChat() {
  //stop listening message
  socket.off('chat message', onMessage => console.log("LISTEN OFF: " + onMessage));
  socket.removeAllListeners();
}

function emitChatMessage(chat_message) {
  console.log("Emitting this message to the websocket " + socket.id + ": " + JSON.stringify(chat_message));
  socket.emit('chat message', chat_message);
}

export { subscribeToChat, emitChatMessage, unsubscribeFromChat };

api_key "AIzaSyCVgTBrHMK808-huXDbEsx5nDmyPwbxiLI"
        
