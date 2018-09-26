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