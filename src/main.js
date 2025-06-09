let points = 0

let RushHourLevel = 0

let pointCounter = document.getElementById('pointCounter')

function changePoint(amount) {
    points = points + amount

    console.log(points)
    pointCounter.innerText = points.toFixed + ' Pizza Piont'
}

function buyRushHour() {
    if (points >= 100) {
        changePoint(-100)
        RushHourLevel = RushHourLevel + 1
    } else {
        alert("your money sucks")
    }
}

function buyfamousPeople() {
    if (points >= 1000) {
        changePoint(-100)
        RushHourLevel = RushHourLevel + 1
    } else {
        alert("your money sucks") 
    }


function bigClick() {
    let basePoint = 1 + (buyRushHourn ** 1.05) + (buyfamouspeople ** 100.05)

    changePoint(basePoint)
}