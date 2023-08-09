$(function () {
  $("#category-form").on("submit", function (event) {
    event.preventDefault();
    let category = $("#category").val();

    if (category === "") return false;

    $.ajax({
      url: "/api/save-new-category",
      method: "post",
      data: { name: category },
    })
      .done(function (data) {
        if (data.status === true) {
          alert("Category Saved Successfully");
          $("#category").val("");
        } else {
          alert(data.message);
        }
      })
      .fail(function (error) {
        console.log(error);
      });
  });

  $(".remove_cat").on("click", function () {
    let index = $(this).data("index");
    $.ajax({
      method: "delete",
      url: "/api/remove-category/" + index,
    })
      .done(function (data) {
        if (data.status) {
          alert(data.message);
          window.location.reload();
        } else {
          alert(data.message);
        }
      })
      .fail(function (error) {
        alert(error);
        console.log(error);
      });
  });

  $("#edit-category-form").on("submit", function (event) {
    event.preventDefault();
    let category = $("#editCategory").val();

    if (category === "") return false;

    $.ajax({
      url: "/api/update-category",
      method: "put",
      data: { name: category, id },
    })
      .done(function (data) {
        if (data.status === true) {
          Swal.fire({
            icon: "success",
            title: "Updated !!!",
            html: "Category Updated Successfully",
            timer: 3000,
            timerProgressBar: true,
            showCancelButton: false,
            showConfirmButton: false,
            willClose: () => {
              window.location.assign("/get-category-list");
            },
          });
        } else {
          alert(data.message);
        }
      })
      .fail(function (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.responseJSON.message,
        });
      });
  });

  $(".edit_cat").on("click", function () {
    let index = $(this).data("index");
    window.location.assign("/edit-category/" + index);
  });
});
