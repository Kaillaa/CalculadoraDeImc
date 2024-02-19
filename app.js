function calculateIMC(){
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value)

    if(isNaN(weight)||isNaN(height) || weight <= 0 || height <= 0){
        document.getElementById('result').innerText = 'Por favor, insira valores valídos'
        return
    }
    const imc = weight / (height*height);
    const resultElemet = document.getElementById('result')
    const grauElement = document.getElementById('grau')

    resultElemet.innerText = `Seu IMC é: ${ imc.toFixed(2) }`

    if(imc < 16.9){
        grauElement.style.color = "red";
        grauElement.innerText += (` Muito abaixo do peso`)
        
    }
    else if(imc >=  17 && imc <= 18.4){
        grauElement.style.color = "red";
        grauElement.innerText += (`Abaixo do peso`)
    }
    else if(imc >=  18.5 && imc <= 24.9){
        grauElement.style.color = "#adff2f";
        grauElement.innerText += (` Peso ideal`)
    }
    else if(imc >=  25 && imc <= 29.9){
        grauElement.style.color = "red";
        grauElement.innerText += (` Peso ideal`)
    }
    else if(imc >=  30  && imc <= 34.9){
        grauElement.style.color = "red";
        rgrauElement.innerText += (` Obesidade Grau 1`)
    }
    else if(imc >=  35  && imc <= 40){
        grauElement.style.color = "red";
        grauElement.innerText += (` Obesidade Grau 2`)
    }
    else if(imc > 40){
        grauElement.style.color = "red";
        grauElement.innerText += (` Obesidade Grau 3`)
    }
}