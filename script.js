let bmiForm = document.querySelector("#bmi")
let bb = document.getElementById("berat-badan")
let tb = document.getElementById("tinggi-badan")

function kalkulasi(){
    bmi = bb.value/(tb.value/100)**2
    bmi = bmi.toFixed(2)
    return bmi
}
function kategori(){
  let pesan2 = document.getElementById("pesan4")
    if (bmi < 18.5){
       return pesan2.innerHTML= "<b>Underweight</b>"
    } else if (bmi > 18.5 && bmi< 24.9){
        return pesan2.innerHTML ="<b>Normal Weight</b>"
    } else if (bmi > 25 && bmi < 29.9){
        return pesan2.innerHTML ="<b>Overweight</b>"
    } else {
        return pesan2.innerHTML= "<b>Obesity</b>"
    }
}


bmiForm.addEventListener('submit',(event) =>{
    event.preventDefault()
    kalkulasi()
    kategori()
    
    console.log(kalkulasi())
    console.log(kategori())
    document.getElementById("pesan1").innerHTML = "Nilai BMI anda "
    document.getElementById("pesan2").innerText = " "+ bmi 
    document.getElementById("pesan3").innerHTML = " maka anda termasuk"
    bmiForm.reset()
    
})
