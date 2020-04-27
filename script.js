let sumArea = (result) => {
    return `
    <div>${result}</div>`
}


document.querySelector("#calculator-section").addEventListener("click", function(){
    let firstNumber = document.querySelector("#first-input").value

    let secondNumber = document.querySelector("#second-input").value


    let sumTotal = parseInt(firstNumber) + parseInt(secondNumber)

    if (event.target.id === "equals-btn") {
        document.querySelector("#sum-area").innerHTML = sumArea(sumTotal)
    }

})

