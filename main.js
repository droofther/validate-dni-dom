const input = document.getElementById('value-input-dni')
const containerMain = document.querySelector(".card-response")

input.addEventListener('input', (e) => {

    const result = validatorDNI(e.srcElement.value)
    input.value = result.format
    console.log(result, result?.response?.user?.ok)
    
    setTimeout(() =>{
        renderComponent(result?.response)
        console.log(e.srcElement.value, result?.response?.user?.ok)
    },800)
    
})

const renderComponent = (result) => {
    containerMain.innerHTML = `
    <h4> Nombres: <span>${result?.user?.Nombres ||"*****"}</span></h4 >
    <h4> Apellidos: <span>${result?.user?.Apellido1 ||"*****"} ${result?.user?.Apellido2 ||"*****"}</span></h4 >
    <h4> Cedula: <span>${result?.user?.Cedula ||"*****"}</span></h4>
    <h4> Sexo: <span>${result?.user?.IdSexo ||"*****"}</span></h4>
    <h4> Lugar Nacimiento: <span>${result?.user?.LugarNacimiento ||"*****"}</span></h4 >
    <h4> name: <span>${result?.user?.Nombres ||"*****"}</span></h4 >
    `
}

renderComponent()
