console.log("Starting ");


//Bloque de import

// bloque de variables y contantes 

const listarGuitarras = (resultado) => {

resultado.forEach( (guitarra) => {

/** 
 * * Destructurar objetos !!! 
 */
const {nombre, descripcion, imagen, precio }  = guitarra;

  document.body.innerHTML += ` 
                              <div>
                                <div>
                                    <strong>Nombre:</strong>${nombre}
                                </div>
                                <div>
                                    <img  layout='responsive' width="100" height="220" src="${imagen.url}" alt="${nombre}"/>
                                </div>
                                <div>
                                    <strong>Descripcion:</strong>${descripcion}
                                </div>
                                <div>
                                    <strong>Precio:</strong>${precio}
                                </div>
                              </div>
                              `;
  
});


}


// Bloque funciones
const consultarApi = async () => { 
    try {
          /** 
          * * LEER UN TXT*
          * ! const respuesta = await fetch("Texto.txt");
          * ! const resultado = await respuesta.text();
          * * LEER UN JSON
          * ? const respuesta = await fetch("contactos.json");
          * ? const resultado = await respuesta.json();
          */
           const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras/");
           const resultado = await respuesta.json();
           listarGuitarras(resultado);
          //console.log(resultado);

      
          //
        // return consultar.data;
      } catch (error) {
          console.log("Error; " + error.mensaje);
      }

};

// Bloque de programa principal

consultarApi();
