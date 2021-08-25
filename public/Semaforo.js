
const socket = io();

var activado2 = false;
let option = 1;
let sg = 1000;
let tiempov = 10 ;
let tiempoa = 5 ;
let tiempor = 10 ;
var Activado = { Active: "false"}

const contador = document.getElementById('contador');
class Time {
    constructor(tV, tA, tR){
        this.tV = tV;
        this.tA = tA;
        this.tR = tR;
    }
}


let t = new Time();

t.tV = tiempov;
t.tA = tiempoa;
t.tR = tiempor;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  

  async function esperav(){
    contador.innerHTML = `<h1 style="color:red;">X</h1>`
    socket.emit('semaforo:activar', "X" )
    while(0 < t.tV)
    {    
        if(!activado2)
        break;   
        console.log("Verde: "+t.tV);
  t.tV -= 1;
await sleep(1000);
    }
  }
  async function esperaa(){
    contador.innerHTML = `<h1 style="color:red;">X</h1>`
    while(0 < t.tA)
    {    
        if(!activado2)
        break;   
        console.log("Amarillo: "+t.tA);
  t.tA -= 1;
await sleep(1000);
    }
  }
  async function esperar(){
    while(0 < t.tR)
    {    
        if(!activado2)
        break;   
        console.log("rojo: "+t.tR);
        contador.innerHTML = `<h1 style="color:green;">${t.tR}</h1>`
        socket.emit('semaforo:activar', t.tR )
       
  t.tR -= 1;
await sleep(1000);
    }

  }

async function activated(){



    let semaforo = document.getElementById("semaforo");
        
    
if(activado2){
    
  
        
    semaforo.className = "semaforo verde";
     await esperav();
 

    semaforo.className = "semaforo naranja";
  await esperaa(); 

    semaforo.className = "semaforo rojo";
     await esperar();
     if( t.tV <= 0 && t.tA <= 0 && t.tR <= 0)
     {
         t.tV = tiempov;
         t.tA = tiempoa;
         t.tR = tiempor;
     }
    activated();
}

}


function activar() {
    if(activado2){
        activado2 = false;
        console.log("Desactivado")
        activated();

    }
    else{
        activado2 = true;
        console.log("Activado")
        
      activated();
       
    }
   
    
}







function cruzar2(){
  socket.emit('semaforo:cruzar', "wenas" )
}

socket.on('semaforo:cruzar', function() {
  t.tV = 0; 
  
  
  
  });