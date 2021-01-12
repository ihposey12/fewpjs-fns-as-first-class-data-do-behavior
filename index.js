/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let time1 = time.split(':')
  let time2 = parseInt(time1, 10)

  if (time2 < 12) {
    return displayMessage('Good Morning')
  }
  else if(time2 >= 12 && time2 <= 17) {
    return displayMessage('Good Afternoon')
  }
  else {
    return displayMessage('Good Evening')
  }
}

function displayMessage(message) {
  const element = document.getElementById('greeting')
  element.innerText = message
  return message
}