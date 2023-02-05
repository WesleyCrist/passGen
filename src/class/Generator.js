export default class Generator {

    #symbols = '`[]{}():,§&%$#@!-*-+;|?/'
    #numbers = '0123456789'
    #lethersLower = 'abcdefghijklmnopqrstuvwxyz'
    #lethersUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // Senha criada para retorno
    #pass = ''
    #error = ['primeiro argumento deve ser do tipo number', 'argumentos de seleção devem ser de tipo boolean']

    constructor(qtd, symbols = false, numbers = false, lethersUp = false, lethersDown = false) {
        try {
            // code
        } catch(e) {
            console.log(e.message)
        }
    }

    #genPass() {
        // code
    }

    #genFunctions(tmp) {
        return [
            function() {
                // code
            },
            function() {
                // code
            },
            function() {
                // code
            }
        ]
    }

    #test(cond1, cond2, cond3, cond4, cond5) {
        if(typeof(cond1) !== 'number') throw new TypeError(this.#error[0])
        if(typeof(cond2) !== 'boolean' || typeof(cond3) !== 'boolean' || typeof(cond4) !== 'boolean' || typeof(cond5) !== 'boolean') throw new TypeError(this.#error[1])
    }
}

// campo de testes
(() => {
    try {
        const gen = new Generator(1)
    } catch(e) {
        console.log(e.message)
    }
})()