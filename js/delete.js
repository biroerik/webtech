$(document).ready(function () {
  var myform2 = $("#EmpsForm");
  myform2.submit(function (e) {
    e.preventDefault();
    var json = $(this).serializeArray();
    console.log(json[0].value);
    var obj = {
      _id: json[0].value,
    };
    console.log(obj);
    $.ajax({
      type: "DELETE",
      url:
        "https://dolgozok-8244d-default-rtdb.firebaseio.com/employe/" + json[0].value+".json",
      data: JSON.stringify(obj),
      contentType: "application/json",
    })
      .done(console.log)
      .fail(console.log);
  });
});
