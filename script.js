function validar() {
    var pes = document.querySelector('#pes').value  
    var alt = document.querySelector('#alt').value
    var res = document.querySelector('#res')   
    imc = pes / (alt * alt)
    if(pes == ''){
        alert('Digite o peso!')
        pes.focus()
        return false
    }
    if(alt == ''){
        alert('Digite a altura!')
        alt.focus()
        return false
    }
      
    res.innerHTML = '<h2>Resultado: </h2>'
    res.innerHTML += `<h2>O seu Indice de Massa Corporal é <strong>${imc.toFixed(2)}.</strong></h2>` 
    if (imc < 18.5 ){
        res.innerHTML += '<h2>Você está abaixo do peso.🤨🤨🤨</h2>' 
    } else if (imc <= 24.9){
        res.innerHTML += '<h2>Você está com no peso ideal, parabéns 👏👏👏!!!</h2>'
    } else if (imc <= 29.9){
        res.innerHTML += '<h2>Você está com sobrepeso.🤨🤨🤨</h2>'
    } else if (imc <=  39.9){
        res.innerHTML += '<h2>Você está com Obesidade.😔😔😔</h2>'
    } else if (imc > 40.00){
        res.innerHTML += '<h2>Você está com Obesidade grave, se cuida😔😔😔!!!</h2>'
    }

}
function limpar(){
    res.innerHTML = null
}

