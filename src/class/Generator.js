export default class Generator {
    
    #num = '123456789'
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
    
    constructor(obj, qtd) {
        this.#verification(obj, qtd)
    }

    #random(min, max) {
        const random = (min, max) => {
            const r = Math.random() * (max - min) + min
            if(Math.floor(r) < 10) {
                let modified = '0' + Math.floor(r).toString()
                return Number(modified)
            } else {
                return Number(Math.floor(r).toString())
            }
        }
    }

    #verification(obj, qtd) {
        if(typeof(qtd) !== 'number') throw new TypeError('O atributo a ser passado deve ser do  tipo "number"')
        if(typeof(obj) !== 'object') throw new TypeError('O atributo a ser passado deve ser do tipo "object"')
        this.#size = qtd
        const { symbols, numbers, lethersLower, lethersUp } = obj
        this.#listCond = [ symbols, numbers, lethersLower, lethersUp ]
        for(let i = 0; i < this.#listCond.length; i++) {
            const element = this.#listCond[i];
            if(typeof(element) === 'boolean') {
                this.#conditions[i] = element
            } else {
                this.#conditions[i] = false
            }
        }
    }

    #creation() {
        let score = 0; let alpha = 1;
        let pass = []
        this.#pass = ''
        do {
            switch (alpha) {
                case 1:
                    if(this.#conditions.symbols) {
                        pass.push(this.#symbols[this.#random(this.#symbols.length, 0)])
                    }
                break;
                case 2:
                    if(this.#conditions.numbers) {
                        pass.push(this.#num[this.#random(this.#num.length, 0)])
                    }
                break;
                case 3:
                    if(this.#conditions.lethersLower) {
                        pass.push(this.#letrasDown[this.#random(this.#letrasDown.length, 0)])
                    }
                break;
                case 4:
                    if(this.#conditions.lethersUp) {
                        pass.push(this.#letrasUp[this.#random(this.#letrasUp.length, 0)])
                    }
                break;
            }
            score += 1; alpha += 1;
            if(alpha === 5) alpha = 1
        } while (score <= this.#size);
        this.#pass = pass.toString()
        this.#pass = this.#pass.replace(/,/g, '')
    }

    run() {
        this.#creation()
    }

}

/*
(() => {
    // campo de testes

    const test1 = () => {
        let pass = []
        pass.push('w')
        pass.push('e')
        pass.push('s')
        pass.push('l')
        pass.push('e')
        pass.push('y')
        let senha = pass.toString()
        senha = senha.replace(/,/g, '')
        console.log(senha)
    }

    const test2 = (max, min) => {
        const r = Math.random() * (max - min) + min
        if(Math.floor(r) < 10) {
            let modified = '0' + Math.floor(r).toString()
            modified = Number(modified)
            return modified
        } else {
            return Number(Math.floor(r).toString())
        }
        // console.log(r)
    }

    const test3 = () => {
        const lethersUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        console.log(lethersUp[test2(lethersUp.length, 0)])
    }

    const test4 = () => {
        const lethersUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        console.log(test2(lethersUp.length, 0))
    }

    test3()
})()
*/