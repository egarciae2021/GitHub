function Buscaelpokemon()
{
    var nombrepokemon = document.getElementById("textt").value
    var UrlApi = "https://pokeapi.co/api/v2/pokemon/"+nombrepokemon
    
                fetch(UrlApi)
                .then((response) => {
                    if (response.ok) {
                      return response.json();
                    } else {
                      alert("Pokemon no encontrado");
                    }
                  })
                .then( data =>
                        {  
                        console.log(data)
                        var imagen;
                        imagen=document.createElement("img");
                        imagen.src = data.sprites.front_default;
                        salida=imagen.src; 
                        document.getElementById("Mostrar").innerHTML="<img src=" + salida+ ">";
                                                            
                        }
                    )
               
}

