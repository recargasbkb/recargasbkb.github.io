
var radio = document.querySelector('.nanual-btn')
var cont = 1

document.getElementById('radio_1').checked = true

setInterval(() => {
	proximaImg()
}, 5000)

function proximaImg(){
	cont++


	if(cont > 4) {
		cont = 1
	}

	
	document.getElementById('radio_' + cont).checked = true
}




var xradio = document.querySelector('.xnanual-btn')
var xcont = 1

document.getElementById('xradio_1').checked = true

setInterval(() => {
	xproximaImg()
}, 10000)

function xproximaImg(){
	xcont++


	if(xcont > 3) {
		xcont = 1
	}
	
	document.getElementById('xradio_' + xcont).checked = true
}