var youtube = new app.dataModel({
	name: "Youtube",
	link: "https://www.youtube.com"
});

var unicourt = new app.dataModel({
	name: "Unicourt",
	link: "https://unicourt.com/"
});

console.log(youtube.toJSON());
console.log(unicourt.toJSON());
