(function () {
	// Code goes here
	function PhotoAlbum() {
		this.pictures = [];
	}

	PhotoAlbum.prototype.addPicture = function(album) {
		this.pictures.push(album);
	};

	PhotoAlbum.prototype.showPictures = function(name) {
		var s = "";
		for (var i in this.pictures) {
			for (var j in this.pictures[i].tags) {
				if (this.pictures[i].tags[j] === name) {
					s += this.pictures[i].name + ", ";
				}
			}
		}
		s = s.slice(0,-2);
		console.log(s);
	};

	function Photo(name) {
		this.name = name;
		this.tags = [];
	}

	Photo.prototype.tag = function(name) {
		this.tags.push(name);
	};

	Photo.prototype.showTags = function() {
		var s = "";
		for (var i in this.tags) {
			s += (this.tags[i] + ", ");
		}
		s = s.slice(0, -2);
		console.log(s);
	};


	var album = new PhotoAlbum();
	var p;

	p = new Photo("paris Trip 1");
	p.tag("Jimmy");
	p.tag("Jane");
	p.tag("Jeff");

	album.addPicture(p);

	p = new Photo("Look the Eiffel");
	p.tag("Jimmy");
	p.tag("Max");
	album.addPicture(p);

	p = new Photo("OMG it's so high");
	p.tag("Jimmy");
	p.tag("Jane");

	// prints "Jimmy, Jane"
	p.showTags();

	album.addPicture(p);

	// prints "paris Trip 1, Look the Eiffel, OMG it's so high"
	album.showPictures("Jimmy");

	// prints "paris Trip 1, OMG it's so high"
	album.showPictures("Jane");
}());
