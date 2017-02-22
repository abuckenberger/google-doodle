// STORE 3 IMAGES

var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';



// GET RANDOM NUMBER

var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);


// DISPLAY RANDOMIZED IMAGES

$('img').attr('src', eval('img' + numRand));

