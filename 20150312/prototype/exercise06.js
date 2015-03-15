// implement a MusicBox object that should make the following code work well:

(function() {
	// Write your code here
	function Album(artist, name) {
		this.artist = artist;
		this.name = name;
	}

	Album.prototype.play = function() {
		var artist = this.artist,
			name = this.name;
		console.log("Playing: " + artist + " - " + name);
	};


	function MusicBox() {
		this.albums = [];
	}

	MusicBox.prototype.addAlbum = function(album) {
		this.albums.push({album:album, played:0});
	};

	MusicBox.prototype.favoriteAlbum = function() {
		if (this.albums.length === 0) {
			return "no albums in MusicBox";
		}

		var favorite = this.albums[0];
		for (var album in this.albums) {
			if (album.played > favorite.played) {
				favorite = album;
			}
		}

		return favorite.album.artist + " - " + favorite.album.name;
	};


	var box = new MusicBox();
	var a1 = new Album("The Who", "Tommy");
	var a2 = new Album("Tom Waits", "Closing Time");
	var a3 = new Album("John Cale", "Paris 1919");
	var favorite;

	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);

	a1.play() ; // prints "Playing The Who - Tommy"
	a2.play(); // prints "Playing Tom Waits - Closing Time"  
	a1.play(); // prints "Playing The Who - Tommy"

	favorite = box.favoriteAlbum(); 

	// prints "favorite album is The Who - Tommy"
	console.log("favorite album is: " + favorite); 
}());

// exercise06a
// can you also write it so that box.addAlbum(a1, a2, a3) will work ? how ?
// using the special object (arguments) that holds the passed parameters

(function() {
	// Write your code here
	function Album(artist, name) {
		this.artist = artist;
		this.name = name;
	}


	function MusicBox() {
		this.albums = [];
	}

	MusicBox.prototype.addAlbum = function() {
		for (var i = 0; i < arguments.length; i++) {
				this.albums.push({album:arguments[i], played:0});
		}
	};


	var box = new MusicBox();
	var a1 = new Album("The Who", "Tommy");
	var a2 = new Album("Tom Waits", "Closing Time");
	var a3 = new Album("John Cale", "Paris 1919");
	var favorite;

	box.addAlbum(a1, a2, a3);
	console.log(box.albums.length + " albums in Music Box");
}());
