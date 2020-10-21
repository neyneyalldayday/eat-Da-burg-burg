$(function() {
    $("#eatme").on("click", function(event){
   
    let id = $(this).data("id");
    let burgId = id;
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgId
    }).then(function() {
        location.reload();
    });
});
$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var addBurg = {
        name: $("#burgburg").val().trim()
    }
    $.ajax("/api/burgers", {
        type: "POST",
        data: addBurg
    }).then(function() {
        location.reload();
    })
})
})