async function cargarMedicamentos() {
    try {
        const respuesta = await fetch('medicamentos.json');
        const datos = await respuesta.json();
        const medicamentosHoy = document.getElementsByClassName('medicamentos-hoy')[0];

        datos.medicamentos.forEach(medicamento => {
            const divMedicamento = document.createElement('div');
            divMedicamento.classList.add('medicamento');

            divMedicamento.innerHTML = `
                <div class="icono-medicamento"></div>
                <div class="detalle-medicamento">
                    <h4><a href="${medicamento.pagina}">${medicamento.nombre}</a></h4>
                    <p>Hoy a las ${medicamento.hora}</p>
                </div>
                <div class="check-tomado">
                    <input type="checkbox">
                </div>
            `;

            medicamentosHoy.appendChild(divMedicamento);
        });
    } catch (error) {
        console.error('Error al cargar los medicamentos:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarMedicamentos);
