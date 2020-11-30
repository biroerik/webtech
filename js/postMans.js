$(document).ready(function () {
  var myform =  $("#wasdesd")
  console.log(myform)
  myform.submit( function(e) {
    e.preventDefault();
    console.log(e);
    console.log(this);
    var json=$(this).serializeArray();
    console.log(json);
    // All of main() code can go in here
});

});