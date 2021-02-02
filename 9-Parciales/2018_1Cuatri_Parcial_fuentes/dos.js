function mostrar()
{
    //Declaración de variables
    var nombre;
    var localidad;

    //Asignación mediante ID
    nombre = elNombre.value;
    localidad = laLocalidad.value;
    
    //Reasignación para ocultar los datos ingresados
    nombre = "xxxxx";
    localidad = "xxxxxxxx";
    
    //Mostrar el mensaje final
    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);

}
