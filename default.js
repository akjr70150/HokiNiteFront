var kalpaviestit = [];
var kalpaviestitaulukko = document.createElement("div");
kalpaviestitaulukko.innerText = kalpaviestit;
kalpaviestitaulukko.classList.add("grid-item");
var optiot = {day: '2-digit', month: '2-digit', year: '2-digit',  hour: '2-digit', minute: '2-digit', hour12: false};


//metodikutsust
haeViestit();

//funktiot
function haeViestit() {
    $.getJSON('http://localhost:8080/viestit')
        .done(function (data) {
            console.log(data);
            var kalpa = document.getElementById("kalpa");
            var kalpatopics = document.getElementById("kalpatopicit");
            //Kalpan viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                    if (data[i].topics.id === 1) {
                        kalpaviestit.push(data[i].content);
                        kalpa.innerHTML += "<p>" + new Date(data[i].creationdate).toLocaleTimeString("fi", optiot)
                            + "     Käyttäjältä: "
                            + data[i].users1.username
                            + "<br>"
                            + "     "
                            + data[i].content;
                    }

            }
            // // Kalpan TOPICIT tällä
            // for (var l = 0; l < data.length; l++) {
            //     if (data[l].topics.title === "Kalpa") {
            //         if (data[l].topics.id === 1) {
            //             console.log(data[i].topics.content);
            //             kalpatopictaulukko.push(data[i].topics.content)
            //         }
            //     }
            // }

            //HIFKin viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "HIFK") {
                    //console.log(data[l].content);
                }
            }
            //Tapparan viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "Tappara") {
                    //console.log(data[l].content);
                }
            }


            $("<ul>").attr("id", "jotain").appendTo("#hifkviestit");
            $("<li>").text(data[0].content).appendTo("#jotain");

            //HIFKIN viestit tämän alle


        })
}
//
// function laheta() {
//     var data = JSON.stringify({
//         "id": 12,
//         "title": $("#otsikko").val(),
//         "content": $("#viesti").val(),
//         "creationdate": "2018-10-31T11:49:13.038+0000"
//
//     });
//     console.log(data);
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "http://localhost:8080/luouusitopic/",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//
//         },
//         "processData": false,
//         "data": data
//     }
// //"{\"id\": 4,\n \"title\": \"Jukurit\",\n\"content\": \"Ei oo Jokerit\",\n\"creationdate\": \"2018-10-31T11:49:13.038+0000\"\n}"
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//         if (response) {
//             alert("Moi")
//         } else {
//             alert("Täytä kaikki kentät!");
//         }
//
//
//     });

}