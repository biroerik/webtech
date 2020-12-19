$(document).ready(function () {
  $.getJSON(
    "https://dolgozok-8244d-default-rtdb.firebaseio.com/employe.json",
    function (data) {
      console.log(data);
      var table = $("#EmpsTable");
      $.each(data, function (key, value) {
        var row = $("<tr></tr>");
        var keyCell = $("<td>" + key + "</td>");
        var nameCell = $("<td>" + value.name + "</td>");
        var saleryCell = $("<td>" + value.salery + "</td>");
        var roleCell = $("<td>" + value.role + "</td>");
        var ageCell = $("<td>" + value.age + "</td>");
        var educationCell = $("<td>" + value.education + "</td>");
        $(row).append(keyCell);
        $(row).append(nameCell);
        $(row).append(saleryCell);
        $(row).append(roleCell);
        $(row).append(ageCell);
        $(row).append(educationCell);
        $(table).append(row);
      });
    }
  );
  var empForm = $("#EmpsForm");
  console.log(empForm);
  empForm.submit(function (event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
    var formData = $(this).serializeArray();
    console.log(formData[0].value);
    var requestData = {
      name: formData[1].value,
      salery: formData[2].value,
      role: formData[3].value,
      age: formData[4].value,
      education: formData[5].value,
    };
    console.log(requestData);
    $.ajax({
      type: "DELETE",
      url:
        "https://dolgozok-8244d-default-rtdb.firebaseio.com/employe/" + formData[0].value+".json",
      data: JSON.stringify(requestData),
      contentType: "application/json",
    });
    $.ajax({
      type: "POST",
      url: "https://dolgozok-8244d-default-rtdb.firebaseio.com/employe.json",
      data: JSON.stringify(requestData),
      contentType: "application/json",
    })
      .done(console.log)
      .fail(console.log);
      
  });
});
