$(document).ready(function () {
  var empForm = $("#EmpsForm");
  console.log(empForm);
  empForm.submit(function (event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
    var formData = $(this).serializeArray();
    console.log(formData[0].value);
    var requestData = {
      name: formData[0].value,
      salery: formData[1].value,
      role: formData[2].value,
      age: formData[3].value,
      education: formData[4].value,
    };
    console.log(requestData);
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
