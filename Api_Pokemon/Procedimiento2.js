function Buscaelpokemon()
{
  const Data =  {
    "DocumentoIdentidad":"12312312",
    "Nombres":document.getElementById("textt").value,
    "Telefono":"123456789",
    "Correo":"garcia4014@gmail.com",
    "Ciudad":"Lima"
}

var Cuerpo ={
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(Data),
}


    var UrlApi = "http://localhost:58683/api/usuario"
    
                fetch(UrlApi,Cuerpo)
                .then((response) => {return response.json() })
                .then( data =>
                        {  
                        console.log(data)
                                                                                    
                        }
                    )
               
}

