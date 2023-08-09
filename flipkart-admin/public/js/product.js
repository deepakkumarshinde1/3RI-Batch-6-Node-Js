$(function () {
  $("#product-form").on("submit", function (event) {
    event.preventDefault();
    let data = $(this).serializeArray();
    let formData = new FormData();
    data.forEach((formValue) => {
      formData.append(formValue.name, formValue.value);
    });
    let file = $("#p_image").prop("files")[0];
    formData.append("p_image", file);

    $.ajax({
      url: "/api/save-product",
      method: "post",
      processData: false,
      contentType: false,
      data: formData,
    })
      .done(function (data) {
        if (data.status === true) {
          alert("Product Saved Successfully");
        }
      })
      .fail(function (error) {
        console.log(error);
      });
  });
});
