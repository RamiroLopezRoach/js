confirm("Aceptar para iniciar el calculo");

let edadEmpleado1 = parseInt(prompt("Ingresar edad del trabajador"));
console.log("El primer empleado tiene " + edadEmpleado1 + " años")

let edadEmpleado2 = parseInt(prompt("Ingresar edad del trabajador"));
console.log("El segundo empleado tiene " + edadEmpleado2 + " años")

let edadEmpleado3 = parseInt(prompt("ingresar edad del trabajador"));
console.log("El tercer empleado tiene " + edadEmpleado3 + " años")

let edadEmpleado4 = parseInt(prompt("Ingresar edad del trabajador"));
console.log("El cuarto empleado tiene " + edadEmpleado4 + " años")

let cantidadEmpleados = 4


function sumaEdades(edadEmpleado1, edadEmpleado2, edadEmpleado3, edadEmpleado4) {
    return edadEmpleado1 + edadEmpleado2 + edadEmpleado3 + edadEmpleado4;

}

let resultadoEdad = sumaEdades(edadEmpleado1, edadEmpleado2, edadEmpleado3, edadEmpleado4)

let promedioEdad = resultadoEdad / cantidadEmpleados
alert("El promedio de edad del equipo de trabajo es " + promedioEdad)


let zonaTrabajo = parseInt(prompt("¿En que parte de la empresa trabaja? (Ingrese solamente el numero correspondiente):1-Diseño, 2-Estructura, 3-Servidores, 4-Seguridad Web."))

switch (zonaTrabajo) {
    case 1:
        alert("El numero ingresado corresponde al departamento de diseñadores")
        break

    case 2:
        alert("El numero ingresado corresponde al departamento de estructura")
        break

    case 3:
        alert("El numero ingresado corresponde al departamento de servidores")
        break

    case 4:
        alert("El numero ingresado corresponde al departamento de seguridad web")
        break

    default:
        alert("error ingrese un numero del 1 - 4")
        break;

}

let clasificacionEquipo = promedioEdad

if (clasificacionEquipo >= 35) {
    alert("Es un equipo de trabajo senior");
}

else {
    alert("Es un equipo de trabajo junior");

}





