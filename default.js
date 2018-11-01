var kalpa;
haeViestit();
function haeViestit() {
    $.getJSON('http://localhost:8080/viestit')
        .done(function (data) {
            console.log(data)
            console.log(data[0].topics.content);
            console.log(data[0].content);
            //kalpa.push(data[0].topics.content);

            $("<ul>").attr("id", "toka").appendTo("#testi");
            $("<li>").text(data[0].topics.content).appendTo("#toka")
            $("<ul>").attr("id", "jotain").appendTo("#hifkviestit");
            $("<li>").text(data[0].content).appendTo("#jotain")
        })
}
function laheta(){
    var data = JSON.stringify({
        "title": $("#otsikko").val(),
        "content": $("#viesti").val()
    });
    console.log(data);
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:8080/topicit/",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"

    },
    "processData": false,
    "data": data
}
//"{\"id\": 4,\n \"title\": \"Jukurit\",\n\"content\": \"Ei oo Jokerit\",\n\"creationdate\": \"2018-10-31T11:49:13.038+0000\"\n}"
$.ajax(settings).done(function (response) {
    console.log(response);

});

}