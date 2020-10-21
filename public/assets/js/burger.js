$(function() {
    let id = $(this).data("id");
    let burgId = id;
    $ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgId
    }).then(function() {
        location.reload();
    });
});
$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurg = {
        name: $("#burgburg").val().trim()
    }
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
    }).then(function() {
        location.reload();
    })
})