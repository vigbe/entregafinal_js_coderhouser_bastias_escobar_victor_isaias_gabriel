const contCatProducto = document.getElementById('catalogoProductos')
const agregaCarrito = document.getElementById('agrega-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')
const total = document.getElementById('total')



localStorage.setItem('total1', JSON.stringify(total))


const carrito = []


/// localstorage y JSON catalogo
const catalogoServicioLS = localStorage.getItem('catalogoServicios')

const guiaServicios = JSON.parse(catalogoServicioLS)
console.log(guiaServicios)

for (let i = 0; i < guiaServicios.length; i++){
    console.log(guiaServicios[i])
}
//////muestra catalogo//
const mostrarCatalogo = (arrayCat) => {
    contCatProducto.innerHTML = ''

    arrayCat.forEach((catProd) => {
        const div = document.createElement('div')
        div.classList.add('cartaPdto')    
        div.innerHTML = `
        <img src=${catProd.img} alt="...">
        <h2>${catProd.descripcion}</h2>
        <h4>${catProd.productoDetalle} - </h4>
        <p>${catProd.cantidad} días</p>
        <p>${catProd.tipoProducto}</p>
                <button onclick="agregarCarrito(${catProd.codArt})" class="boton-agregar-c"><i class="fas fa-plus-square"></i></button>                
                <button onclick="eliminarProducto(${catProd.codArt})" class="boton-eliminar"><i class="fas fa-minus-square"></i></button>
        
        <p>Precio:UF${catProd.valorEnUf}</p>
        <button onclick="agregarCarrito(${catProd.codArt})" class="boton-agregar">Agregar <i class="fa-microchip"></i></button>
        `
        contCatProducto.appendChild(div)
        
    })
}
mostrarCatalogo(guiaServicios)
// agrego itmes al carrito

const agregarCarrito = (itemAg) => {
    const itemCarrito = carrito.find((prod) => prod.codArt === itemAg)

    if (itemCarrito) {
        itemCarrito.cantidad++
        //lo guardo en localStorage
        localStorage.setItem('carrito1', JSON.stringify(carrito))
    } else {
        const producto = guiaServicios.find( (prod) => prod.codArt=== itemAg)
    
        carrito.push({
            codArt:producto.codArt,
            descripcion: producto.descripcion,
            img:producto.img,
            productoDetalle: producto.productoDetalle,
            cantidad: producto.cantidad,
            valorEnUf: producto.valorEnUf,
            cantidad: 1
            
        })
    }
    

    console.log(carrito)

    actualizaCarrito()
}
//localstorage Carrito
console.log(carrito)

localStorage.setItem('carrito', JSON.stringify(carrito))
console.log(total)

//renderiazar

const actualizaCarrito = () => {
    agregaCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('itemCarrito')

        div.innerHTML = `
                <img id="img2" src=${prod.img} alt="...">
                <p>${prod.codArt}</p>
                <p>${prod.descripcion}</p>
                <p>${prod.productoDetalle}</p>
                <p>Precio: UF${prod.valorEnUf}</p>

                <p>Personas: ${prod.cantidad}</p>
                <button onclick="agregarCarrito(${prod.codArt})" class="boton-agregar-c"><i class="fas fa-plus-square"></i></button>                
                <button onclick="eliminarProducto(${prod.codArt})" class="boton-eliminar"><i class="fas fa-minus-square"></i></button>


            `

        agregaCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    total.innerText = carrito.reduce((acc, prod) => acc += prod.valorEnUf * prod.cantidad, 0)
}

//eliminar

const eliminarProducto = (itemEl) => {
    const producto = carrito.find((prod) => prod.codArt === itemEl)
    
    producto.cantidad--
    //lo guardo en el local Storage
        localStorage.setItem('carrito', JSON.stringify(carrito))
    if (producto.cantidad === 0) {
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }

    actualizaCarrito()
}


//========================= modales
const modalAbrir = document.getElementById('modal-abrir')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContenedor = document.getElementsByClassName('modal-contenedor')[0]


modalAbrir.addEventListener('click', () => {
    modalContenedor.classList.add('modal-active')
})

modalCerrar.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})




///===============FILTROS===========

const selectFiltro = document.getElementById('tipoProductoes')
const selectDias = document.getElementById('cantidad')


const filtrar = () => {
    let valorFiltroRegiones = selectFiltro.value
    let valorFiltroDias = selectDias.value
    
    let arrayFiltrado = []

    if (valorFiltroRegiones == 'Todos') {
        arrayFiltrado = guiaServicios
    } else {
        arrayFiltrado = guiaServicios.filter( el => el.tipoProducto == selectFiltro.value) 
    }

    if (valorFiltroDias == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.cantidad <= 8)
    } else if (valorFiltroDias == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.cantidad >= 10)
    }

    mostrarCatalogo(arrayFiltrado)

}

selectFiltro.addEventListener('change', ()=>{
    filtrar()
})
selectDias.addEventListener('change', ()=>{
    filtrar()
})


