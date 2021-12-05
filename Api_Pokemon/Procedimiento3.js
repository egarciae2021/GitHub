function Buscaelpokemon()
{
  const Data =  {
    "codigo": "LIMAYA120121",
    "asientos_libres":"A4,B1,B2,C3,C4"   
}

var Cuerpo ={
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(Data),
}


console.log("Prueba Api:")

    var UrlApi = "http://localhost:58683/api/viaje/"
    
                fetch(UrlApi,Cuerpo)
                .then((response) => {return response.json() })
                .then( data =>
                        {  
                          var mostrar = data.length*0.5 
                          for(var x=mostrar ; x < data.length-1 ; x++){
                            console.log(data[x])
                          }
                                                                                    
                        }
                    )
               
}

