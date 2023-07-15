// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  currentRoom: undefined,
  /*
  [ roomName1, roomName2, roomName3 ]
  */

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  // use current room data to generate room list and then user can add room through same input box

  add: function(messages) {
    // rewrites _.data array with data from server

    for (var i = 0; i < messages.length; i++) {
      Rooms._data.push(messages[i].roomname);
    }
  },

  // add: function(newRoom) {
  //   // push new room into data array
  //   Rooms._data.push(newRoom);
  //   Rooms.selectedRoom(newRoom);
  //   RoomsView.render();
  //   // make dropdown display newRoom
  // }

  selectedRoom: function(selectedRoom) {
    Rooms.currentRoom = selectedRoom;
  }
};