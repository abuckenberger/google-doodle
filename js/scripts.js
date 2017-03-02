//FLASH
$('input').click(function(){
    
 $('#google').addClass('flash'); 
  
});

// STORE 3 IMAGES

var img0 = '../img/200.svg';
var img1 = '../img/300.svg';
var img2 = '../img/400.svg';



// GET RANDOM NUMBER

var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);


// DISPLAY RANDOMIZED IMAGES

$('#random').attr('src', eval('img' + numRand));



