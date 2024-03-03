let display = document.querySelector('.display');

function appendValue(value) {
  display.value =  display.value + value;
}

function clearDisplay() {
  display.value = '';
}
function pasent(){
    display.value = display.value*0.01;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
