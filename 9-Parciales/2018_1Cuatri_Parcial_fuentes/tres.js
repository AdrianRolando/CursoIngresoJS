function mostrar()
{
   //Declaración
    var precio;
   var descuento;
   var porcentaje;
   var calculoDescuento;
   var precioFinal;

   //Asignación mediante prompt()
   precio = prompt("Ingrese un precio");
   descuento = prompt("Ingrese porcentaje de descuento");
   
   //Asignación mediante operaciones
   porcentaje = (descuento / 100);
   calculoDescuento = (precio * porcentaje);
   precioFinal = (precio - calculoDescuento);

   //Mostrar valor final por ID
   elPrecioFinal.value = precioFinal;

   
}
