import Empty from "../error/Empty.js"
import InternalError from "../error/InternalError.js"
import Invalid from "../error/Invalid.js"

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
    
    constructor(obj) { this.#verification(obj) }

    #random = (max, min) => {
        const r = Math.random() * (max - min) + min
        if(Math.floor(r) < 10) return Number('0' + Math.floor(r).toString())
        else return Number(Math.floor(r).toString())
        /*
        if(Math.floor(r) < 10) {
            let modified = '0' + Math.floor(r).toString()
            return Number(modified)
        } else {
            return Number(Math.floor(r).toString())
        }
        */
    }

    #verification = obj => {
        if(typeof(obj) !== 'object') throw new TypeError('O atributo a ser passado deve ser do tipo "object"')
        if(Object.keys(obj).length === 0) throw new Empty('O objeto a ser passado não pode estar vazio')
        const { symbols, numbers, lethersLower, lethersUp, size } = obj
        if( !symbols && !numbers && !lethersLower && !lethersUp) throw new Invalid('para a geração da senha, algum dos atributos devem ser "true"')
        if(typeof(size) === 'undefined') throw new Empty('Tamanho da senha requerido!')
        if(typeof(size) !== 'number') throw new TypeError('O atributo a ser passado deve ser do  tipo "number"')
        if(size < 8 || size > 25) throw new RangeError('O tamanho da senha está fora dos limites definidos')
        this.#size = size
        this.#listCond = [ symbols, numbers, lethersLower, lethersUp ]
        for (const key of this.#listCond) {
            if(typeof(key) !== 'boolean') throw new TypeError('O atributo a ser passado deve ser do tipo "boolean"')
        }
        this.#conditions = { symbols, numbers, lethersLower, lethersUp }
    }

    #addition = () => {
        while(this.#key.length < this.#size) {
            if(this.#conditions.symbols) { 
                this.#key.push(this.#symbols[this.#random(this.#symbols.length, 0)])
                if(this.#key.length === this.#size) break
            }
            if(this.#conditions.numbers) {
                this.#key.push(this.#num[this.#random(this.#num.length, 0)])
                if(this.#key.length === this.#size) break
            }
            if(this.#conditions.lethersLower) {
                this.#key.push(this.#letrasDown[this.#random(this.#letrasDown.length, 0)])
                if(this.#key.length === this.#size) break
            }
            if(this.#conditions.lethersUp) {
                this.#key.push(this.#letrasUp[this.#random(this.#letrasUp.length, 0)])
                if(this.#key.length === this.#size) break
            }
        }
    }

    #creation = () => {
        this.#pass = ''
        this.#addition()
        this.#pass = this.#key.toString()
        this.#pass = this.#pass.replace(/,/g, '')
        if(this.#pass === '') throw new InternalError('something wrong is not right')
    }

    run = () => {
        this.#creation()
        return this.#pass
    }
}
