//https://dazzling-fire-4490.firebaseio.com/

var tweet = {
    name: "Isaiah",
    message: "IS it working!"

};
var request = new XMLHttpRequest();
request.open("POST", "https://dazzling-fire-4490.firebaseio.com/.json", true);
request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        //Successfull     
            var data = JSON.parse(this.response);
       } else {
        //Request failed
        console.log(this.response);
    }
};

request.onerror = function () {
        //Connection fails
        console.log("It's dead Jim!")
};
request.send(JSON.stringify(tweet));



var request = new XMLHttpRequest();
request.open("GET", "https://dazzling-fire-4490.firebaseio.com/.json", true);
request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        //Successfull
        var data = JSON.parse(this.response);
        for (var propName in data) {
            document.getElementById("container").innerHTML += data[propName]["name"] + ": " + data[propName]["message"] + "<br />";
        }
    } else {
        //Request failed
        console.log(this.response);
    }
};

request.onerror = function () {
    //Connection fails
    console.log("It's dead Jim!")



};

request.send();
























