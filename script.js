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

//Estados específicos
function estados(uf) {

  fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/'+uf)
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