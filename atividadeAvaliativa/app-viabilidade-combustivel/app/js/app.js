const inputAlcool = document.querySelector("input[name = valorDoAlcool]")
const inputGasolina = document.querySelector("input[name = valorDaGasolina]")
const btnCalcular = form.querySelector("button[name=btnCalcular]")
const divResultado = document.querySelector('.resultado')
function calcular(){
    const valorAlcool = inputAlcool
    const valorGasolina = inputGasolina
    const resultado
    if ((valorAlcool) <= ((valorGasolina*70)/100)) {
        let porcentagem 
        porcentagem = ((valorAlcool-valorGasolina)/(valorAlcool/100))
         resultado =`
            <p>
                O valor do  Alcool é ${porcentagem}% do valor da Gasolina,<br>
                ou seja, o combustível mais vantajoso é:
            </p>
            <p>
                <strong>Álcool</Strong>
            </p>
        `    
    } else {
         resultado =`
            <p>
                O valor do  Alcool é ${porcentagem}% do valor da Gasolina,<br>
                ou seja, o combustível mais vantajoso é:
            </p>
            <p>
                <strong>Gasolina</Strong>
            </p>
        `
        
    }
    divResultado.innerHTML = resultado.value    
    
}

btnCalcular.addEventListener('click',calcular)