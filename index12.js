var NumOfDrum= document.querySelectorAll(".drum").length;
var crash= new Audio("sounds/crash.mp3")
var kickbass= new Audio("sounds/kick-bass.mp3")
var snare= new Audio("sounds/snare.mp3")
var tom1= new Audio("sounds/tom-1.mp3")
var tom2= new Audio("sounds/tom-2.mp3")
var tom3= new Audio("sounds/tom-3.mp3")
var tom4= new Audio("sounds/tom-4.mp3")

addEventListener("keydown", function(event) {
    
   soundskey(event.key);
   animation(event.key);
});


for(var i=0; i<NumOfDrum; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
        var letter= this.innerHTML;
        soundskey(letter); 
        animation(letter);    
});
}



function soundskey(key)
{
    switch(key)
    {
        case "w":
            crash.play();

        break;
        case "a":
            kickbass.play();

        break;
        case "s":
            snare.play();

        break;
        case "d":
            tom1.play();

        break;
        case "j":
            tom2.play();

        break;
        case "k":
            tom3.play();

        break;
        case "l":
            tom4.play();

        break;

        
    }
   
}
function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
document.querySelector("."+key).classList.remove("pressed"),2500
    });
}
