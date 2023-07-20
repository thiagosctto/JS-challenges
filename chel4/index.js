
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$' + value
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)

    if (split == 1) {
        document.getElementById('splitValue').innerHTML = split + ' person'
    }else {
        document.getElementById('splitValue').innerHTML = split + ' people'
    }
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)


}

