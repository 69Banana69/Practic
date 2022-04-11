let audience = {
    number: 57,
    furniture: ['table', 'chair', 'closet'],
    board: {
        material: 'Wood',
        size: '100x200',
    },
    computer: true,
    projector: false,
    flower: 0,
    floor: 'Wood',
    wall: 'concrete',
}

function addFurniture() {
    audience.furniture.push(document.getElementById('furniture').value)
    document.getElementById('func1').innerHTML = audience.furniture
}

function changeAudience() {
    audience.number = document.getElementById('number').value
    alert(`Audience number is ${audience.number}`)
}

function addComputer() {
    audience.computer = document.getElementById('check').checked ? 'avaible' : 'Not avaible'
    document.getElementById("computer").innerHTML = audience.computer
}

function showFlower() {
    document.getElementById('flower').innerHTML = audience.flower
}

function addFlower() {
    document.getElementById('flower').innerHTML = ++audience.flower
}   

function removeFlower() {
    document.getElementById('flower').innerHTML = --audience.flower

}