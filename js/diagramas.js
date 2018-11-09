function generarDiagramas()
{
	p = document.getElementById('prob').value;
	c1 = document.getElementById('c1').value;
	c2 = document.getElementById('c2').value;
	c3 = document.getElementById('c3').value;
	c4 = document.getElementById('c4').value;
	c5 = document.getElementById('c5').value;
	c6 = document.getElementById('c6').value;

	var datos = "p="+p+"&c1="+c1+"&c2="+c2+"&c3="+c3+"&c4="+c4+"&c5="+c5+"&c6="+c6;
    var metodo = "php/main.php";
	var ajax   = new XMLHttpRequest();
	ajax.open("POST", metodo);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send(datos);
	ajax.onreadystatechange = function()
	{
	    if (ajax.readyState == 4)
	    {
	    	if (ajax.responseText == "1")
	    	{
	    		window.open("paretoDiagram.html?" + datos);
	    		window.open("fishboneDiagram.html");
	    	}
	    	else
	    	{
	    		alert("Por favor completa los campos de \"Problematica\" y \"Causa 1\"");
	    	}
	    }
	}
}

function generarSombreros()
{
	p = document.getElementById('problema').value;
	 if (p==null || p=='') {alert('Debes poner un título de Problema')}else {
		 b1 = document.getElementById('b1').value; if (b1==null) {b1=''}
 		b2 = document.getElementById('b2').value; if (b2==null) {b2=''}
 		b3 = document.getElementById('b3').value; if (b3==null) {b3=''}
 		b4 = document.getElementById('b4').value; if (b4==null) {b4=''}
 		a5 = document.getElementById('a1').value; if (a5==null) {a5=''}
 		a6 = document.getElementById('a2').value; if (a6==null) {a6=''}
 		a1 = document.getElementById('a3').value; if (a1==null) {a1=''}
 		a2 = document.getElementById('a4').value; if (a2==null) {a2=''}
 		r3 = document.getElementById('r1').value; if (r3==null) {r3=''}
 		r4 = document.getElementById('r2').value; if (r4==null) {r4=''}
 		r5 = document.getElementById('r3').value; if (r5==null) {r5=''}
 		r6 = document.getElementById('r4').value; if (r6==null) {r6=''}
 		v1 = document.getElementById('v1').value; if (v1==null) {v1=''}
 		v2 = document.getElementById('v2').value; if (v2==null) {v2=''}
 		v3 = document.getElementById('v3').value; if (v3==null) {v3=''}
 		v4 = document.getElementById('v4').value; if (v4==null) {v4=''}
 		n5 = document.getElementById('n1').value; if (n5==null) {n5=''}
 		n6 = document.getElementById('n2').value; if (n6==null) {n6=''}
 		n1 = document.getElementById('n3').value; if (n1==null) {n1=''}
 		n2 = document.getElementById('n4').value; if (n2==null) {n2=''}
 		az3 = document.getElementById('az1').value; if (az3==null) {az13=''}
 		az4 = document.getElementById('az2').value; if (az4==null) {az4=''}
 		az5 = document.getElementById('az3').value; if (az5==null) {az5=''}
 		az6 = document.getElementById('az4').value; if (az6==null) {az6=''}

 		document.getElementById('titulo').innerHTML = '<div class="form-group formTitle">Título/Nombre del Problema: '+p+'</div>';
 		// Respuestas
 		// Sombrero Blanco
 		document.getElementById('whiteHat').innerHTML = '<b class="white">Sombrero Blanco: </b>Describe cuáles son los datos concretos que se tienen respecto al problema.';
 		document.getElementById('Db1').innerHTML = b1;
 		document.getElementById('Db2').innerHTML = b2;
 		document.getElementById('Db3').innerHTML = b3;
 		document.getElementById('Db4').innerHTML = b4;

 		// Sombrero Amarillo
 		document.getElementById('yellowHat').innerHTML = '<b class="yellow">Sombrero Amarillo: </b>Describe las cosas positivas respecto al problema.';
 		document.getElementById('Da1').innerHTML = a5;
 		document.getElementById('Da2').innerHTML = a6;
 		document.getElementById('Da3').innerHTML = a1;
 		document.getElementById('Da4').innerHTML = a2;

 		// Sombrero Rojo
 		document.getElementById('redHat').innerHTML = '<b class="red">Sombrero Rojo: </b>Describe cuáles son tus sentimientos y pensamientos con el problema.';
 		document.getElementById('Dr1').innerHTML = r3;
 		document.getElementById('Dr2').innerHTML = r4;
 		document.getElementById('Dr3').innerHTML = r5;
 		document.getElementById('Dr4').innerHTML = r6;

 		// Sombrero Verde
 		document.getElementById('greenHat').innerHTML = '<b class="green">Sombrero Verde: </b>Describe alguna idea creativa o innovadora que pueda mejorar el problema.';
 		document.getElementById('Dv1').innerHTML = v1;
 		document.getElementById('Dv2').innerHTML = v2;
 		document.getElementById('Dv3').innerHTML = v3;
 		document.getElementById('Dv4').innerHTML = v4;

 		// Sombrero Negro
 		document.getElementById('blackHat').innerHTML = '<b class="black">Sombrero Negro: </b>Escribe las ideas y situaciones negativas del problema.';
 		document.getElementById('Dn1').innerHTML = n5;
 		document.getElementById('Dn2').innerHTML = n6;
 		document.getElementById('Dn3').innerHTML = n1;
 		document.getElementById('Dn4').innerHTML = n2;

 		// Sombrero Azul
 		document.getElementById('blueHat').innerHTML = '<b class="blue">Sombrero Azul: </b>Describe de que manera gestionar y organizas la situación o problema.';
 		document.getElementById('Daz1').innerHTML = az3;
 		document.getElementById('Daz2').innerHTML = az4;
 		document.getElementById('Daz3').innerHTML = az5;
 		document.getElementById('Daz4').innerHTML = az6;
	 }

}
