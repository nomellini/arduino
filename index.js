/**
 * Johny five
 * http://johnny-five.io/
 *
 * https://medium.com/@imkiran/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300
 *
 */
var express = require('express');

var five = require("johnny-five");


//var board = new five.Board();
var board = new five.Board({port: "COM7"});


var app = express();

var led;// = new five.Led(13);

board.on("ready", function() {
  led = new five.Led(13);
  led.stop();
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

function LedLigar() {
  led.stop();
  led.on();
}

app.get('/ligar', function (req, res) {
  res.send('Ligando');
  led.stop();
  led.on();
});

app.get('/desligar', function (req, res) {
  res.send('Desligando');
  led.stop();
  led.off();
  console.log('desligar');
});


app.get('/toggle', function (req, res) {
  res.send('toggle');
  led.toggle();
});


app.get('/piscar', function (req, res) {
  res.send('Piscando');
  led.blink();
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
