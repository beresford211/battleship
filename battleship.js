var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea")
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss")
	}
};

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },
			 { locations: [0, 0, 0], hits: ["", "", ""] },
			 { locations: [0, 0, 0], hits: ["", "", ""] } ],
	fire: function(guess){ 
		for (var i = 0; i < this.numShips; i++){
			var ship = this.ships[i];
			locations = ship.locations;
			var index = locations.indexOf(guess);
			if (index >= 0){
				ship.hits[index] = "hit";
				return true;
			}
		}
		return false;
	}
};