// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
<<<<<<< HEAD
    var string = JSON.stringify(message);
    console.log(string);
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: string,
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to create messages', error);
      }
    })
=======
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
>>>>>>> pair
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, //endpoint
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',

      // not static methods
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};