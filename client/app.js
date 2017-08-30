// window.alert("JS file is connected")

  let socket = io();

  $('form').on('submit',function () {
    let message = $('#message').val();
    let initials = $('#initials').val();

    let fullmsg = {'name': initials, 'text': message}
    socket.emit('message', fullmsg);
    $('#message').val('');
    $('#initials').val('');
    return false;
  })

  socket.on('message', function (msg) {
    $('<li>').text(`${msg.name} says: ${msg.text}`).appendTo('#history');
  });
