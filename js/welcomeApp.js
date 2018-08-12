var youtube = new app.dataModel({
    name: "Youtube",
    link: "https://www.youtube.com"
});

var unicourt = new app.dataModel({
    name: "Unicourt",
    link: "https://unicourt.com/"
});

var dataCollection = new app.allData([
    youtube,
    unicourt
]);

var display = new app.showAllData ({ collection: dataCollection });
$("#allDataDisplay").html(display.render().el);
