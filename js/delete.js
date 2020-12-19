$(document).ready(function () {
  var empForm = $("#EmpsForm");
  empForm.submit(function (event) {
    event.preventDefault();
    var formData = $(this).serializeArray();
    console.log(formData[0].value);
    var requestData = {
      id: formData[0].value,
    };
    console.log(requestData);
    $.ajax({
      type: "DELETE",
      url:
        "https://dolgozok-8244d-default-rtdb.firebaseio.com/employe/" + formData[0].value+ ".json",
      data: JSON.stringify(requestData),
      contentType: "application/json",
    })
      .done(console.log)
      .fail(console.log);
  });
});
