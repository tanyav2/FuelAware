function parse(val) {
    result = val.split("=");
    return result[1];
}
var t0 = performance.now();



var from_location = "detroit";
var to_location = parse(window.location.search.replace("?", ""));



var id = gm.info.watchVehicleData(processData, ["average_speed"]);





function fuelLeft(t1){
var fuel = ((12.5 - ((t1-t0)/60)(2))/12.5) * 100;
return fuel;}

function rateOfConsumption(avg_speed){
var v = avg_speed;
var f = -0.01*v*v + 1.33*v + 3.71;
return f;
}

function timeLeft(fuel_capacity, avg_speed) {
	var time;
	time = (fuel_capacity * fuelLeft()) * rateOfConsumption(avg_speed);
}

function optimal() {
	var optimum = 55;
	console.log("You should be going at a speed of 55 mp/hr");
}

console.log("To location "+ to_location);
console.log("From location "+ from_location);


function processData(data) {
	var fuel_capacity = 12.5;
	console.log("Average speed "+ data.average_speed);

	var t1 = performance.now();
	
	var amtFuelLeft = fuelLeft(t1);

	var tLeft = timeLeft(fuel_capacity, data.average_speed);
}

function closeApplication() {
  gm.info.clearVehicleData(id);
  gm.system.closeApp();
}


