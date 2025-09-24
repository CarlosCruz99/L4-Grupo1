document.addEventListener("DOMContentLoaded", () => {
    var actividades = new Map();
    const diasValidos = ["lunes", "martes", "miércoles", "miercoles", "jueves", "viernes", "sábado", "sabado"]

    function ingresarRecordatorio() {
        const diaSemanaIngreso = document.getElementById("diaInputIngreso").value.trim().toLowerCase();
        const mensajeRecordatorio = document.getElementById("recordatorioInput").value;
        const resultadoIngreso = document.querySelector("#ingreso > .resultado")

        if (diasValidos.includes(diaSemanaIngreso)) {
            actividades.set(diaSemanaIngreso, mensajeRecordatorio)
            resultadoIngreso.textContent = "Recordatorio guardado"
            document.getElementById("diaInputIngreso").value = "";
            document.getElementById("recordatorioInput").value = "";
        } else {
            resultadoIngreso.textContent = "Día no reconocido. Intenta escribir: Lunes, Martes, etc.";
        }
    }

    function mostrarRecordatorio() {
        const diaSemanaMuestra = document.getElementById("diaInputMuestra").value.trim().toLowerCase();
        const resultadoMuestra = document.querySelector("#muestra > .resultado")

        if (diasValidos.includes(diaSemanaMuestra)) {
            resultadoMuestra.textContent = actividades.get(diaSemanaMuestra);
        }
        else {
            resultadoMuestra.textContent = "Día no reconocido. Intenta escribir: Lunes, Martes, etc.";
        }
    }

    document.getElementById("botonIngresar").onclick = ingresarRecordatorio;
    document.getElementById("botonMostrar").onclick = mostrarRecordatorio;
});



