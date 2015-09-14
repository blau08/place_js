

$(document).ready(function() {
  $("#add-place").click(function() {
    $("#new-place").append('<div class="form-group">' +
                              '<input type="text" class="form-control new-description" placeholder="Description">' +
                          '</div>');
  });
  $("form#new-place").submit(function(event) {
      event.preventDefault();

      var inputtedLocation = $("input#new-location").val();
      var inputtedDate = $("input#new-date").val();
      var inputtedDescription = $("input#new-description").val();

      var newContact = { location: inputtedLocation, date: inputtedDate, description: inputtedDescription, addresses: [] };

      // $(".new-address").each(function() {
      //   var inputtedStreet = $(this).find("input.new-location").val();
      //   var inputtedCity = $(this).find("input.new-date").val();
      //   var inputtedState = $(this).find("input.new-description").val();
      //
      //   var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      //   newContact.addresses.push(newAddress);
      // });


      $("ul#places").append("<li><span class='place'>" + newContact.location + "</span></li>");

      $(".place").last().click(function() {
        $(".show-place").show();

        $(".show-place h2").text(newContact.location);
        $(".date").text(newContact.date);
        $(".description").text(newContact.description);

        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>" + "<br>");
        });
      });

      $("input#new-location").val("");
      $("input#new-date").val("");
      $("input.new-description").val("");
      // $("input.new-city").val("");
      // $("input.new-state").val("");
    });
  });
