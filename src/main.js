let points = 0

let RushHourLevel = 0

let pointCounter = document.getElementById('pointCounter')

function changePoint(amount) {
    points = points + amount

    console.log(points)
    pointCounter.innerText = points + ' Pizza Piont'
}

function buyRushHour() {
    if (points >= 100) {
        changePoint(-100)
        RushHourLevel = RushHourLevel + 1
    } else {
        alert("your money sucks")
    }
}