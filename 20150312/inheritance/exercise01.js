//exercise01
(function() {
//exercise01a
//define a Door constructor function. A door instance exposes the two methods open and close that chage the values of a state property respectively to open and closed.
	function Door() {
		this.state = "open";
	}

	Door.prototype.open = function() {
		if (this.state === "open") {
			console.log("Door already open");
		} else if (this.state === "closed") {
			this.state = "open";
			console.log("Door open");
		};
	};

	Door.prototype.close = function() {
		if (this.state === "closed") {
			console.log("Door already closed");
		} else if (this.state === "open") {
			this.state = "closed";
			console.log("Door closed");
		};
	};

//exercise01b
//define a SecurityDoor constructor function that inherits the behaviour from Door but once closed a security_door instance can be locked via the lock method. Invoking the unlock method, bring the security_door back to the close state.
	function SecurityDoor() {
		Door.call(this);
		this.state = "open";
	}

	// link the prototype chain, before method definition
	SecurityDoor.prototype = Object.create(Door.prototype);
	SecurityDoor.prototype.constructor = SecurityDoor;

	SecurityDoor.prototype.lock = function() {
		if (this.state === "closed") {
			this.state = "locked";
			console.log("Door locked");
		} else {
			console.log("Door is " + this.state + "Door must be closed to be locked");
		};
	};

	SecurityDoor.prototype.unlock = function() {
		if (this.state === "locked") {
			this.state = "closed";
			console.log("Door unlocked");
		} else {
			console.log("Door is " + this.state + "Door must be locked to be locked");
		};
	};

	//TEST
	var door = new Door();
	door.open();
	door.close();
	door.open();

	var security_door = new SecurityDoor();
	security_door.open();
	security_door.close();
	security_door.lock();
	security_door.unlock();
	security_door.open();
}());
