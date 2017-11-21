
/*
Use the endpoint: https://fcc-weather-api.glitch.me/. Use this endpoint to get the weather at a location. To prevent abuses this server accepts GET requests only, and serves only the route /api/current?lon=:longitude&lat=:latitude. Images links are included in the JSON under weather[0].icon. This is enough to complete the challenge. 
Example: 
Request: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139 

Response: 
{ 
	"coord":{ "lon":159, "lat":35 },
	 "weather":[ { "id":500, "main":"Rain","description":"light rain","icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ],
	   "base":"stations",
	     "main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 },
	      "wind":{ "speed":8.12, "deg":246.503 },
	       "rain":{ "3h":0.45 },
	        "clouds":{ "all":92 },
	         "dt":1499521932,
	          "sys":{ "message":0.0034, "sunrise":1499451436,"sunset":1499503246 },
	             "id":0,
	              "name":"",
	               "cod":200 
	           }

apikey google - AIzaSyDE35xGKzLwHYyhpGQWXVlnRK8xdPbglb4
url - https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyDE35xGKzLwHYyhpGQWXVlnRK8xdPbglb4

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyDE35xGKzLwHYyhpGQWXVlnRK8xdPbglb4
*/
var lat = "";
var lon = "";

function getLocal() {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    $("#latlong").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
	  	lat = position.coords.latitude;
	  	lon = position.coords.longitude;
	  });
}

function getWeatherData () {
		//calling function get geolocation through browser
		getLocal();
		//calling API weather data
		var root = 'https://fcc-weather-api.glitch.me/api/current?';
		//lat=-30.0311256&lon=-51.1817567';
		$.ajax({
		  url: root + "lat=" + "-30.031133599999997" + "&lon=" + "-51.181758699999996", 
		  method: 'GET'
		}).then(function(data) {
			//"coord":{ "lon":159, "lat":35 },
				  $("#weatherDataCoordLon").html(data.coord.lon);
				  $("#weatherDataCoordLat").html(data.coord.lat);
			// "weather":[ { "id":500, "main":"Rain","description":"light rain","icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ],
					//a informação acima esta dentro de um array, entao teremos que acessar cada posicao
					$("#weatherWId").html(data.weather[0].id);
					$("#weatherWMain").html(data.weather[0].main);
					$("#weatherWDescription").html(data.weather[0].description);
					$('#weatherWIcon').prepend('<img height="120" width="200" src="'+data.weather[0].icon+'" />') 
			//"base":"stations",
					$("#weatherDataBaseStations").html(data.base);
			//"main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 },
					$("#weatherDataMainTemp").html("</br>"+ data.main.temp + '&deg' + "C");
					$("#weatherDataMainPressure").html("</br>Pressure: "+data.main.pressure);
					$("#weatherDataMainHumidity").html("</br>Humidity: "+data.main.humidity);
					$("#weatherDataMainTemp_min").html("</br>Min Temperature: "+data.main.temp_min);
					$("#weatherDataMainTemp_max").html("</br>Max Temperature: "+data.main.temp_max);
					$("#weatherDataMainVisi").html("</br>Visibility: "+data.main.visibility);
			// "wind":{ "speed":8.12, "deg":246.503 },
					$("#weatherDataWindSpeed").html("</br>Wind Speed: "+data.wind.speed);
					$("#weatherDataWindDeg").html("</br>Wind Deg: "+data.wind.deg);
			// "rain":{ "3h":0.45 },
					//deprecated
			//"clouds":{ "all":92 },
					$("#weatherDataClouds").html("</br>Clouds: "+data.clouds.all);
			 //"dt":1499521932,
			 		$("#weatherDataDt").html("</br>Dt: "+data.dt);
			 // "sys":{ "message":0.0034, "sunrise":1499451436,"sunset":1499503246 },
	           		$("#weatherDataSysMes").html("</br>SysMessage: "+data.sys.message);
	           		$("#weatherDataSysSunr").html("</br>Sunrise: "+data.sys.sunrise);
	           		$("#weatherDataSysSuns").html("</br>Sunset: "+data.sys.sunset);

	         //   "id":0,
	         		//not important
	         //     "name":"",
	         		//not important
	         //      "cod":200 
	         		//not important


});
}

function getBackgroundPhoto() {
	
}


$(document).ready(function () {
	 getWeatherData();
	 getBackgroundPhoto();
  //$("#getMessage").on("click", getLocal);

});