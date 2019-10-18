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
{
  "project_info": {
    "project_number": "61216389060",
    "firebase_url": "https://marine-infinity-244511.firebaseio.com",
    "project_id": "marine-infinity-244511",
    "storage_bucket": "marine-infinity-244511.appspot.com"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:61216389060:android:a34706310a2c4f78",
        "android_client_info": {
          "package_name": "com.gladstar.gladstargtschool"
        }
      },
      "oauth_client": [
        {
          "client_id": "61216389060-4u847t7dkd80gbvrlk1turov9npmgpmt.apps.googleusercontent.com",
          "client_type": 3
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyCVgTBrHMK808-huXDbEsx5nDmyPwbxiLI"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "61216389060-4u847t7dkd80gbvrlk1turov9npmgpmt.apps.googleusercontent.com",
              "client_type": 3
            }
          ]
        }
      },
      "admob_app_id": "ca-app-pub-7518766331039540~2240433268"
    }
  ],
  "configuration_version": "1"
}
