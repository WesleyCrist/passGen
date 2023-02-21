import InternalError from "../error/InternalError.js"
export default class Generator {
    
    #num = '0123456789'
    #letrasUp = 'abcdefghijklmnopqrstuvwxyz'
    #letrasDown = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    #symbols = '`[]{}():§&%$#@!-*-+;|?/'
    #conditions = {
        symbols: false, // 1
        numbers: false, // 2
        lethersLower: false, // 3
        lethersUp: false    // 4
    }
    #listCond
    #size
    #pass = 'password'
    #key = []
    
    constructor(obj) {
        this.#verification(obj)
    }

    #random(max, min) {
        const r = Math.random() * (max - min) + min
        if(Math.floor(r) < 10) {
            let modified = '0' + Math.floor(r).toString()
            return Number(modified)
        } else {
            return Number(Math.floor(r).toString())
        }
    }

    #verification(obj) {
        if(typeof(obj) !== 'object') throw new TypeError('O atributo a ser passado deve ser do tipo "object"')
        const { symbols, numbers, lethersLower, lethersUp, size } = obj
        if(typeof(size) !== 'number') throw new TypeError('O atributo a ser passado deve ser do  tipo "number"')
        this.#size = size
        this.#listCond = [ symbols, numbers, lethersLower, lethersUp ]
        for (const key of this.#listCond) {
            if(typeof(key) !== 'boolean') throw new TypeError('O atributo a ser passado deve ser do tipo "boolean"')
        }
        this.#conditions = { symbols, numbers, lethersLower, lethersUp }
    }

    #addition() {
        while(this.#key.length < this.#size) {
            if(this.#conditions.symbols) this.#key.push(this.#symbols[this.#random(this.#symbols.length, 0)])
            if(this.#conditions.numbers) this.#key.push(this.#num[this.#random(this.#num.length, 0)])
            if(this.#conditions.lethersLower) this.#key.push(this.#letrasDown[this.#random(this.#letrasDown.length, 0)])
            if(this.#conditions.lethersUp) this.#key.push(this.#letrasUp[this.#random(this.#letrasUp.length, 0)])
        }
    }

    #creation() {
        this.#pass = ''

        this.#addition()

        // Código não funcional para redução do tamanho da senha para o tamanho solicitado
        /*
        if(this.#key > this.#size) {
            let i = this.#key - this.#size
            let a = 1
            while(i >= a) {
                this.#key.pop()
                a++
            }
        }
        */

        this.#pass = this.#key.toString()
        this.#pass = this.#pass.replace(/,/g, '')
        if(this.#pass === '') throw new InternalError('Algo de errado não está certo')
    }

    run() {
        this.#creation()
        // console.log(this.#pass.length)
        return this.#pass
    }
}
