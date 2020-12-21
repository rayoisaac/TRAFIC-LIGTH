



class semaforo {

    


    constructor(){

        let tiempo = new Date();

        this.contador =   parseInt(tiempo.getSeconds());
        this.estado = "",
        this.verde = "",
        this.amarillo = "",
        this.rojo=""

        //obteniendo datos del DOM
        this.luzroja = document.getElementById('circulo3'),
        this.luzamarilla = document.getElementById('circulo2'),
        this.luzverde = document.getElementById('circulo1');
        this.cronometro = document.getElementById('encabezado');



        
        


    }




    



    get statuColor(){

        
        
;


    };

     get change(){

        if((this.contador >=0) && (this.contador<21)){


            this.estado = "verde";
            this.luzverde.className = "iluminarverde";
            this.luzamarilla.className = "color2";
            this.luzroja.className = "color3";
            this.cronometro.textContent=`EL SEMAFORO CAMBIARA EN: ${this.contador-20}`



            console.log(this.estado);

        }else if((this.contador > 20) && (this.contador<41)){

            this.estado = "amarillo";

            this.luzverde.className = "color1";
            this.luzamarilla.className = "iluminaramarillo";
            this.luzroja.className = "color3";
            this.cronometro.textContent=`EL SEMAFORO CAMBIARA EN: ${this.contador-40}`


            console.log(this.estado );


        }else if((this.contador > 40) && (this.contador<61)){
            this.estado = "rojo";

            this.luzverde.className = "color1";
            this.luzamarilla.className = "color2";
            this.luzroja.className = "iluminarrojo";
            this.cronometro.textContent=`EL SEMAFORO CAMBIARA EN: ${this.contador-60}`


            console.log(this.estado);
        }


       

        console.log(this.contador);

    }

  









}






let actualizar = function(){
    let semaforo1 = new semaforo();
    semaforo1.change;


};


let intervalo = setInterval(actualizar,1000)



