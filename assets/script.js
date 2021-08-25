let yourName = "Carlos Palacios"
document.getElementById('credit').textContent = `Created by Carlos Palacios`

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

document.getElementById('add-gb').addEventListener('click', function() {
    let addGb = + 1
    if (addGb) {
        document.getElementById("qty-gb").textContent = gb;
        document.getElementById("qty-total").textContent = gb;
        gb +=1
        total +=1
        console.log("plusgb")
    }
    
})

document.getElementById("add-cc").addEventListener("click", function () {
    let addCc = + 1
    if (addCc) {
        document.getElementById("qty-cc").textContent = cc;
        document.getElementById("qty-total").textContent = cc;
        cc +=1
        total +=1
        console.log("pluscc")
    }
})

document.getElementById("add-sugar").addEventListener("click", function () {
    let addSs = + 1
    if (addSs) {
        document.getElementById("qty-sugar").textContent = sugar;
        document.getElementById("qty-total").textContent = sugar;
        sugar +=1
        total +=1
        console.log("plussugar")
    }
})

document.getElementById("minus-gb").addEventListener("click", function() {
    let minusGb = - 1
    if (minusGb) {
        document.getElementById("qty-gb").textContent = gb;
        document.getElementById("qty-total").textContent = gb;
        gb -=1
        total -=1
        console.log("minusgb")
    }
})

document.getElementById("minus-cc").addEventListener("click", function() {
    let minusCc = - 1
    if (minusCc) {
        document.getElementById("qty-cc").textContent = cc;
        document.getElementById("qty-total").textContent = cc;
        cc -=1
        total -=1
        console.log("minusCc")
    }
})

document.getElementById("minus-sugar").addEventListener("click", function() {
    let minusSugar = - 1
    if (minusSugar) {
        document.getElementById("qty-sugar").textContent = sugar;
        document.getElementById("qty-total").textContent = sugar;
        sugar -=1
        total -=1
        console.log("minussugar")
    }

totalCookiecount()
let total = gb + cc + sugar

document.getElementById("qty-total").setAttribute(total)
})  

function totalCookiecount() {
    document.getElementById("qty-total").textContent = gb + cc + sugar
    
}




