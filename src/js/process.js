function parse(val) {
    result = val.split("=");
    return result[1];
}
var t0 = performance.now();



var from_location = "detroit";
var to_location = parse(window.location.search.replace("?", ""));
var id = gm.info.watchVehicleData(processData, ["average_speed"]);

function fuelLeft(timeDiff) {
  var fuel = ((12.5 - (timeDiff/100000)*(2))/12.5) * 100;//why *100?? Val  > 12
  return fuel;
}

function rateOfConsumption(avg_speed) {
  var v = avg_speed;
  var f = -0.01*v*v + 1.33*v + 3.71;
  return f;
}

function timeLeft(fuel_capacity, percentFuelLeft, avg_speed) {
	var time;
	time = (fuel_capacity * (percentFuelLeft/100)) / rateOfConsumption(avg_speed);//all are mulptiplied
  return time/36000;
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

  console.log("Time passed" + (t1-t0));

	var percentFuelLeft = fuelLeft(t1-t0);

  console.log("% of fuel left " + percentFuelLeft);

  console.log("Rate of consumption" + rateOfConsumption(data.average_speed));

	var tLeft = timeLeft(fuel_capacity, percentFuelLeft, data.average_speed);

  console.log("Time left" + tLeft);
}

function closeApplication() {
  gm.info.clearVehicleData(id);
  gm.system.closeApp();
}
