//exercise01
(function() {
//exercise01a
//define a Door constructor function. A door instance exposes the two methods open and close that chage the values of a state property respectively to open and closed.
	function Door() {
		this.state = "closed";
	}

	Door.prototype.open = function() {
		if (this.state === "open") {
			console.log("Door already open");
		} else if (this.state === "closed") {
			this.state = "open";
		};
	};

	Door.prototype.close = function() {
		if (this.state === "closed") {
			console.log("Door already closed");
		} else if (this.state === "open") {
			this.state = "closed";
		};
	};

//exercise01b
//define a SecurityDoor constructor function that inherits the behaviour from Door but once closed a security_door instance can be locked via the lock method. Invoking the unlock method, bring the security_door back to the close state.
	function SecurityDoor() {
		Door.call(this);
		this.state = "closed";
	}

	SecurityDoor.prototype.lock = function() {
		if (this.state === "closed") {
			this.state = "locked";
		} else {
			console.log("Door is " + this.state + "Door must be closed to be locked");
		};
	};

	SecurityDoor.prototype.unlock = function() {
		if (this.state === "locked") {
			this.state = "closed";
		} else {
			console.log("Door is " + this.state + "Door must be locked to be locked");
		};
	};


	//TEST

	
}());
