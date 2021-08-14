
//targets character id
var character = document.getElementById("character");

// targets block id
var block =document.getElementById("block");


function jump(){
    character.classList.add("animate");// adds the class of animate to character which will make it jump
    setTimeout(function (){
        character.classList.remove("animate");// removes the class of animate form character
    },500);// removes it after 500ms which how long the animation last
}


// character.addEventListener('click', jump());