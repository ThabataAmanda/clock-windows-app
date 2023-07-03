"use strict";

var buttonPomodoro = document.querySelector('[data-js="button-pomodoro"]');
var buttonShortBreak = document.querySelector('[data-js="button-short-break"]');
var buttonLongBreak = document.querySelector('[data-js="button-long-break"]');
var containerPomodoro = document.querySelector('[data-js="container-pomodoro"]');
var containerShortBreak = document.querySelector('[data-js="container-short-break"]');
var containerLongBreak = document.querySelector('[data-js="container-long-break"]');

var showPomodoro = function showPomodoro() {
  containerPomodoro.style.display = 'flex';
  containerShortBreak.style.display = 'none';
  containerLongBreak.style.display = 'none';
  buttonPomodoro.classList.add('top-buttons__pomodoro_selected');
  buttonShortBreak.classList.remove('top-buttons__pomodoro_selected');
  buttonLongBreak.classList.remove('top-buttons__pomodoro_selected');
};

var showShortBreak = function showShortBreak() {
  containerPomodoro.style.display = 'none';
  containerShortBreak.style.display = 'flex';
  containerLongBreak.style.display = 'none';
  buttonPomodoro.classList.remove('top-buttons__pomodoro_selected');
  buttonShortBreak.classList.add('top-buttons__pomodoro_selected');
  buttonLongBreak.classList.remove('top-buttons__pomodoro_selected');
};

var showLongBreak = function showLongBreak() {
  containerPomodoro.style.display = 'none';
  containerShortBreak.style.display = 'none';
  containerLongBreak.style.display = 'flex';
  buttonPomodoro.classList.remove('top-buttons__pomodoro_selected');
  buttonShortBreak.classList.remove('top-buttons__pomodoro_selected');
  buttonLongBreak.classList.add('top-buttons__pomodoro_selected');
};

buttonPomodoro.addEventListener('click', showPomodoro);
buttonShortBreak.addEventListener('click', showShortBreak);
buttonLongBreak.addEventListener('click', showLongBreak); // ===== -----------Pomodoro 25----------- =====

var buttonStartPomodoro = document.querySelector('[data-js="start-button-pomodoro"]');
var buttonPausePomodoro = document.querySelector('[data-js="pause"]');
var buttonResetPomodoro = document.querySelector('[data-js="reset"]');
var timerPomodoro = document.querySelector('[data-js="count-pomodoro"]');

var startTimer = function startTimer(duration, timerPomodoro) {
  var timer = duration,
      minutes,
      seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerPomodoro.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};

buttonStartPomodoro.addEventListener("click", function () {
  var duration = 60 * 25;
  var timerPomodoro = document.querySelector('[data-js="count-pomodoro"]');
  startTimer(duration, timerPomodoro);
  buttonPausePomodoro.style.display = 'block';
  buttonResetPomodoro.style.display = 'flex';
  buttonStartPomodoro.style.display = 'none';
}); // ===== ---------------------- =====
// ===== -----------Pomodoro 25----------- =====

var buttonStartShortBreak = document.querySelector('[data-js="start-button-short-break"]');
var buttonPauseShortBreak = document.querySelector('[data-js="pause-short-break"]');
var buttonReturnPomodoro = document.querySelector('[data-js="return-to-pomodoro"]'); // const timerShortBreak = document.querySelector('[data-js="count-pause-short-break"]')

var startShortBreak = function startShortBreak(duration, timerShortBreak) {
  var timerBreak = duration,
      minutes,
      seconds;
  setInterval(function () {
    minutes = parseInt(timerBreak / 60, 10);
    seconds = parseInt(timerBreak % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerBreakPomodoro.textContent = minutes + ":" + seconds;

    if (--timerBreak < 0) {
      timerBreak = duration;
    }
  }, 1000);
};

buttonStartShortBreak.addEventListener("click", function () {
  var duration = 60 * 5;
  var timerShortBreak = document.querySelector('[data-js="count-pause-short-break"]');
  startTimer(duration, timerShortBreak);
  buttonPauseShortBreak.style.display = 'block';
  buttonReturnPomodoro.style.display = 'flex';
  buttonStartShortBreak.style.display = 'none';
}); // ===== ---------------------- =====