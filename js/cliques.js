
var count = 0;

function playAudio1() {
	var x = document.querySelector('#audio1'); 
	var y = document.querySelector('#paused');
	var z = document.querySelector('#played');
	if(count == 0){
		count = 1;
		x.play();
		y.style.display = 'block'
		z.style.display = 'none'


	}else{
		count = 0;
		x.pause();
		y.style.display = 'none'
		z.style.display = 'block'
	}
} 



function playAudio2() {
	var x = document.querySelector('#audio2');
	var y = document.querySelector('#paused2');
	var z = document.querySelector('#played2'); 
	if(count == 0){
		count = 1;
		x.play();
		y.style.display = 'block'
		z.style.display = 'none' 
	}else{
		count = 0;
		x.pause();
		y.style.display = 'block'
		z.style.display = 'none'
	}
} 


function playAudio3() {
	var x = document.querySelector('#audio3');
	var y = document.querySelector('#paused3');
	var z = document.querySelector('#played3'); 
	if(count == 0){
		count = 1;
		x.play();
		y.style.display = 'block'
		z.style.display = 'none' 
	}else{
		count = 0;
		x.pause();
		y.style.display = 'block'
		z.style.display = 'none'
	}
} 


var form = null;

function hide(){
	form = document.getElementById('my_form');
	form.style.display = 'block';
}
