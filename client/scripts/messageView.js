// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
<<<<<<< HEAD
        <div class="username"></div>
        <div class="message">${Parse.readall()}</div>
=======
        <div class="username"><%=user%></div>
        <div class="text"><%=text%></div>
>>>>>>> pair
      </div>
    `)
};