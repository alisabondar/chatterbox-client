// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.

    // iterate through Rooms._data
    //
    _.template(`
      <div class="chat">
        <div class="username"><%=user%></div>
        <div class="text"><%=text%></div>
      </div>
    `)
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // display roomname in dropdown
    // and display all messages in room

    // var $roomElement = $('<div>').text(roomname.text).addClass('room');
    // this.$select.append($roomElement);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    // want to get into #rooms

    // capture the selected room in a variable
    RoomsView.$select.append(`<option>${Rooms.currentRoom}<option>`);


  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // some magic jquery stuff = newVariable
    var newRoom = $("#message").val();
    // calls the rooms.selectedRoom(newVariable)
    Rooms.selectedRoom(newRoom);
    // updates the room dropdown to show in text box
    handleChange();
    // clear the input box?
  }

};
