const confirmados=document.getElementById("confirmados");
const mortes=document.getElementById("mortes");
const curados=document.getElementById("curados");
const doentes=document.getElementById("doentes");

//Todos os estados
function todos() {
  fetch('https://api.covid19api.com/total/country/brazil')
  .then(response => {
    return response.json()
  })
  .then(days => {
    const daysLenght=days.length;
    const day=days[daysLenght-1];
    
    mortes.innerHTML=day.Deaths;
    confirmados.innerHTML=day.Confirmed;
    doentes.innerHTML=day.Active;
    curados.innerHTML=day.Recovered;

    
  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Acre
function acre() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ac')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Alagoas
function alagoas() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/al')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Amapá
function amapa() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ap')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Amazonas
function amazonas() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/am')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado da Bahia
function bahia() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ba')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado Ceará
function ceara() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ce')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Distrito Federal
function distrito_federal() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/df')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Espírito Santo
function espirito_santo() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/es')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Goiás
function goias() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/go')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Maranhão
function maranhao() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ma')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Mato Grosso
function mato_grosso() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mt')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Mato Grosso do Sul
function mato_grosso_do_sul() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ms')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Minas Gerais
function minas_gerais() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do pará
function para() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pa')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado da Paraíba
function paraiba() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pb')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Paraná
function parana() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pr')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Pernâmbuco
function pernambuco() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pe')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Piauí
function piaui() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pi')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Rio de Janeiro
function rio_de_janeiro() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Rio Grande do Norte
function rio_grande_do_norte() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rn')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado do Rio Grande do Sul
function rio_grande_do_sul() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rs')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Rondônia
function rondonia() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ro')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Roraima
function roraima() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rr')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Santa Catarina
function santa_catarina() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sc')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de São Paulo
function sao_paulo() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Sergipe
function sergipe() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/se')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}

//Estado de Tocantins
function tocantins() {
  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/to')
  .then(response => {
    return response.json()
  })
  .then(day => {
    
    mortes.innerHTML=day.deaths;
    confirmados.innerHTML=day.cases;
    curados.innerHTML="----"
    doentes.innerHTML="----"
    alert("Devido a retirada do site oficial do governo com as informações detalhadas dos estados só é possível buscar os casos confirmados e os óbitos.");

  })
  .catch(err => {
    alert("Informações em tempo real indisponíveis no momento");
  })
}