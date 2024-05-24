
const botonesSucursales = document.querySelectorAll("#botones-sucursales button")

botonesSucursales.forEach((element)=>{


    element.addEventListener("click", (e)=>{


    switch(e.target.textContent){

        case "Buenos Aires":
            document.querySelector("#bsas-map").style.display = "block"    
            document.querySelector("#corriente-map").style.display = "none"    
            document.querySelector("#santiago-map").style.display = "none"             
        

            break;
        case "Corrientes":
            document.querySelector("#corriente-map").style.display = "block"      
            document.querySelector("#santiago-map").style.display = "none" 
            document.querySelector("#bsas-map").style.display = "none"  
            break
        case "Santiago del Estero":
            document.querySelector("#santiago-map").style.display = "block"      
            document.querySelector("#bsas-map").style.display = "none"  
            document.querySelector("#corriente-map").style.display = "none" 
            break
        default:
            break

    }

})


})

const botonEnviar = document.getElementById("form-submit")
const inputsRequired = document.querySelectorAll(".requiredInput")

let campos = {
    nombre: false,
    apellido: false,
    correoElectronico: false,
    telefono: false,
    seleccionarSucursal: false,
    seleccionarServicio: false,
    consulta: false

}

let switchs = false;

inputsRequired.forEach((element)=>{

    const error = document.getElementById(`${element.name}`)
    
element.addEventListener("input",(e)=>{
    
    

if(e.target.value != ""){

    error.style.display = "none"
    campos[element.name] = true

}else{ 
    error.textContent = "Este campo no debe estar vacio"
    error.style.display = "block"
    campos[element.name] = false

}

if(element.name == "correoElectronico"){
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(e.target.value)) {
       
        error.textContent = "Debe ingresar un correo electronico valido"
        error.style.display = "block"
        campos[element.name] = false
    }else{

        error.style.display = "none"
        campos[element.name] = true
    }



}


})
    

})








botonEnviar.addEventListener("click", (e)=>{
let contador = 0;
e.preventDefault()
console.log("CAMPOS", campos)



for(campo in campos){ 
    
    if(campos[campo]){
        
        contador++

    }

}
console.log(contador)
if(contador == 7){
    // form.submit()
    alert("CAMPOS ENVIADOS")

}


inputsRequired.forEach((element)=>{
    const error1 = document.getElementById(`${element.name}`)
    if(element.value == ""){
        error1.textContent = "Este campo no debe estar vacio"
        error1.style.display = "block"
        campos[element.name] = false
    }}) 


})

