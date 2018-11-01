var hifkviestit;
var kalpaviestit = [];
var kalpaviestitaulukko = document.createElement("div");
kalpaviestitaulukko.innerText = kalpaviestit;
kalpaviestitaulukko.classList.add("grid-item");
var optiot = {day: '2-digit', month: '2-digit', year: '2-digit',  hour: '2-digit', minute: '2-digit', hour12: false};

var tapparaviestit;

//metodikutsust
haeViestit();

//funktiot
function haeViestit() {
    $.getJSON('http://localhost:8080/viestit')
        .done(function (data) {
            console.log(data);
            var kalpa = document.getElementById("kalpa");
            //Kalpan viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "Kalpa") {
                    if (data[i].topics.id === 1) {
                        kalpaviestit.push(data[i].content);
                        kalpa.innerHTML += "<p>" + new Date(data[i].creationdate).toLocaleTimeString("fi", optiot)
                            + "     Käyttäjältä: "
                            + data[i].users1.username
                            + "<br>"
                            + "     "
                            + data[i].content;

                        // $("<ul>").attr("id", "kalpatopicsisalto").appendTo("#kalpatopicit");
                        // $("<li>").text(data[i].content).appendTo("#kalpatopicsisalto");
                    }

                    kalpaviestit.push(kalpaviestitaulukko);

                    // kalpa.innerHTML="<h2>Kalpa</h2>";//kalpaviestit.toString();
                    console.log(kalpaviestit);
                    console.log(kalpaviestitaulukko);

                }
            }

            //HIFKin viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "HIFK") {
                    //console.log(data[i].content);
                }
            }
            //Tapparan viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "Tappara") {
                    //console.log(data[i].content);
                }
            }


            $("<ul>").attr("id", "jotain").appendTo("#hifkviestit");
            $("<li>").text(data[0].content).appendTo("#jotain");

            //HIFKIN viestit tämän alle


        })
}

function laheta() {
    var data = JSON.stringify({
        "id": 12,
        "title": $("#otsikko").val(),
        "content": $("#viesti").val(),
        "creationdate": "2018-10-31T11:49:13.038+0000"

    });
    console.log(data);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/luouusitopic/",
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
        if (response) {
            alert("Moi")
        } else {
            alert("Täytä kaikki kentät!");
        }


    });

}