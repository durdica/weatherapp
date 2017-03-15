$(document).ready(function(){
  
var lat;
  var long;
    $.getJSON("http://ip-api.com/json",function(data2){
      lat=data2.lat;
      long= data2.lon;

  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=73109eaef939516d35958af9079b3c46';  
//JSON call for Open Weather API           
$.getJSON(api, function(data){
       var fTemp;
  var cTemp;
  var kTemp;
      var tempSwap=true;
    //JSON call for Open Weather API
   var weatherType= data.weather[0].description;
        kTemp = data.main.temp;
       var windSpeed= data.wind.speed;
    var city = data.name;
    //Temperture in F
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    //Temp in C
    cTemp = (kTemp-273).toFixed(1);
  
      
  
     $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457;");
      $("#fTemp").click(function(){
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;"); 
          tempSwap=true;
        }
        else{
          $("#fTemp").html(cTemp + " &#8451;");
          tempSwap=false;
        }   
      });
windSpeed = (2.237*(windSpeed)).toFixed(1);
       $("#windSpeed").html(windSpeed + " mph");
    
    
  
var iconCode = data.weather[0].icon;
var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
$(".icon").html("<img src='" + iconUrl  + "'>");
  
  
  
  
  
  
  
  
  
      
  });
       });
    });
 
   

