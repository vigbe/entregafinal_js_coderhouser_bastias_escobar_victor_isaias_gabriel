////trae el carrito
const carritoLS = localStorage.getItem('carrito1')
const totalRes = document.getElementById('totalRes')
const resumenCompra = JSON.parse(carritoLS)


console.log(resumenCompra)
////declaracion
const resServicio = document.getElementById('resServicio')

/// mostrar carrito

const mostrarCarrito = () => {
    resServicio.innerHTML = ''
    
    resumenCompra.forEach((ele1) => {

        const div = document.createElement('div')
        div.classList.add('cartaCarr')

        div.innerHTML = `
                <div class="row">
                <div class="col-1">
                <img id="img3"src=${ele1.img} alt="...">
                </div>
                <div class="col-4"><h5>${ele1.descripcion} - ${ele1.productoDetalle}  - ${ele1.cantidad} cantidad</h5></div>
                <div class="col-4"><h6>Precio Individual: UF${ele1.valorEnUf} -<p>Cantidad de Productos Adquiridos: ${ele1.cantidad} </p></h6></div>
                </div>
                
                
                
                `
                resServicio.appendChild(div)
            })
            
            totalRes.innerText = `Total UF ` + resumenCompra.reduce((acc, ele1) => acc += ele1.valorEnUf * ele1.cantidad, 0) 
            
        }
        
        
        
        mostrarCarrito(resServicio)
        
        //FORMULARIO COMPLETAR DATOS PASAJEROS
        const mostrarForm = document.getElementById('ingDatos')
        
        const enviarDatos = document.getElementById('datosEncargado')
        const datoNombre = document.getElementById('datoNombre')
        const datoApellido = document.getElementById('datoApellido')
        const datoEdad = document.getElementById('datoEdad')
        const datoDni = document.getElementById('datoDni')
        const respuesta = document.getElementById("rtaDatosIng")
        const faltaDatos = document.getElementById("faltaDatos")        
//Event para mostra menu formulario
mostrarForm.addEventListener("click", ()=> {
        document.querySelector('#datosEncargado').classList.toggle("datosEncargado")
    })

//evento input//
datoNombre.addEventListener('input', () => {
    // console.log(inputNombre.value)
    let valNombre = datoNombre.value
    if (valNombre.length < 4) {
        datoNombre.classList.add('invalido')
        datoNombre.classList.remove('valido')
    } else {
        datoNombre.classList.remove('invalido')
        datoNombre.classList.add('valido')
    }


})

datoApellido.addEventListener('input', () => {
    // console.log(inputNombre.value)
    let apellido1 = datoApellido.value

    if (apellido1.length < 4) {
        datoApellido.classList.add('invalido')
        datoApellido.classList.remove('valido')
    } else {
        datoApellido.classList.remove('invalido')
        datoApellido.classList.add('valido')
    }

})

const encargado=[]


enviarDatos.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const nombre = datoNombre.value
    const apellido = datoApellido.value
    const edad = datoEdad.value
    const rut = datoDni.value


    if (nombre.length > 0 && apellido.length > 0) {
        encargado.push({
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            rut: rut,

    })
        console.log(encargado)
        respuesta.classList.remove('rtaDatosIng')
        respuesta.classList.add('rtaDatosIngExito')
        
        enviarDatos.reset()

    }
    
})
//api Mercado Pago
const finalizarPagoMP =async () => {
    const itemsToMP = resumenCompra.map((prod) => {
        return {
            title: prod.descripcion,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: prod.valorEnUf
        }
    })
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
            Authorization: "Bearer TEST-1643250176778525-112600-0d209a3b187834651143a1de0119af05-156573032"
        },
        body:   JSON.stringify ({
            items:itemsToMP,
            back_urls: {
                success: window.location.href,
                failure: window.location.href
            }
        })
    })
    const data = await response.json()
    
    window.location.replace(data.init_point)
}
