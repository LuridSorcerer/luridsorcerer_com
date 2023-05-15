// list of background images
let backgrounds = [
    "img/bg_0.png",
    "img/bg_1.png",
    "img/bg_2.png",
    "img/bg_3.png"
];

// select which backgound should be used
let i = Math.floor( Math.random()*backgrounds.length );

// apply the background image
document.body.style.backgroundImage = "url('"+backgrounds[i]+"')";