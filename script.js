





    const container = document.getElementById("container");
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => pintarDom(data));
    
    const pintarDom = (data) => {
  for(let i = 0; i < data.length; i++){
    container.innerHTML += `<div class="card  col-xs-12 col-sm-4 col-md-5 col-lg-3 " style="width: 15rem;" >
    <img src="${data[i].flags.svg}" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${data[i].name.common}</h5>
      <p class="card-text"> ${data[i].timezones[0]}</p>
      </p>
      <a href="${data[i].maps.googleMaps} "class="btn btn-primary">Mapa</a>
    </div>
  </div>`;
}

}

