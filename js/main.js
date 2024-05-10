let userParola = prompt('inserisci quì la parola da girare')
reverse(userParola)
function reverse(stringa) {
    let parolaReverse = ''
    for (let i = stringa.length - 1; i >= 0; i--) {
        parolaReverse += stringa[i]
    }
    console.log(parolaReverse)
}

const primo = ['a', 'b', 'c', 'd']
const secondo = [1, 2, 3]
const terzo = []

joint(primo, secondo, terzo)

function joint(array1, array2, array3) {
    let i = 0
    while (i < array1.length && i < array2.length) {
        array3.push(array1[i])
        array3.push(array2[i])
        i++

    }


    if (array1.length > array2.length) {
        while (i < array1.length) {
            array3.push(array1[i])
            i++
        }
    }
    else if (array2.length > array1.length) {
        while (i < array2.length) {
            array3.push(array2[i])
            i++
        }
    }
    console.log(terzo)
}

const numeri = [1, 3, 5, 2, 8, 6, 9]
const a = 3
const b = 8
const numeriMid = mid(numeri, a, b)

console.log(numeriMid)

function mid(array, a, b) {
    const arrayMid = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= a && array[i] <= b) {
            arrayMid.push(array[i])
        }
    }
    return arrayMid
}