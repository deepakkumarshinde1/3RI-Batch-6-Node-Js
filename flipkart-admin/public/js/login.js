$(function () {
  $("#login-form").on("submit", function (event) {
    event.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();

    $.ajax({
      url: "/api/check-login",
      method: "post",
      data: { username, password },
    })
      .done(function (data) {
        if (data.status === true) {
          alert("Login Successfully");
          window.location.assign("/");
        }
      })
      .fail(function (error) {
        console.log(error);
      });
  });
});
