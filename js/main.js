var squere  = document.querySelectorAll('.squere');
var pickcolor = document.querySelector('.pick-color');
var h1 = document.querySelector('h1');
var message = document.querySelector('#message');
var reset = document.querySelector('#reset');
var easy = document.querySelector('.easy');
var hard = document.querySelector('.hard');

var easyColor = genaratRandomColors(3);
//console.log(squere);
var colors  = genaratRandomColors(6);
//    [
//    "rgb(255, 0, 0)",
//    "rgb(255, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)",
//    "rgb(0, 255, 0)",
//    "rgb(255, 0, 255)",
//];
var pickMyColor = pickRandomNumber(colors);
pickcolor.textContent = pickMyColor;

for(var i = 0; i < colors.length; i++){
    squere[i].style.backgroundColor = colors[i];
    squere[i].addEventListener('click', function(){
        var chosen = this.style.backgroundColor;
        
        console.log(chosen, pickMyColor);
    if(chosen == pickMyColor){
        h1.style.backgroundColor = pickMyColor;
        message.textContent = 'Correct!!'
        matchColor(pickMyColor);
    }else{
        this.style.backgroundColor = 'burlywood';
        message.textContent = 'Try Again!!!!!'
    }
        
    })
}



function matchColor(color){
    for(var i = 0; i < squere.length; i++){
        squere[i].style.backgroundColor = pickMyColor;
    }
}

function pickRandomNumber(colors){
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];
}

function genaratRandomColors(number){
    //color array
    var colors = [];
    for( i = 0; i < number; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var random = "rgb" + "(" + r + "," + " " + g + "," + " " + b + ")"
        colors.push(random);
    }
    return colors;
}


easy.addEventListener('click', function(){
    this.classList.add('select');
    hard.classList.remove('select');
    
    colors  = genaratRandomColors(3); // pick tree random color
    pickMyColor = pickRandomNumber(colors); //pick a color
    pickcolor.textContent = pickMyColor; //display header
    
    for(i = 0; i < squere.length; i++){
        if(colors[i]){
            squere[i].style.backgroundColor = colors[i];
        }
        else{
            squere[i].style.display = "none";
        }
    }
})



hard.addEventListener('click', function(){
    this.classList.add('select');
    easy.classList.remove('select');
    
    colors  = genaratRandomColors(6); // pick tree random color
    pickMyColor = pickRandomNumber(colors); //pick a color
    pickcolor.textContent = pickMyColor; //display header
    
    for(i = 0; i < squere.length; i++){
        squere[i].style.backgroundColor = colors[i];
        squere[i].style.display = 'block';
    }
})





reset.addEventListener('click', function(){
   colors  = genaratRandomColors(6); //get 6 random color
//   easyColor  = genaratRandomColors(3); //get 6 random color
//   if(easy.textContent == 'easy'){
//       alert('hi');
//   }
 
    
   pickMyColor = pickRandomNumber(colors); // pick a color
   pickcolor.textContent = pickMyColor; // display header show
    
    //show 6 boxes backgrounds
    for(i = 0; i < squere.length; i++){
        squere[i].style.backgroundColor = colors[i];
    }
})


