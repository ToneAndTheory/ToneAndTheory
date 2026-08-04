// Smooth scroll to featured song

const exploreButton = document.getElementById("exploreBtn");


exploreButton.addEventListener("click", function(){

    document
    .getElementById("featured")
    .scrollIntoView({
        behavior:"smooth"
    });

});




// Guitar path generator

const generateButton =
document.getElementById("generateBtn");


generateButton.addEventListener("click", function(){


    const artists =
    document.getElementById("artists").value;


    const style =
    document.getElementById("style").value;


    const level =
    document.getElementById("level").value;



    const result =
    document.getElementById("result");



    if(artists === "" || style === ""){

        result.innerHTML =
        "Tell us your favourite artists and style first.";

        return;

    }



    result.innerHTML =
    `
    Your Guitar DNA path:
    <br><br>
    Based on your interest in ${artists},
    we'll help you develop your ${style} playing
    at a ${level.toLowerCase()} level.
    <br><br>
    Your next step is discovering songs,
    techniques and exercises that match your goals.
    `;


});