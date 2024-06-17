class ninja {
    constructor (nombre, salud){
        //atributos
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    //metodos
    sayName(){
        console.log (this.nombre);
    }
    showStats(){
        
        console.log(this.nombre, this.salud, this.velocidad, this.fuerza);
    }
    drinkSake(){
        this.salud += 10;
    }
}
const ninja1 = new ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();