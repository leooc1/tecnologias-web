let contatos = []

const inputNome = document.getElementById('nome')
const inputSobrenome = document.getElementById('sobrenome')
const inputEndereco = document.getElementById('endereco')
const inputTelefone = document.getElementById('telefone')
const inputHidden = document.getElementById('index')

const addContact = (nome, sobrenome, endereco, telefone) => {
    contatos.push({ nome, sobrenome, endereco, telefone })
}

const disableIEEButtons = () => {
    const incluir = document.getElementById('incluir')
    const editar = document.getElementById('editar')
    const excluir = document.getElementById('excluir')

    incluir.disabled = true
    editar.disabled = true
    excluir.disabled = true

    incluir.classList.add('cursor-no-drop')
    incluir.classList.add('brightness-75')
    editar.classList.add('cursor-no-drop')
    editar.classList.add('brightness-75')
    excluir.classList.add('cursor-no-drop')
    excluir.classList.add('brightness-75')
}

const disableSCButtons = () => {
    const salvar = document.getElementById('salvar')
    const cancelar = document.getElementById('cancelar')

    salvar.disabled = true
    cancelar.disabled = true

    salvar.classList.add('cursor-no-drop')
    salvar.classList.add('brightness-75')
    cancelar.classList.add('cursor-no-drop')
    cancelar.classList.add('brightness-75')
}

const activeIEEButtons = () => {
    const incluir = document.getElementById('incluir')
    const editar = document.getElementById('editar')
    const excluir = document.getElementById('excluir')

    incluir.disabled = false
    editar.disabled = false
    excluir.disabled = false

    incluir.classList.remove('cursor-no-drop')
    incluir.classList.remove('brightness-75')
    editar.classList.remove('cursor-no-drop')
    editar.classList.remove('brightness-75')
    excluir.classList.remove('cursor-no-drop')
    excluir.classList.remove('brightness-75')
}

const activeSCButtons = () => {
    const salvar = document.getElementById('salvar')
    const cancelar = document.getElementById('cancelar')

    salvar.disabled = false
    cancelar.disabled = false

    salvar.classList.remove('cursor-no-drop')
    salvar.classList.remove('brightness-75')
    cancelar.classList.remove('cursor-no-drop')
    cancelar.classList.remove('brightness-75')
}

const incluir = () => {
    inputNome.value = ''
    inputSobrenome.value = ''
    inputEndereco.value = ''
    inputTelefone.value = ''
    inputNome.disabled = false
    inputSobrenome.disabled = false
    inputEndereco.disabled = false
    inputTelefone.disabled = false
    inputHidden.value = ''

    disableIEEButtons()
    activeSCButtons()

    inputNome.focus()
}

const salvar = () => {
    if (inputNome.value == '' ||
        inputSobrenome.value == '' ||
        inputEndereco.value == '' ||
        inputTelefone.value == '') {
        alert('Todos campos precisam estar preenchidos!')
    } else {
        if (inputHidden.value == '') {//incluir
            addContact(inputNome.value, inputSobrenome.value, inputEndereco.value, inputTelefone.value)
            cancelar()
        } else {//edit
            let index = Number(inputHidden.value)
            contatos[index].nome = inputNome.value
            contatos[index].sobrenome = inputSobrenome.value
            contatos[index].endereco = inputEndereco.value
            contatos[index].telefone = inputTelefone.value
            cancelar()
        }
    }
}

const editar = () => {
    if (inputHidden.value == '') {
        alert('Não é possivel editar agora!')
    }
    else {
        inputNome.disabled = false
        inputSobrenome.disabled = false
        inputEndereco.disabled = false
        inputTelefone.disabled = false

        disableIEEButtons()
        activeSCButtons()

        inputNome.focus()
    }
}

const initialContato = () => {
    inputNome.disabled = true
    inputSobrenome.disabled = true
    inputEndereco.disabled = true
    inputTelefone.disabled = true

    if (contatos.length) {
        inputNome.value = contatos[0].nome
        inputSobrenome.value = contatos[0].sobrenome
        inputEndereco.value = contatos[0].endereco
        inputTelefone.value = contatos[0].telefone
        inputHidden.value = 0

        activeIEEButtons()
        disableSCButtons()
    }
    else {

    }
}

const lastContato = () => {
    inputNome.disabled = true
    inputSobrenome.disabled = true
    inputEndereco.disabled = true
    inputTelefone.disabled = true

    if (contatos.length) {
        inputNome.value = contatos[contatos.length - 1].nome
        inputSobrenome.value = contatos[contatos.length - 1].sobrenome
        inputEndereco.value = contatos[contatos.length - 1].endereco
        inputTelefone.value = contatos[contatos.length - 1].telefone
        inputHidden.value = contatos.length - 1

        activeIEEButtons()
        disableSCButtons()
    }
}

const nextContato = () => {
    inputNome.disabled = true
    inputSobrenome.disabled = true
    inputEndereco.disabled = true
    inputTelefone.disabled = true

    let index = -1
    if (inputHidden.value.length)
        index = Number(inputHidden.value)

    if (contatos.length) {
        if ((index + 1) < contatos.length && (index + 1) >= 0 && index >= 0) {
            inputNome.value = contatos[index + 1].nome
            inputSobrenome.value = contatos[index + 1].sobrenome
            inputEndereco.value = contatos[index + 1].endereco
            inputTelefone.value = contatos[index + 1].telefone
            inputHidden.value = index + 1

            activeIEEButtons()
            disableSCButtons()
        }
        else {
            inputNome.value = contatos[contatos.length - 1].nome
            inputSobrenome.value = contatos[contatos.length - 1].sobrenome
            inputEndereco.value = contatos[contatos.length - 1].endereco
            inputTelefone.value = contatos[contatos.length - 1].telefone
            inputHidden.value = contatos.length - 1

            activeIEEButtons()
            disableSCButtons()
        }
    }
}

const prevContato = () => {
    inputNome.disabled = true
    inputSobrenome.disabled = true
    inputEndereco.disabled = true
    inputTelefone.disabled = true

    let index = 0
    if (inputHidden.value.length)
        index = Number(inputHidden.value)

    if (contatos.length) {
        if ((index - 1) < contatos.length && (index - 1) >= 0) {
            inputNome.value = contatos[index - 1].nome
            inputSobrenome.value = contatos[index - 1].sobrenome
            inputEndereco.value = contatos[index - 1].endereco
            inputTelefone.value = contatos[index - 1].telefone
            inputHidden.value = index - 1

            activeIEEButtons()
            disableSCButtons()
        }
        else {
            inputNome.value = contatos[0].nome
            inputSobrenome.value = contatos[0].sobrenome
            inputEndereco.value = contatos[0].endereco
            inputTelefone.value = contatos[0].telefone
            inputHidden.value = 0

            activeIEEButtons()
            disableSCButtons()
        }
    }
}

const cancelar = () => {
    inputNome.disabled = true
    inputSobrenome.disabled = true
    inputEndereco.disabled = true
    inputTelefone.disabled = true

    inputNome.value = ''
    inputSobrenome.value = ''
    inputEndereco.value = ''
    inputTelefone.value = ''
    inputHidden.value = ''

    activeIEEButtons()
    disableSCButtons()
}

const excluir = () => {
    if (inputHidden.value == '') {
        alert('Não é possivel excluir agora!')
    }
    else {
        let confirma = confirm('Quer mesmo excluir este contato?')
        if (confirma) {
            let index = Number(inputHidden.value)
            contatos.splice(index, 1)
            inputNome.value = ''
            inputSobrenome.value = ''
            inputEndereco.value = ''
            inputTelefone.value = ''
            inputHidden.value = ''
        }
    }
}