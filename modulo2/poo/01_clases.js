class Car{
    constructor(brand, model){
        this.brand=brand;
        this.brandmodel=model;

    }

    start(){
        console.log(`${this.brand} ${this.model} esta encendido`)
    }

    run(){
        console.log(`${this.brand} ${this.model} esta encendido`)
    }

    stop(){
        console.log(`${this.brand} ${this.model} esta encendido`)
    }


}


const miCarro=new Car('Toyota','Corolla');
miCarro.start()
miCarro.run()
miCarro.stop()
console.log(miCarro.brand)

console.log(miCarro.model)