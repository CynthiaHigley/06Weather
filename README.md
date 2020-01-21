# 06Weather
API weather app 
Your API key is 13fc2251a9630a154a211acff09cd91d
created a html file 
referencing the files I would need for ajax and bootstrap

following the assignment I created a header for WEATHER DASHBOARD 

a container was created to hold the contents using a 3 column width on the left side for the city search and list (which was dynamically created) and a 9 column to contain the entire weather forcast with today's weather at top and the 
5 weather cards on the bottom displaying the date, temp, humidity, wind speed and UV on each card extending from today 
a reference was made to jquery and my 

weather.js and style.css 
the css basically tried handling the akwardness that the jumbotron creates 

weather.js 
my first step in this was to register to www.openweather.com and acquire an API key which I could use 

the document had to be on standby for any user input 
once the user puts in a city and presses the search button it will 
clean out the text box, while sending the value to the var to do the search 
it will also be dynamically added to the list of cities which the user has searched 

the function is sent to search for the weather for that city using the ajax GET call through the url and drilling into the api 
the structure of the page then populates all the divs created for today's date for that city with the 
city, icon, wind, humidity, and temperature. 
the card is populated 

then a call it made to fill the 5 additional cards creating a 5 day weather forcast at the bottom of the page. 
the UV rating is handled in a separate function to allow for it to be certain colors for different levels of UV 

  
  