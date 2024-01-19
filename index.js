const display = document.getElementById('display');

function appendToDisplay(input) {
  if (input === 'C') {
    clearDisplay();
  } else if (input === '=') {
    calculate();
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    if (display.value.trim() === '') {
      display.value = '';
      return;
    }
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

const input = document.getElementById('input');
input.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  appendToDisplay(inputValue);
});

const buttons = document.getElementsByClassName('button');
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    appendToDisplay(buttonValue);
  });
}
