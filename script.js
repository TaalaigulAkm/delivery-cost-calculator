const button = document.getElementById("calculate")
button.addEventListener("click", function(){
    const price = 
    Number(document.getElementById("price").value) 
    const volume = 
    Number(document.getElementById("volume").value) 
    const delivery = 
    Number(document.getElementById("delivery").value) 
    const extra = 
    Number(document.getElementById("extra").value)
    
    if(!price || !volume){
        alert("Введите цену материала и объем")
        return
    }

    const total = (price * volume) + delivery + extra

    const result = document.getElementById("result")

    result.textContent = total.toLocaleString() + " ₽"
    result.style.color = "#667eea"
    result.style.fontWeight = "700"
})

const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", function(){

    document.getElementById("price").value = ""
    document.getElementById("volume").value = ""
    document.getElementById("delivery").value = ""
    document.getElementById("extra").value = ""

    document.getElementById("result").textContent = "0"
})

const material = document.getElementById("material")

material.addEventListener("change", function(){

    const priceField = document.getElementById("price")
    priceField.value = material.value
})
