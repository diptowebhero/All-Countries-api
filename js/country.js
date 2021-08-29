const loadCountry = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountry(data))
}
loadCountry()

const displayCountry = (names) => {
    const showCountry = document.getElementById('display-country')
    names.forEach(country => {
        console.log(country)
        const div = document.createElement("div")
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
                <img width = "150px" src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                 <h4 class="card-title">${country.name}</h4>
                 <h5 class="card-title">${country.capital}</h5>
            </div>
            <div class="card-footer text-center">
            <button onclick = "showDetails('${country.name}')" class="btn btn-outline-primary px-5">Details</button>
            </div>
        </div>
        `
        showCountry.appendChild(div)
    });
}

const showDetails = (names) =>{
    const url = `
    https://restcountries.eu/rest/v2/name/${names}`
    fetch(url)
    .then(response => response.json())
    .then(data=> showDisplayDetails(data[0]))
}

const showDisplayDetails = (id) => {
    const showDetails = document.getElementById ("country-details")
    showDetails.textContent = ''
    const div = document.createElement("div")
    div.classList.add('col')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
            <img src="${id.flag}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Capital: ${id.capital}</h5>
            <h5 class="card-title">Area: ${id.area}</h5>
            <h5 class="card-title">Populatio: ${id.population}</h5>
    </div>
    </div>
    `
    showDetails.appendChild(div)
}