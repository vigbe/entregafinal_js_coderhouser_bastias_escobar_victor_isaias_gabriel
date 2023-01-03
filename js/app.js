// import { APIKEY } from './apiKey.js'

// AJAX

const input = document.querySelector('#input_text');
const clima = document.getElementById('clima')
const descripcion = document.getElementById('city')
const clouds = document.getElementById('clouds')
const desc = document.getElementById('desc')
const button = document.getElementById('submit')

const apiKey = "808291e03fe63218023294761d9086d5"

button.addEventListener('click', function(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&lang=sp&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
    const tempValue = data.main.temp;
    const nameValue = data.name;
    const productoDetalleValue = data.sys.country;
    const cloudsValue = data.clouds.all;
    const descValue = data.weather[0].description;
    const icon = data.weather[0].icon;


    clima.innerHTML = `<p>${nameValue}, ${productoDetalleValue}</p>
                        <p>Temperatura ${tempValue} C°</p>
                        <p>Nubosidad ${cloudsValue} % con ${descValue}</p>
 


    `;
    input.value ="";
console.log(data)
})

.catch(err => alert("Error vuelva a ingresar la descripcion"));
})

const llamarClima = () => {
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=Santiago&units=metric&lang=sp&appid=${apiKey}`, (res) =>{
        console.log(res)
        const tempSlc = res.main.temp

        const descSlc = res.weather[0].description
        const cloudsValue = res.clouds.all;

        $('#tempActual').append(`
        <h3>Santiago, Chile </h3>
        <p>Nubosidad ${cloudsValue} %</p>
        <p>Temperatura ${tempSlc} C°</p>
        <p>${descSlc}</p>
        
        `)
    }
    )
}
llamarClima()

$('h1').css({
    "font-size": "10px",
    "opacity": 0,
    "margin-left":"-10px"

}
)
//animacion con JQ
$('h1').animate({
        "font-size": "40px",
        "opacity": 1,
        "margin-left": "50%"
}, 3000)

// Variables
let modal = document.querySelector('.modal');
let galeriaImg = document.querySelectorAll('.galeria img');
let modalImg = document.querySelector('#modalImg');
let imgBox = document.querySelectorAll('.lists img');
let cierreImg = document.querySelector('.cierreImg');

galeriaImg .forEach((images) => {

    images.addEventListener('click', () => { 
        modal.style.display = "block";
        modalImg.src = images.src;

        
    });

});

imgBox.forEach( img => img.addEventListener("click", imgLightbox) );

function imgLightbox (event) {
    modalImg.src = event.target.src;
}

cierreImg.addEventListener("click", () => {
    modal.style.display = "none";
});
