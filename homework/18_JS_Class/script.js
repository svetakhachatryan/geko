class Car {
    constructor(brand, model, color, year){
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year
    }
    getinfo () {
        return `Սա ${this.brand} ${this.model} է, ${this.color} գույնի, արտադրված ${this.year} թվականին`
    }
    getAge(){
        const currentYear = 2026;
        return currentYear - this.year
    }
}
 const bmw = new Car ("BMW","M5 F90","կարմիր",2017)
 const audi = new Car ("Audi","RS7 C8","սպիտակ",2019)
 const kia = new Car ("Kia","K5","սև",2019)
 const ferrari = new Car ("Ferrari","SF90","վարդագույն",2019)
 const lamborghini = new Car ("Lamborghini","Aventador SVJ","մոխրագույն",2018)
 const garage = [bmw,audi,kia,ferrari,lamborghini,]

 garage.forEach (car => {
    console.log(car.getinfo())
    console.log("Տարիքը՝ " + car.getAge())
 })
