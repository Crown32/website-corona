const confirmados=document.getElementById("confirmados");
const mortes=document.getElementById("mortes");
const curados=document.getElementById("curados");
const doentes=document.getElementById("doentes");

const api=document.getElementById("api");

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