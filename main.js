alert('Buenas noches, esto es una tienda de cigarrillos.')

const comprarCigarros = () => {
    let cigarros = 0
    let atados = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    do {
        alert('Que quiere comprar? Por favor ingrese la opcion deseada con el numero asignado.')
        cigarros = parseInt(prompt('1. Phillip Morris $700\n2. Marlboro $750\n3. Camel $650'))

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
                // alert('Por favor, ingrese una opcion numerica valida.')
                precio = 0
                atadosOk = 0
        }

        subtotal += precio * atadosOk

        seguirComprando = confirm('Queres seguir comprando?')
    } while (seguirComprando)

    return subtotal
}

const cigarroCheck = (cigarros) => {
    while (Number.isNaN(cigarros) || cigarros === 0 || cigarros < 0 || cigarros > 3){
        alert('Por favor, ingrese una opcion valida.')
        cigarros = parseInt(prompt('1. Phillip Morris\n2. Marlboro\n3. Camel'))
    }
    return cigarros
}

const atadoCheck = (atados) => {
    while (Number.isNaN(atados) || atados === 0 || atados < 0){
        alert('Por favor, ingrese una cantidad valida')
        atados = parseInt(prompt('Cuantos atados queres comprar?'))
    }
    return atados
}

let total = comprarCigarros()
alert('Gracias por comprar en el kiosco man.')
alert('El total de su compra es de $' + total)
// console.log(total)