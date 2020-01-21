$(document).ready(function(){
    $("#search-button").on("click", function(){
        var searchValue = $("#search-value").val(); 
        //remove search valu after button click 
        $("#search-value").val(); 
        searchWeather(searchValue); 

    });
    $(".history").on("click", "li", function(){
      searchWeather(#(this).text());
    });

    function makeRow(text){
      var li = $("<li>").addClass("list-group-item list-group-item-action").text(text); 
        $(".history").append(li); 
        
    }

var key = "13fc2251a9630a154a211acff09cd91d";
let city = "Miami"; // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast?q="

userCity = $(".city-name");
$.ajax({
  url:"https://api.openweathermap.org/data/2.5/forecast?q= "+ city + "&units=imperial" + "&appid=" + key, 
  dataType: "json",
  type: "GET",
  data: {

    // q: city,
    // appid: key,
    units: "metric",
    cnt: "10"
  },


  success: function(data) {
      $(".temperature").text(data.list[0].main.temp);
      
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForcast").html(wf);
  }
});

});