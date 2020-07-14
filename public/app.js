const url = 'http://chat.bpo.pe/WSDynamicall/api/landpage/landpage1'

const form = document.getElementById('form'),
    btnSubmit = document.getElementById('btnSubmit')

const id = document.getElementById('id'),
    telefono = document.getElementById('telefono'),
    nombre = document.getElementById('nombre'),
    email = document.getElementById('email'),
    ciudad = document.getElementById('ciudad'),
    horario = document.getElementById('horario'),
    dia = document.getElementById('dia'),
    info = document.getElementById('info')

const respuesta = document.getElementById('respuesta')

const getData = () => {
    return {
        "IdServicio": id.value,
        "Telefono": telefono.value,
        "Campos_variables":{
            "Nombre": nombre.value,
            "Correo": email.value,
            "Ciudad": ciudad.value,
            "Horario": horario.value,
            "Dia": dia.value,
            "Deseo": info.value
        }
    }
}

const enviar = () => {
    btnSubmit.textContent = 'Enviando...'

    let PARAMETRO = getData()

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(PARAMETRO)
    })
    .then(function(response) {
        respuesta.textContent = response
        console.log(`e ${response}`)

        btnSubmit.textContent = 'Enviar'

        if(response.ok) {
            return response.json()
        } else {
            throw "Error en la llamada Ajax";
        }
     })
     .then(function(texto) {
        console.log(texto);
        btnSubmit.textContent = 'Enviar'
     })
     .catch(function(err) {
        console.log(`Error: ${err}`);
        btnSubmit.textContent = 'Enviar'
     });
}

// Escuchar evento submit
form.addEventListener('submit', e => {
    e.preventDefault()

    enviar()
})