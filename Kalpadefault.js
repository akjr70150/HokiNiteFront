
function lahetaViesti(){
    event.preventDefault();
    var data = JSON.stringify({
        "id": increment(),
        "content": $("#sisalto").val(),
        "creationdate": "2018-11-02T11:15:34.183+0000",
        "users1": {
            "id": 10,
            "username": "kiekkomiäs",
            "handler": {},
            "hibernateLazyInitializer": {}
        },
        "topics":{
            "id": 1,
            "title": "Kalpa",
            "content": "Kuopion jengi",
            "creationdate": "2018-11-12T11:49:13.038+0000",
            "handler": {},
            "hibernateLazyInitializer": {}
        }

    });
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/luouusiviesti",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "Postman-Token": "5946dfd7-1512-4fe9-80ca-fa6fe7047999"
        },
        "processData": false,
        "data": data
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    })}


var id = 100;
function increment(){

    id++;
    return id;
}