
halfangle = ((1 / 37) * 360) / 2;

let currentLength = perfecthalf;
let mapOfNums ={
    "0":"26",
    "1":"3",
    "2":"35",
    "3":"12",
    "4":"28",
    "5":"7",
    "6":"29",
    "7":"18",
    "8":"22",
    "9":"9",
    "10":"31",
    "11":"14",
    "12":"20",
    "13":"1",
    "14":"33",
    "15":"16",
    "16":"24",
    "17":"5",
    "18":"10",
    "19":"23",
    "20":"8",
    "21":"30",
    "22":"11",
    "23":"36",
    "24":"13",
    "25":"27",
    "26":"6",
    "27":"34",
    "28":"17",
    "29":"25",
    "30":"2",
    "31":"21",
    "32":"4",
    "33":"19",
    "34":"15",
    "35":"32",
    "36":"0",
}
$(".wheel img").css("transform", "rotate(" + halfangle + "deg)");
var fast=360
$(".spin").click(() => {
    $(".quote")[0].innerText="Wait for your number"

  $(".wheel img").css("filter", "blur(8px)");
  var x =getRandomInt(0, 36)
  spininterval = x * (360 / 37)+halfangle;
  fast=fast+360*2;
  currentLength = spininterval+ fast;

  numofsecs = currentLength;

  $(".wheel img").css("transform", "rotate(" + currentLength + "deg)");

  setTimeout(function () {
    getResponses(mapOfNums[x])
  }, 8400);

  setTimeout(function () {
    $(".wheel img").css("filter", "blur(0px)");
  }, 4000);


});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  $(".spin").click();
})

function getResponses(num){
    fetch(`https://numbersapi.p.rapidapi.com/${num}/trivia?fragment=true&notfound=floor&json=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "HEcEkXBA17mshuHUg34YWOOTCVg1p1SXS72jsnE1uUHuqLKmUz"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(resp=>{
        $(".quote")[0].innerText=resp.number+" : "+resp.text;
       console.log(resp);
    })
    .catch(err => {
        console.error(err);
    });
}