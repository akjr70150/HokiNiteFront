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



