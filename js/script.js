
var display_c = document.getElementById("nama_c");
var display_f = document.getElementById("nama_f");
var celcius_d = document.getElementById("celcius");
var farenheit_d = document.getElementById("farenheit");
var current_stage = "Celcius (°C)"
function konversi(){
    var celcius = parseFloat(document.getElementById("celcius").value);
    var formula = document.getElementById("rumus").innerText;
    /*Kalkulasi Celcius*/
    var farenheit_k = (celcius * 9/5) + 32
    formula_ganti1 = formula.replace("S(°C)", celcius)
    /*Kalkulasi Farenheit*/
    var farenheit_c = (celcius - 32) * 5/9
    var formula_d = "S(°C) = (a - 32) x 5/9"
    formula_ganti2 = formula_d.replace("a", celcius)
    /*Eksekusi*/
    if (display_c.textContent === "Celcius (°C)"){
        var hasil_1 = document.getElementById("farenheit").value = farenheit_k + "°F"
        document.getElementById("kalkulasi").textContent = formula_ganti1 + " = " + hasil_1
    }if(display_c.textContent === "Farenheit (°F)"){
        var hasil_2 = document.getElementById("farenheit").value = farenheit_c + "°C"
        document.getElementById("kalkulasi").textContent = formula_ganti2 + " = " + hasil_2
    }
    console.log(celcius)
}

function reset(){
    document.getElementById("celcius").value = ""
    document.getElementById("farenheit").value = ""
    document.getElementById("kalkulasi").innerText = ""
}

function revert(){
    if(display_c.textContent === "Farenheit (°F)"){
        display_c.textContent = "Celcius (°C)"
        display_f.textContent = "Farenheit (°F)"
        celcius_d.setAttribute("placeholder", "Masukan Suhu Celcius (°C)")
        farenheit_d.setAttribute("placeholder", "Hasil Suhu Farenheit (°F)")

    } else{
        display_c.textContent = "Farenheit (°F)"
        display_f.textContent = "Celcius (°C)"
        celcius_d.setAttribute("placeholder", "Masukan Suhu Farenheit (°F)")
        farenheit_d.setAttribute("placeholder", "Hasil Suhu Celcius (°C)")
    }
    
}


