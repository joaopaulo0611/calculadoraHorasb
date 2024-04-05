let hi =  document.getElementById("h-inicial")
let mi=   document.getElementById("m-inicial")
let hf =  document.getElementById("h-final")
let mf =   document.getElementById("m-final")
let resultado = document.getElementById("r")

function soma(){
    let somaHora = Number (hi.value ) + Number(hf.value)
    let somaMin = Number(mf.value) + Number(mi.value)
    resultado.innerHTML = somaHora + ":" + somaMin
    while(somaMin > 59){
        somaMin -=60
        somaHora++
    }
    if(somaHora <10 ){
        somaHora ="0" + somaHora 
    }
    if(somaMin <10 ){
        somaMin ="0" + somaHora 
    }
   

}
function diferenca(){
    let subHora = Number (hi.value ) - Number(hf.value)
    let subMin = Number(mf.value) - Number(mi.value)
    resultado.innerHTML = subHora + ":" + subMin
    while(subMin > 59){
        subMin -=60
        subHora--
    }
    while(subMin< 0){
        subMin *= -1
    }
    while(subHora< 0){
        subHora *= -1
    }
    if(subHora <10 ){
        subHora ="0" + subHora 
    }
    if(subMin <10 ){
        subMin ="0" + subHora 
    }
    
}