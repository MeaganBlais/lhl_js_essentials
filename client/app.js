// window.alert("JS file is connected")

$('form').on('submit',function () {
  var text = $('#message').val();
  alert(text);
  return false;
})
