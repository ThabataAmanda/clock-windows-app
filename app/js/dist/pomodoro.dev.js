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
buttonLongBreak.addEventListener('click', showLongBreak);