$(document).ready(function() {
  $("#iceCreamFavorite").submit(function(event) {
    var flavors = ["flavor1", "flavor2", "flavor3"];

    flavors.forEach(function(flavor) {
      var userInput = $("input#" + flavor).val();
      $("#flavorFavoriteList").append("<li>" + userInput + "</li>")
    });

  event.preventDefault();
  });
});
