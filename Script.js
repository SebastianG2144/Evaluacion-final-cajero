let cuentas = [
    {nombre: "Mali", saldo: 200, password: "1234", dni: 44788834 },
    {nombre: "Gera", saldo: 150, password: "5678", dni: 10247439 },
    {nombre: "Sabi", saldo: 60, password: "9102", dni: 98005362 }
];

let cuentaSeleccionada = null;

function seleccionarCuenta(i) {
    cuentaSeleccionada = cuentas[i];
    document.getElementById("pantalla").innerHTML = `
        <h2>Cuenta: ${cuentaSeleccionada.nombre}</h2>
        <p>Ingresa tu contraseña</p>
        <input id='pass' type='password' />
        <button onclick='validarPassword()'>Ingresar</button>
    `;
}

function validarPassword() {
    let pass = document.getElementById("pass").value;
    
    if (pass === cuentaSeleccionada.password) {
        menuPrincipal();
    } else {
        alert("Contraseña incorrecta");
    }
}

function menuPrincipal() {
    document.getElementById("pantalla").innerHTML = `
        <h2>Hola, ${cuentaSeleccionada.nombre}</h2>
        <button onclick='consultarSaldo()'>Consultar saldo</button>
        <button onclick='ingresarMonto()'>Ingresar monto</button>
        <button onclick='retirarMonto()'>Retirar monto</button>
        <button onclick='volverInicio()' style='background:#d62828'>Salir</button>
    `;
}

function consultarSaldo() {
    document.getElementById("pantalla").innerHTML = `
        <h2>Saldo Actual</h2>
        <p>S/ ${cuentaSeleccionada.saldo}</p>
        <button onclick='menuPrincipal()'>Volver</button>
    `;
}

function ingresarMonto() {
    document.getElementById("pantalla").innerHTML = `
        <h2>Ingresar Monto</h2>
        <input id='monto' type='number' />
        <button onclick='confirmarIngreso()'>Ingresar</button>
    `;
}

function confirmarIngreso() {
    let monto = Number(document.getElementById("monto").value);

    if (monto > 0) {
        cuentaSeleccionada.saldo += monto;
        document.getElementById("pantalla").innerHTML = `
            <h2>Monto ingresado: S/ ${monto}</h2>
            <p>Nuevo saldo: S/ ${cuentaSeleccionada.saldo}</p>
            <button onclick='menuPrincipal()'>Volver</button>
        `;
    } else {
        alert("Monto inválido");
    }
}

function retirarMonto() {
    document.getElementById("pantalla").innerHTML = `
        <h2>Retirar Monto</h2>
        <input id='monto' type='number' />
        <button onclick='confirmarRetiro()'>Retirar</button>
    `;
}

function confirmarRetiro() {
    let monto = Number(document.getElementById("monto").value);

    if (monto > 0 && cuentaSeleccionada.saldo - monto >= 0) {
        cuentaSeleccionada.saldo -= monto;

        document.getElementById("pantalla").innerHTML = `
            <h2>Monto retirado: S/ ${monto}</h2>
            <p>Nuevo saldo: S/ ${cuentaSeleccionada.saldo}</p>
            <button onclick='menuPrincipal()'>Volver</button>
        `;
    } else {
        alert("No puedes retirar más de tu saldo disponible");
    }
}

function volverInicio() {
    location.reload();
}
