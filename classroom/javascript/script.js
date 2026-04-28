class Mardik {
    constructor (anun, tariq){
        this.anun = anun
        this.tariq = tariq
        this.azganun = "khachhatryan"
    }
    nerkayanal (){
        return `es ${this.anun}n em, ${this.tariq} tarekan, azganuns ${this.azganun}`
    }
}

const manan = new Mardik ("manan", 21, "khachatryan")
const sv = new Mardik ("sv", 16, "khachatryan")
const sofi = new Mardik ("sofi", 13, "khachatryan")

console.log(sv.nerkayanal())     