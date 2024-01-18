

    let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","z"];
    var oportunidad = 5;
    
   const divelementos = document.createDocumentFragment();
   let conBotones = document.getElementById("divLetras");

        for( let letra of letras){
            
            const boton = document.createElement("button");
            boton.textContent = letra;
            boton.value = letra;
            boton.id = "botton" + letra;
            divelementos.appendChild(boton);
          
        };
        conBotones.appendChild(divelementos);


