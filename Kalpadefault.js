var kalpatopictaulukko = [];
var kalpablaa = document.createElement("div");
kalpablaa.innerText = kalpatopictaulukko;
kalpablaa.classList.add("grid-item");
var optiot = {day: '2-digit', month: '2-digit', year: '2-digit',  hour: '2-digit', minute: '2-digit', hour12: false};


haeTopicit();

function haeTopicit() {
    $.getJSON('http://localhost:8080/viestit')
        .done(function (data) {
            console.log(data);
            var kalpatopicit = document.getElementById("kalpatopicit");
            for (var l = 0; l < data.length; l++) {
                if (data[l].topics.title === "Kalpa") {
                    if (data[l].topics.id === 1) {
                        console.log(data[0].topics.content);
                        kalpatopictaulukko.push(data[l].topics.content);
                        kalpatopicit.innerHTML += (data[l].topics.content);
                    }
                }
            }
        });
}