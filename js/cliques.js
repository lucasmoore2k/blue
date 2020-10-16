
/*
var x = document.querySelector("#play"); 

x.addEventListener('click', function(){
	 const audio = document.querySelector('audio');
	 audio.play;
	})*/


/*
function play(){
	const audio = document.querySelector('audio');
	audio.play();

}*/

var count = 0;

function playAudio1() {
	var x = document.querySelector('#audio1'); 
	if(count == 0){
		count = 1;
		x.play(); 
	}else{
		count = 0;
		x.pause();
	}
} 



function playAudio2() {
	var x = document.querySelector('#audio2'); 
	if(count == 0){
		count = 1;
		x.play(); 
	}else{
		count = 0;
		x.pause();
	}
} 

function playAudio3() {
	var x = document.querySelector('#audio3'); 
	if(count == 0){
		count = 1;
		x.play(); 
	}else{
		count = 0;
		x.pause();
	}
} 




var form = null;

function teste(){
	form = document.getElementById('my_form');
	form.style.display = 'block';
}