debugger

confirm("Aceptar para iniciar el calculo");

let edadEmpleado1 = parseInt(prompt("Ingresar edad del trabajador"));
console.log("El primer empleado tiene " + edadEmpleado1 + " años")

let edadEmpleado2 = parseInt(prompt("Ingresar edad del trabajador"));
console.log("El primer empleado tiene " + edadEmpleado2 + " años")

let edadEmpleado3 = parseInt(prompt("ingresar edad del trabajador"));
console.log("El primer empleado tiene " + edadEmpleado3 + " años")

let edadEmpleado4 = parseInt(prompt("Ingresar edad del trabajador"));
console.log("El primer empleado tiene " + edadEmpleado4 + " años")

let cantidadEmpleados = 4


function sumaEdades(edadEmpleado1, edadEmpleado2, edadEmpleado3, edadEmpleado4) {
    return edadEmpleado1 + edadEmpleado2 + edadEmpleado3 + edadEmpleado4;

}

let resultadoEdad = sumaEdades(edadEmpleado1, edadEmpleado2, edadEmpleado3, edadEmpleado4);

let promedioEdad = resultadoEdad / cantidadEmpleados
alert("El promedio de edad del equipo de trabajo es " + promedioEdad)

let clasificacionEquipo = promedioEdad

if (clasificacionEquipo > 35); {
    alert("Es un equipo de trabajo senior");
}

if (clasificacionEquipo < 35) {
    alert("Es un equipo de trabajo junior");
}


