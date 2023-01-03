
//catalogo de productos -Objeto Literal-
const catalogoServicios = [
    {codArt:01,img:'./img/Landing-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Landing',descripcion:'Pagina de bienvenida o introducción',anniosDeHosting:1,valorEnUf:3.5,cantidad:1},
    {codArt:02,img:'./img/Dedicated-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Landing',descripcion:'Pagina dedicada',anniosDeHosting:1,valorEnUf:3.5,cantidad:1},
    {codArt:03,img:'./img/Sections-Web-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Landing',descripcion:'Pagina con secciones',anniosDeHosting:1,valorEnUf:3,cantidad:1},
    {codArt:04,img:'./img/Blog-Web-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Landing',descripcion:'Pagina con blog',anniosDeHosting:1,valorEnUf:1700,cantidad:1},
    {codArt:05,img:'./img/Comments-Web-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Landing',descripcion:'Pag con referencias',anniosDeHosting:1,valorEnUf:1700,cantidad:1},
    {codArt:06,img:'./img/EcommerceOneCategorie.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Ecommerce',descripcion:'EC con una categoria',anniosDeHosting:1,valorEnUf:3,cantidad:1},
    {codArt:07,img:'./img/Ecommerce-Multi-Categories.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Ecommerce',descripcion:'EC con una a cinco categorias',anniosDeHosting:1,valorEnUf:3,cantidad:1},
    {codArt:08,img:'./img/Supermarket-Web-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Ecommmerce con difusión',descripcion:'Supermercado',anniosDeHosting:1,valorEnUf:2,cantidad:1},
    {codArt:09,img:'./img/Megamarket-Web-Page.jpg',tipoProducto:'Página web o E-commerce', productoDetalle:'Ecommerce con difusión',descripcion:'Megamercado',anniosDeHosting:1,valorEnUf:2,cantidad:1},            
    {codArt:10,img:'./img/Hosting-Pequeño.jpg',tipoProducto:'Hosting', productoDetalle:'Hosting correos multidominio',descripcion:'100gb',anniosDeHosting:1,valorEnUf:2,cantidad:1},
    {codArt:11,img:'./img/Hosting-Multidominio.jpg',tipoProducto:'Hosting', productoDetalle:'Hosting correos multidominio',descripcion:'100gb',anniosDeHosting:1,valorEnUf:2,cantidad:1},
    {codArt:12,img:'./img/Hosting-Correo.jpg',tipoProducto:'Hosting', productoDetalle:'Hosting correos',descripcion:'300gb',anniosDeHosting:1,valorEnUf:2,cantidad:1},     
    {codArt:13,img:'./img/Hosting-Penultimo.jpg',tipoProducto:'Hosting', productoDetalle:'Hosting correos',descripcion:'300gb',anniosDeHosting:1,valorEnUf:2,cantidad:1},      
    {codArt:14,img:'./img/Hosting-Ultimo.jpg',tipoProducto:'Hosting', productoDetalle:'Hosting correos',descripcion:'1tb',anniosDeHosting:1,valorEnUf:2,cantidad:1},
    {codArt:15,img:'./img/Soporte.jpg',tipoProducto:'Soporte Técnico', productoDetalle:'Soporte Mensual ',descripcion:'Soporte Hor/Oficina para hasta 5 usuarios',anniosDeHosting:1,valorEnUf:5,cantidad:1},    
    {codArt:16,img:'./img/Soporte.jpg',tipoProducto:'Soporte Técnico', productoDetalle:'Soporte Mensual',descripcion:'Soporte Hor/Oficina para hasta 10 usuarios',anniosDeHosting:1,valorEnUf:10,cantidad:1},
    {codArt:17,img:'./img/Soporte.jpg',tipoProducto:'Soporte Técnico', productoDetalle:'Soporte Mesual',descripcion:'Soporte Hor/Oficina para hasta 20 usuarios',anniosDeHosting:1,valorEnUf:15,cantidad:1},
    {codArt:18,img:'./img/Soporte.jpg',tipoProducto:'Soporte Técnico', productoDetalle:'Soporte Mensual',descripcion:'Soporte Hor/Oficina para hasta 50 usuarios',anniosDeHosting:1,valorEnUf:20,cantidad:1},
    {codArt:19,img:'./img/Soporte.jpg', tipoProducto: 'Soporte Técnico', productoDetalle: 'Soporte Anual', descripcion: 'Soporte 24/7 para hasta 50 Usuarios', anniosDeHosting:1, valorEnUf: 300 ,cantidad:1},
    {codArt:20,img:'./img/Soporte.jpg', tipoProducto: 'Soporte Técnico', productoDetalle: 'Soporte Anual', descripcion: 'Soporte 24/7 para hasta 100 Usuarios', anniosDeHosting:1, valorEnUf: 1000,cantidad:1 },
    {codArt:21, img:'./img/Facebook.jpg', tipoProducto: 'Integración E-Commerce', productoDetalle: 'Red Social', descripcion: 'Facebook', anniosDeHosting:1, valorEnUf: 1.2,cantidad:1 },
    {codArt:22, img:'./img/Instagram.jpg', tipoProducto: 'Integración E-Commerce', productoDetalle: 'Red Social', descripcion: 'Instagram', anniosDeHosting:1, valorEnUf: 1.2 ,cantidad:1},
    {codArt:23,img:'./img/Mercado-Libre.jpg', tipoProducto: 'Integración E-Commerce', productoDetalle: 'Mercado', descripcion: 'Mercado Libre', anniosDeHosting:1, valorEnUf: 1.2 ,cantidad:1},        
    {codArt:24,img:'./img/Locanto.jpeg', tipoProducto: 'Integración E-Commerce', productoDetalle: 'Mercado', descripcion: 'Locanto', anniosDeHosting:1, valorEnUf: 1.2 ,cantidad:1},
    {codArt:25,img:'./img/Twitter.jpg', tipoProducto: 'Integración E-Commerce', productoDetalle: 'Mercado', descripcion: 'Twitter', anniosDeHosting:1, valorEnUf: 300 ,cantidad:1},
]
//
//localStorage

localStorage.setItem('catalogoServicios', JSON.stringify(catalogoServicios))


//// mostrar catalogo completo

const contenedorServiciosEU = document.getElementById('contenedor-tipo-pagweb')
const contenedorServiciosAN = document.getElementById('contenedor-tipo-hosting')
const contenedorServiciosCA = document.getElementById('contenedor-tipo-soporte')
const contenedorServiciosSA = document.getElementById('contenedor-tipo-int-ecomer')


const mostrarServiciosEu = (arrayCat) => {
    contenedorServiciosEU.innerHTML = ''

    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaServicio')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.descripcion}</h3>
        <p>cantidad:${cv1.cantidad}</p>
        <p>UF${cv1.valorEnUf}</p>
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        
        contenedorServiciosEU.appendChild(div)
    })
    
}

const mostrarServiciosAN = (arrayCat) => {
    contenedorServiciosAN.innerHTML = ''
    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaServicio')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.descripcion}</h3>
        <p>cantidad:${cv1.cantidad}</p>
        <p>UF${cv1.valorEnUf}</p>        
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        contenedorServiciosAN.appendChild(div)
    })
    
}
const mostrarServiciosCA = (arrayCat) => {
    contenedorServiciosCA.innerHTML = ''
    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaServicio')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.descripcion}</h3>
        <p>cantidad:${cv1.cantidad}</p>
        <p>UF${cv1.valorEnUf}</p>        
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        contenedorServiciosCA.appendChild(div)
    })
    
}
const mostrarServiciosSA = (arrayCat) => {
    contenedorServiciosSA.innerHTML = ''
    arrayCat.forEach((cv1) => {
        const div = document.createElement('div')
        div.classList.add('cartaServicio')
        div.innerHTML = `
        <img src=${cv1.img} alt="Ciudad">
        <h3>${cv1.descripcion}</h3>
        <p>cantidad:${cv1.cantidad}</p>
        <p>UF${cv1.valorEnUf}</p>        
        <a class="boton-ver" href="./compra.html">Comprar</a>
        `        
        contenedorServiciosSA.appendChild(div)
    })
    
}
const filtrarEu = () => {
    const filtrado = catalogoServicios.filter((producto) => producto.tipoProducto === "Página web o E-commerce")
    mostrarServiciosEu(filtrado)
}
filtrarEu(catalogoServicios)

const filtrarAN = () => {
    const filtrado = catalogoServicios.filter((producto) => producto.tipoProducto === "Hosting")
    mostrarServiciosAN(filtrado)
}
filtrarAN(catalogoServicios)

const filtrarCA = () => {
    const filtrado = catalogoServicios.filter((producto) => producto.tipoProducto === "Soporte Técnico")
    mostrarServiciosCA(filtrado)
}
filtrarCA(catalogoServicios)

const filtrarSA = () => {
    const filtrado = catalogoServicios.filter((producto) => producto.tipoProducto === "Integración E-Commerce")
    mostrarServiciosSA(filtrado)
}
filtrarSA(catalogoServicios)

