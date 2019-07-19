export default class {
    counter = 0
    constructor(prefix){
        this.prefix= prefix
    }

    gen(){
        return this.prefix + this.counter++
    }
}