
var operator;
var currentNumber;
var display = '';

$(function() {
  $('.number').click(function () {
    var digit = $(this).text();
    display += digit;
    $('#display').val(display);
  });
  $('.operator').click(function () {
    var newNumber = Number(display);
    if (currentNumber && operator) {
      if (operator === '+') {
        currentNumber = currentNumber + newNumber;
      } else if (operator === '-') {
        currentNumber = currentNumber - newNumber;
      } else if (operator === 'x') {
        currentNumber = currentNumber * newNumber;
      } else if (operator === '/') {
        currentNumber = currentNumber / newNumber;
      }
    } else {
      currentNumber = newNumber;
    }
    operator = $(this).text(); // new operator
    display = '';
    $('#display').val(display);
  });
  $('.evaluate').click(function () {
    var newNumber = Number(display);
    if (currentNumber && operator) {
      if (operator === '+') {
        currentNumber = currentNumber + newNumber;
      } else if (operator === '-') {
        currentNumber = currentNumber - newNumber;
      } else if (operator === 'x') {
        currentNumber = currentNumber * newNumber;
      } else if (operator === '/') {
        currentNumber = currentNumber / newNumber;
      }
    } else {
      currentNumber = newNumber;
    }
    operator = null;
    display = currentNumber;
    $('#display').val(display);
  });
  $('#clear').click(function () {
    display = '';
    operator = null;
    currentNumber = null;
    $('#display').val(display);
  });
});
