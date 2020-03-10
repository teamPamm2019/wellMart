// Global variables

var laT1 = 0;
var lnG1 = 0;
var element = [];

// Event listener for all button elements

$("#add-to-do").on("click", function(event) {
  // prevent form from trying to submit/refresh the page

  event.preventDefault();

  //zip code typed by the user

  var zipcode = $("#to-do")
    .val()
    .trim();

  // checking if the zip code given has 5 digits, if the zip code given has less or more than 5 digits
  // there will not be any URL's construction to zipcodeapi, i.e., any AJAX call etc, otherwise
  // the rest of code is executed, etc.

  if (zipcode.toString().length != 5) {
    var p = $("<p>");
    var p1 = $("<p>").text("PLEASE TYPE A VALID FIVE-DIGITS  ZIP  CODE!!!");
    p = p.append(p1);
    $("#doctorsList").append(p);
  } else {
    // Constructing a URL to search zipcodeapi to covert zip code into location (latitude and longitude)
    var queryURL =
      "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/c1wr56zxJrT9VdP63xSMddq1jzu3difJ6qcIpH87Ak8MWbBRQsfzPP3r5ISW15ET/info.json/" +
      zipcode +
      "/degrees";

    // Using ajaxStart to show the loader image

    $(document).ajaxStart(function() {
      // Show image container
      $("#loader").show();
    });

    // Performing our AJAX GET request to convert zip code into location (latitude and longitude)

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API

      .then(function(response) {
        // // store the response ((latitude, longitude) from the first AJAX call

        laT1 = response.lat;
        lnG1 = response.lng;
        sample2(laT1, lnG1);
      });

    function sample2() {
      // radius of search around the location (latitude and longitude) estimated above

      a = 10;

      // Constructing a URL to search betterdoctor for doctor's directory based on location

      var queryURL =
        "https://api.betterdoctor.com/2016-03-01/practices?location=" +
        laT1 +
        "," +
        lnG1 +
        "," +
        a +
        "&limit=2000&user_key=fb84a6a95d50d7f1b141dcc24be094dd";

      // Performing our AJAX GET request for doctors's directory based on location

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API

        .then(function(response) {
          // Storing a response into the results variable

          var results = response.data;

          // Using ajaxComplete for hiding

          $(document).ajaxComplete(function() {
            // Hide image container
            $("#loader").hide();
          });

          // Looping over every result item

          for (var i = 0; i < results.length; i++) {
            element.push({
              lat: results[i].lat,
              long: results[i].lon,
              name: results[i].name,
              street: results[i].visit_address.street,
              city: results[i].visit_address.city,
              state: results[i].visit_address.state,
              zip: results[i].visit_address.zip,
              phone: results[i].phones[0].number
            });
          }
          initMap(element, laT1, lnG1);
        });
    }
  }
});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 14,
    center: new google.maps.LatLng(laT1, lnG1),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // var iconBase = "http://maps.google.com/mapfiles/kml/paddle/";

  var icon = {
    url: "./icons8-man-health-worker-48.png",
    scaledSize: new google.maps.Size(50, 50), // scaled size
    // origin: new google.maps.Point(0, 0), // origin
    // anchor: new google.maps.Point(0,0),
    // labelOrigin: new google.maps.Point(37,21)
  };

  var contentString = [];

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < element.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(element[i].lat, element[i].long),
      map: map,
      icon: icon,
      // label: {
      //   text: '$7',
      //   color: "#eb3a44",
      //   fontSize: "16px",
      //   fontWeight: "bold"
      // }
    });

    var infowindow = new google.maps.InfoWindow({});

    contentString.push(
      '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        element[i].name +
        "<div" +
        element[i].street +
        "</div>" +
        "<div>" +
        element[i].city +
        "," +
        " " +
        element[i].state +
        "," +
        " " +
        element[i].zip +
        "</div>" +
        "<div>" +
        "phone:" +
        element[i].phone +
        "</div>"
    );

    google.maps.event.addListener(
      marker,
      "click",
      (function(marker, i) {
        return function() {
          infowindow.setContent(contentString[i]);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
