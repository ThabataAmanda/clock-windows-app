const buttonPomodoro = document.querySelector('[data-js="button-pomodoro"]')
const buttonShortBreak = document.querySelector('[data-js="button-short-break"]')
const buttonLongBreak = document.querySelector('[data-js="button-long-break"]')

const containerPomodoro = document.querySelector('[data-js="container-pomodoro"]')
const containerShortBreak = document.querySelector('[data-js="container-short-break"]')
const containerLongBreak = document.querySelector('[data-js="container-long-break"]')

const showPomodoro = () => {
    containerPomodoro.style.display = 'flex'
    containerShortBreak.style.display = 'none'
    containerLongBreak.style.display = 'none'
    buttonPomodoro.classList.add('top-buttons__pomodoro_selected')
    buttonShortBreak.classList.remove('top-buttons__pomodoro_selected')
    buttonLongBreak.classList.remove('top-buttons__pomodoro_selected')
}

const showShortBreak = () => {
    containerPomodoro.style.display = 'none'
    containerShortBreak.style.display = 'flex'
    containerLongBreak.style.display = 'none'
    buttonPomodoro.classList.remove('top-buttons__pomodoro_selected')
    buttonShortBreak.classList.add('top-buttons__pomodoro_selected')
    buttonLongBreak.classList.remove('top-buttons__pomodoro_selected')
}

const showLongBreak = () => {
    containerPomodoro.style.display = 'none'
    containerShortBreak.style.display = 'none'
    containerLongBreak.style.display = 'flex'
    buttonPomodoro.classList.remove('top-buttons__pomodoro_selected')
    buttonShortBreak.classList.remove('top-buttons__pomodoro_selected')
    buttonLongBreak.classList.add('top-buttons__pomodoro_selected')
}

buttonPomodoro.addEventListener('click', showPomodoro)
buttonShortBreak.addEventListener('click', showShortBreak)
buttonLongBreak.addEventListener('click', showLongBreak)