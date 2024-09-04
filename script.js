window.addEventListener('load', () => {
    const links = document.getElementsByTagName('a')
    const title = document.title
    const index = Number(title.split(' ')[1])
    links[index - 1].classList.add('bg-fuchsia-800')
    links[index - 1].classList.add('font-bold')
    links[index - 1].classList.add('text-zinc-50')
})

function alertEx1() {
    alert('Alô mundo')
}

function numEx2() {
    const num = document.getElementById("num")
    if (num.value) {
        alert(`O número informado foi ${num.value}`)
    } else {
        alert(`Teve número não`)
    }
}

function somaEx3() {
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    alert(`SOMA: ${Number(num1.value) + Number(num2.value)}`)
}

function mediaEx4() {
    const nota1 = document.getElementById("nota1")
    const nota2 = document.getElementById("nota2")
    const nota3 = document.getElementById("nota3")
    const nota4 = document.getElementById("nota4")

    alert(`MÉDIA DAS NOTAS: ${((Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value)) / 4)}`)
}

function metroEmCentimetroEx5() {
    const metro = document.getElementById('metro')
    const centimetro = document.getElementById('centimetro')

    centimetro.value = Number(metro.value) * 100
}

function areaCirculoEx6() {
    const raio = document.getElementById('raio')
    const area = document.getElementById('area')

    area.value = Math.PI * (Number(raio.value) ** 2)
}

function areaQuadradoEx7() {
    const lado = document.getElementById('lado')
    const area = document.getElementById('area')

    area.value = (Number(lado.value) ** 2)
    alert(`DOBRO DA ÁREA É: ${(Number(lado.value) ** 2) * 2}`)
}

function salarioEx8() {
    const din_hora = document.getElementById('din-hora')
    const hora_trab = document.getElementById('hora-trab')

    alert(`SALÁRIO É DE R$ ${(Number(din_hora.value) * Number(hora_trab.value)).toFixed(2)} POR MÊS`)
}

function FpraCEx9() {
    const F = document.getElementById('F')
    const C = document.getElementById('C')

    C.value = 5 * ((Number(F.value) - 32) / 9)
}

function CpraFEx10() {
    const C = document.getElementById('C');
    const F = document.getElementById('F');

    F.value = (Number(C.value) * (9 / 5)) + 32;
}

function Ex11() {
    const primeiro = document.getElementById('primeiro')
    const segundo = document.getElementById('segundo')
    const terceiro = document.getElementById('terceiro')

    const p = Number(primeiro.value)
    const s = Number(segundo.value)
    const t = Number(terceiro.value)

    alert(`a. ${(p * 2) * (s / 2)}`)
    alert(`b. ${(p * 3) + (t)}`)
    alert(`c. ${(t ** 3)}`)
}

function Ex12() {
    const altura = document.getElementById('altura')

    alert(`a. ${((72.2 * Number(altura.value)) - 58).toFixed(2)}`)
    alert(`b. ${((62.1 * Number(altura.value)) - 44.7).toFixed(2)}`)
}

function Ex13() {
    const din_hora = document.getElementById('din-hora');
    const hora_trab = document.getElementById('hora-trab');
    const salarioBruto = Number(din_hora.value) * Number(hora_trab.value);

    const descontoIR = salarioBruto * 0.11;
    const descontoINSS = salarioBruto * 0.08;
    const descontoSindicato = salarioBruto * 0.05;

    const salarioLiquido = salarioBruto - descontoIR - descontoINSS - descontoSindicato;

    alert(`
+ Salário Bruto: R$ ${salarioBruto.toFixed(2)}
- IR (11%): R$ ${descontoIR.toFixed(2)}
- INSS (8%): R$ ${descontoINSS.toFixed(2)}
- Sindicato (5%): R$ ${descontoSindicato.toFixed(2)}
= Salário Líquido: R$ ${salarioLiquido.toFixed(2)}
`);
}
