class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        console.log("El animal hace un sonido");
    }   
}



class Perro extends Animal{}
const miPerro = new Perro("Firulais");
const miAnimal = new Animal("lucero");
miPerro.hacerSonido();
miAnimal.hacerSonido();