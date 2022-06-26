//bar-script1
//

var currentTempraturePrev = 0;
var currentTemprature = 1.1;
var maxTemprature = 3;


function move() {
  var elem = document.getElementById("bar");   
  var width = (currentTempraturePrev / maxTemprature ) *100; //Previous temprature as percentage
  var id = setInterval(frame, 10);

  function frame() {
    //console.log()
    //if (width >= 100) {
    if (width >= (currentTemprature / maxTemprature ) *100 ){ //Current temprature as percentage 
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%';
      //document.getElementById("demo").innerHTML = '+tempC / ' + width * 1 + '%';
      //document.getElementById("demo").innerHTML = ( (width/100) * maxTemprature ) + ' / ' + width * 1 + '%';
      var processingTemp = ( (width/100) * maxTemprature );
      document.getElementById("demo").innerHTML = processingTemp + '&deg;C / ' + width * 1 + '%';
      document.getElementById("bigNumber").innerHTML = processingTemp + '&deg;C';

      /*
      (currentTemprature / maxTemprature ) *100 = width
      currentTemprature = (width/100) * maxTemprature 
      */
    }
    //Update temprature to actual temprature when loop finished //Doesn't currently work i4 20:45pm 11/June/22
    document.getElementById("demo").innerHTML = (currentTemprature) + '&deg;C / ' + width * 1 + '%';
    document.getElementById("bigNumber").innerHTML = (currentTemprature) + '&deg;C';
  }
}

move()