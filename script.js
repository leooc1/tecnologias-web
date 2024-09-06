document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const mensagem = document.getElementById('mensagem')
    if (nome.value.length && email.value.length && mensagem.value.length) {
        alert('Enviado com sucesso!')
        nome.value = ''
        email.value = ''
        mensagem.value = ''
    }
    else {
        if (!nome.value.length) {
            nome.classList.add('border-red-400')
            nome.nextElementSibling.classList.add('opacity-100')
        }

        if (!email.value.length) {
            email.classList.add('border-red-400')
            email.nextElementSibling.classList.add('opacity-100')
        }

        if (!mensagem.value.length) {
            mensagem.classList.add('border-red-400')
            mensagem.nextElementSibling.classList.add('opacity-100')
        }

    }

})

function writeName() {
    const nome = document.getElementById('nome')
    const errMsg = nome.nextElementSibling
    if (nome.value.length) {
        nome.classList.remove('border-red-400')
        errMsg.classList.remove('opacity-100')
    }
}

function writeEmail() {
    const email = document.getElementById('email')
    const errMsg = email.nextElementSibling
    if (email.value.length) {
        email.classList.remove('border-red-400')
        errMsg.classList.remove('opacity-100')
    }
}

function writeMessage() {
    const mensagem = document.getElementById('mensagem')
    const errMsg = mensagem.nextElementSibling
    if (mensagem.value.length) {
        mensagem.classList.remove('border-red-400')
        errMsg.classList.remove('opacity-100')
    }
}