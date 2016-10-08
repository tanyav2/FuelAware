// Your code goes here

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});

    function myFunction(){
        x = document.getElementById("myText");
        console.log(x.value);
      }
    
      function myFunction2(){
       }
