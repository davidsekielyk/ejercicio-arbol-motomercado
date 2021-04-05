$.ajax({
    headers: {
        "Accept": "application/vnd.vtex.ds.v10+json",
        "Content-Type": "application/json"
    },
    type: 'GET',
    url: "/api/dataentities/MT/search/?_fields=idERP,marca,modelo,version,cilindrada,anio",
    success: function(data, textStatus, xhr){
        console.log("data",data);
        console.log("status",xhr.status)
    },
    error: function(e){
        console.error(e);
    }
});

const data = [
    {"idERP":"test1","marca":"Honda","modelo":"Wave","version":"Freno a tambor","cilindrada":"110","anio":2020},
    {"idERP":"test3","marca":"Honda","modelo":"Wave","version":"Freno a disco","cilindrada":"110","anio":2019},
    {"idERP":"test2","marca":"Honda","modelo":"Wave","version":"Freno a disco","cilindrada":"110","anio":2020},
    {"idERP":"test10","marca":"Bajaj","modelo":"Rouser","version":"-","cilindrada":"200","anio":2007},
    {"idERP":"test14","marca":"Bajaj","modelo":"Rouser","version":"F","cilindrada":"220","anio":2007},
    {"idERP":"test13","marca":"Bajaj","modelo":"Rouser","version":"DTS-I","cilindrada":"200","anio":2007},
    {"idERP":"test6","marca":"Honda","modelo":"Biz","version":"-","cilindrada":"125","anio":2020},
    {"idERP":"test5","marca":"Yamaha","modelo":"Crypton","version":"-","cilindrada":"110","anio":2019},
    {"idERP":"test15","marca":"Bajaj","modelo":"Rouser","version":"NS","cilindrada":"200","anio":2015},
    {"idERP":"test8","marca":"Honda","modelo":"XR Tornado","version":"-","cilindrada":"250","anio":2020},
    {"idERP":"test11","marca":"Bajaj","modelo":"Rouser","version":"-","cilindrada":"220","anio":2008},
    {"idERP":"test9","marca":"Bajaj","modelo":"Rouser","version":"UG3","cilindrada":"180","anio":2006},
    {"idERP":"test12","marca":"Bajaj","modelo":"Rouser","version":"AS","cilindrada":"200","anio":2015},
    {"idERP":"test4","marca":"Yamaha","modelo":"Crypton","version":"-","cilindrada":"110","anio":2020},
    {"idERP":"test7","marca":"Honda","modelo":"CG Titan","version":"-","cilindrada":"150","anio":2019}
]

function arbolBuscadorPorMoto(data) {
    const arbol = []

    // El ejemplo del return está en el json de motomercado.json
    return arbol
}