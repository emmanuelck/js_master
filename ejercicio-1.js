//PAR O IMPAR

function evenodd(number){
    if(number %2 === 0){
      console.log("Number " + number + " is EVEN");
    }
    else{
      console.log("Number " + number + " is ODD");
    }
  }
  
  evenodd(5)
  
  //POSICIÓN DEL CARACTER
  
  var abc = "abcdefghijklmnñopqrstuvwxyz"
  
  function whereis(letter){
    var lowercase = letter.toLowerCase()
    var position =  abc.indexOf(lowercase)+1
    console.log('The letter ' + letter + ' is in position number ' + position)
  }
  
  whereis('ñ')
  
  //IMPUESTO
  
  function impuesto(valor){
    var iva = (valor * 19)/100;
    var valorFinal = valor + iva
    console.log('el precio con impuesto es de ' + valorFinal)
  }
  
  impuesto(1000)
  
  //DADO
  
  function dado(nombre){
    
    var jugador = nombre
    
    function tirarDados(){
      
      var dadoNumero = Math.floor(Math.random() *6 ) + 1
      
      console.log(nombre + ' tiró un dado y salió ' + dadoNumero)
    } 
    tirarDados();
  }
  
  dado('Emmanuel');


// DADO INTENTO 2

function dado(nombre){
    var nombre = nombre

    function tirarDados(){
        var jugador = nombre
        var dadoNumero = Math.floor(Math.random() *6 ) + 1
        console.log(nombre + ' tiró un dado y salió ' + dadoNumero)
    }
    tirarDados();
}

dado('Emmanuel');