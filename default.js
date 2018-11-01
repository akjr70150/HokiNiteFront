var hifkviestit;
var kalpaviestit;
var tapparaviestit;

//metodikutsust
haeViestit();

//funktiot
function haeViestit() {
    $.getJSON('http://localhost:8080/viestit')
        .done(function (data) {
            console.log(data);
            console.log(data[0].topics.content);
            console.log(data[0].content);
            //Kalpan viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "Kalpa") {
                    console.log(data[i].content);
                }
            }
            //HIFKin viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "HIFK") {
                    console.log(data[i].content);
                }
            }
            //Tapparan viestit tällä luupilla
            for (var i = 0; i < data.length; i++) {
                if (data[i].topics.title === "Tappara") {
                    console.log(data[i].content);
                }
            }
            $("<ul>").attr("id", "toka").appendTo("#testi");
            $("<li>").text(data[0].topics.content).appendTo("#toka");
            $("<ul>").attr("id", "jotain").appendTo("#hifkviestit");
            $("<li>").text(data[0].content).appendTo("#jotain");

            //HIFKIN viestit tämän alle


        })
}



