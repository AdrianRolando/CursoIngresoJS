/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaración
	var importe;
	var importePars;
	var importeConDescuento;
	
    //Asignación
	importe = txtIdImporte.value;
	importePars = parseInt(importe);

	//Calcular descuento del 25%
	importeConDescuento = (importePars * 0.75);

	//Mostrar descuento en el ID
	txtIdResultado.value = importeConDescuento;
}
