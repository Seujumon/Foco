const bombilla = document.getElementById('bombilla');
const fondo = document.getElementById('contenedor');
const msj = document.getElementById('msj');
let encendido = true;

bombilla.addEventListener('click', function(){


	if(encendido){
		bombilla.style.backgroundColor = '#bb4d00';
		bombilla.style.border = '6px dotted #bb4d00';
		bombilla.style.borderBottom = 'none';
		fondo.style.backgroundColor = '#323031';
		msj.style.color = '#f6eec3';
		msj.innerText='APAGADO';
		encendido = false
	} else{
		bombilla.style.backgroundColor = '#FFE45F';
		bombilla.style.border = '6px dotted #ffc857';
		bombilla.style.borderBottom = 'none';
		msj.style.color = '#323031';
		fondo.style.backgroundColor = '#F6EEC3';
		msj.innerText='ENCENDIDO';
		encendido = true;
	}

	

}


	);