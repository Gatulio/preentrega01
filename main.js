const cigarrillos = [
    {
        marca: 'Phillips Morris',
        precio: 700
    },
    {
        marca: 'Marlboro',
        precio: 750
    },
    {
        marca: 'Camel',
        precio: 650
    }
]

const lista = (cigarrillos) => {
    return cigarrillos.map((cigarrillo, i) => {
        return `${i+1}. ${cigarrillo.marca} $${cigarrillo.precio} `
    })
}
console.log(lista(cigarrillos))

const listita = lista(cigarrillos)

const transform = (cigarritos) => {
    let cigarroMsj = ''
    cigarritos.forEach((cigarrito, i ) => {
        cigarroMsj += cigarrito
    });
    return cigarroMsj
}


const cigarroMsj = transform(listita)
alert('Buenas noches, esto es una tienda de cigarrillos.')

const comprarCigarros = () => {
    let cigarros = 0
    let atados = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    do {
        alert('Que quiere comprar? Por favor ingrese la opcion deseada con el numero asignado.')
        cigarros = parseInt(prompt(cigarroMsj))

        let cigarroOk = cigarroCheck(cigarros)

        atados = parseInt(prompt('Cuantos atados queres comprar?'))

        let atadosOk = atadoCheck(atados)

        switch (cigarroOk) {
            case 1:

                precio = 700
                break
            case 2:
                precio = 750
                break
            case 3:
                precio = 650
                break
            default:
                precio = 0
                atadosOk = 0
        }

        subtotal += precio * atadosOk

        seguirComprando = confirm('Queres seguir comprando?')
    } while (seguirComprando)

    return subtotal
}

const cigarroCheck = (cigarros) => {
    while (Number.isNaN(cigarros) || cigarros <= 0 || cigarros > 3) {
        alert('Por favor, ingrese una opcion valida.')
        cigarros = parseInt(prompt(cigarroMsj))
    }
    return cigarros
}

const atadoCheck = (atados) => {
    while (Number.isNaN(atados) || atados === 0 || atados < 0) {
        alert('Por favor, ingrese una cantidad valida')
        atados = parseInt(prompt('Cuantos atados queres comprar?'))
    }
    return atados
}

let total = comprarCigarros()
alert('Gracias por comprar en el kiosco man.')
alert('El total de su compra es de $' + total)