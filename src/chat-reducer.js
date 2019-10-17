export const INCOMING_CHAT_HISTORY = "TODO"

const initialState = {
  chat_history: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCOMING_CHAT_HISTORY:
    return {
      ...state,
      chat_history: action.value
    }

    default:
      return state
  }
}

/* Not in use, as functionality was replaced by websockets. 
   Will keep the code for reference. */
export function getMessages() {
  console.log("Fetching messages from the API...");
  return dispatch => {
    return fetch("/api/message")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      const chat_history = json["chat_history"];
      dispatch({
        type: INCOMING_CHAT_HISTORY,
        value: chat_history
      })
    })
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
