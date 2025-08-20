type Car = { wheels: number }
type Boat = { propeller: number }

function printVehicle(vehicle: Car | Boat) {
    if("wheels" in vehicle) {
        console.log(`Car with ${vehicle.wheels} wheels`);
    } else if ("propeller" in vehicle) {
        console.log(`Boat with ${vehicle.propeller} propeller`);
    }
}

printVehicle({ wheels: 4});
printVehicle({ propeller: 1})