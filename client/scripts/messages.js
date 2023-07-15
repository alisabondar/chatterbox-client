// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  add: function(messages) {
    Messages._data = [];
    for (var i = 0; i  < messages.length; i++) {
      Messages._data.push(messages[i]);
    }
  },

  get: function(id) {
    var result;
    Messages._data.forEach(function(message) {
      if (message[message_id] === id) {
        // possibly have to go back and add more once understand when this is used
        result = message.text;
      }
    })
    return result;
  }

};

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
