const name = prompt('Как вас зовут?')
const secondName = prompt('Какая у вас фамилия?')
const middleName = prompt('Какое у вас отчество?')
const age = prompt('Сколько вам лет?')
let sex = confirm('Ваш пол - мужской?')


if (sex === true)
    sex = 'Мужской'
else
    sex = 'Женский'

const ageInDay = age * 365
const ageInFive = Number(age) + 5

if (age < 63)
    pension = "Нет"
else
    pension = "Да"

alert(`Ваше ФИО: ${name} ${secondName} ${middleName}\nВаш возраст в годах: ${age}\nВаш возраст в днях:
     ${ageInDay}\nЧерез 5 лет вам будет: ${ageInFive}\nВаш пол: ${sex}\nВы на пенсии: ${pension}`)
