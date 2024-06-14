function konversi(){
    let angka_celcius = document.getElementById("celcius").value;
    if (angka_celcius){
        let celcius = angka_celcius;
        if(!isNaN(celcius)){
            let konversi = (parseFloat(celcius * (9/5)) + 32);
            document.getElementById("farenheit").value = konversi;
            console.log(konversi);
        }else{
            console.log("Mohon masukan angka");
            document.getElementById("farenheit").value = "Mohon masukan angka";
    } 
    }
}

function reset(){
    document.getElementById("celcius").value = "";
    document.getElementById("farenheit").value = "";
}

function revert(){
    let angka_farenheit = document.getElementById("farenheit").value;
    if (angka_farenheit){
        let farenheit = angka_farenheit;
        if(!isNaN(farenheit)){
            let revert = (parseFloat(farenheit - 32) / 9/5);
            document.getElementById("celcius").value = revert;
            console.log(revert);
        }else{
            console.log("Mohon masukan angka");
            document.getElementById("celcius").value = "Mohon masukan angka";
    } 
    }
}