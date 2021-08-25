const socket = io();
const contador = document.getElementById('contador');
socket.on('semaforo:activar', function(data) {
      if(data == "X"){
        contador.innerHTML = `<h1 style="color:red;">${data}</h1>`  
      }
        else{
            contador.innerHTML = `<h1 style="color:green;">${data}</h1>`
        }  
    
          
});