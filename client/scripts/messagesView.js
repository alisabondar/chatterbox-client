// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'), // assigns a js variable to html

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    //loop through messages data
    for (var i = 0; i < Messages._data.length; i++) {
      // might need to add later
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // console.log(message.username);
    // TODO: Render a single message.
    var user = message.username;
    var text = message.text;

    var renderedMessage = MessageView.render({'user': user, 'text': text});
    console.log('test', renderedMessage);

    var $messageElement = renderedMessage;
    this.$chats.append($messageElement);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    // data.message.username

    // message object = {
    //   username: 'Mel Brooks',
    //   text: 'I didn\'t get a harumph outa that guy.!',
    //   roomname: 'lobby'
    //    };

    // $username = $(chats.username)
    // $(selector).on("click", childSelector, data, function)
    // trigger toggleFriend method (App.username, $chats.username?) and add each other as friends (addFriend)

  }

};