function clockUpdate() {
  const clockElement = document.querySelector('.clock');
  const hourElement = clockElement.querySelector('.hour');
  const minuteElement = clockElement.querySelector('.minute');
  const secondElement = clockElement.querySelector('.second');

  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');

  hourElement.textContent = hour
  minuteElement.textContent = minute
  secondElement.textContent = second
}

setInterval(clockUpdate, 1000)
