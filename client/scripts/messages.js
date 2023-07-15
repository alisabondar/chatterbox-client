// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  add: function(messages) {
    messages.forEach(function(message) {
      // console.log('single message:', message);
      // can add more checks ie) anon user, null room
      if (message.text) {
        Messages._data.push(message);
      }
    });
  },

  get: function(id) {
    var result;
    Messages._data.forEach(function(message) {
      if (message[message_id] === id) {
        // possibly have to go back and add more once understand when this is used
        result = message.text;

      }
    })
    // console.log(result);
    return result;
  }

};

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
