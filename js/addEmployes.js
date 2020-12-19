$(document).ready(function () {
  var empForm = $("#EmpsForm");
  console.log(empForm);
  empForm.submit(function (event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
    var json = $(this).serializeArray();
    console.log(json[0].value);
    var postData = {
      name: json[0].value,
      salery: json[1].value,
      role: json[2].value,
      age: json[3].value,
      education: json[4].value,
    };
    console.log(postData);
    $.ajax({
      type: "POST",
      url: "https://dolgozok-8244d-default-rtdb.firebaseio.com/employe.json",
      data: JSON.stringify(postData),
      contentType: "application/json",
    })
      .done(console.log)
      .fail(console.log);
  });
});
