function parse(val) {
    result = val.split("=");
    return result[1];
}

var from_location = "detoirt";
var to_location = parse(window.location.search.replace("?", ""));

gm.info.getVehicleData(intiliazeData, ["fuel_consumption","fuel_economic_lifetime","fuel_level","fuel_capacity"]);

var id = gm.info.watchVehicleData(processData, ["average_speed"]);




console.log("To location "+ to_location);
console.log("From location "+ from_location);

function intiliazeData(data) {
  fuel_consumption = data.fuel_consumption; //ltrs/hr
  fuel_level = data.fuel_level; //% of full
  fuel_economic_lifetime = data.fuel_economic_lifetime; //km/lit
  fuel_capacity = data.fuel_capacity; // ltrs
}
function processData(data) {
  console.log("Avergae speed "+ data.average_speed);
}

function closeApplication() {
  gm.info.clearVehicleData(id);
  gm.system.closeApp();
}
