convert()
function convert() {
    const name = prompt('Как вас зовут?')
    const secondName = prompt('Какая у вас фамилия?')
    const middleName = prompt('Какое у вас отчество?')
    const age = prompt('Сколько вам лет?')
    let sex = confirm('Ваш пол - мужской?')
    const ageInDay = age * 365
    const ageInFive = Number(age) + 5
    let err = []

    if (sex === true) {
        sex = 'Мужской'
    } else {
        sex = 'Женский'
    }

    if (sex === 'Мужской') {
        if (age < 60) {
            pension = 'Нет'
        } else {
            pension = 'Да'
        }
    } else {
        if (age < 55) {
            pension = 'Нет'
        } else {
            pension = 'Да'
        }
    }
    if ((isNaN(Number(age)) == true) || (age === '') || (age > 100)) {
        err += ['Неверный возраст\n']
    }

    if (name == '') {
        err += ['Неверное имя\n']
    }

    if (secondName == '') {
        err += ['Неверная фамилия\n']
    }

    if (middleName == '') {
        err += ['Неверное отчество\n']
    }
    console.log(err)
    if (err.length === 0) {
        alert(`Ваше ФИО: ${secondName} ${name} ${middleName}\nВаш возраст в годах: ${age}\nВаш возраст в днях: ${ageInDay}\nЧерез 5 лет вам будет: ${ageInFive}\nВаш пол: ${sex}\nВы на пенсии: ${pension}`)

    } else {
        alert(err)
        reload = confirm('Попробуете еще раз?')
        if (reload === true) {
            convert()
        }
    }
}