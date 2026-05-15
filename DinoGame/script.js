// JavaScript Document
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function setRandomSpeed() {
    let randomSpeed = Math.random() * .2 + .8; // 0.8s–2.3s
    block.style.animationDuration = randomSpeed + "s";
	
	  block.style.animation = "none";

    // Reset position to the right
    block.style.left = "500px";

    // Force reflow (this makes restart actually work)
    block.offsetHeight;

    // Restart animation with new speed
    block.style.animation = "block " + randomSpeed + "s infinite linear";
}

setRandomSpeed();

block.addEventListener("animationiteration", setRandomSpeed);

function jump(){
	character.classList.add("animate");
		setTimeout(function() {
	character.classList.remove("animate");		
		},300);	
}
var checkDead = setInterval(function() {
let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if (blockLeft<20 && blockLeft>-20 && characterTop>=130) {
	block.style.animation = "none";
	alert("Game Over. score: "+Math.floor(counter/100));
	counter=0;
	block.style.animation = "block 1s infinite linear";
	}else{
	counter++;
	document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
	}
}, 10);
// JavaScript Document