// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.


// is there where we implement escaping?
    // function escapeHTML(text) {
    //   var element = document.createElement('div');
    //   element.innerText = text;
    //   return element.innerHTML;
    // }

    // // Example usage
    // var userInput = '<script>alert("XSS attack!");</script>';
    // var escapedText = escapeHTML(userInput);
    // console.log(escapedText);

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.


    // read what is in the box - capture in variable
    var messageObject = {};
    messageObject.username = App.username;
    var input = $("#message").val();
    messageObject.text = input;

    // Messages.add to add to data structure
    // Messages.add([messageObject]);
    // console.log(Messages._data[Messages._data.length - 1]);

    var successCallback = function() {
      console.log('it worked!');
    }

    Parse.create(messageObject, successCallback);
    // re render data
    //MessagesView.renderMessage(messageObject);
    // above line does not seem to work
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};