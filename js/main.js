let userParola = prompt('inserisci quì la parola da girare')
reverse(userParola)
function reverse(stringa) {
    let parola = ''
    for (let i = stringa.length - 1; i >= 0; i--) {
        parola += stringa[i]
    }
    console.log(parola)
}