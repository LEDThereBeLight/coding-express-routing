function leftArrowPressed() {
  document.querySelector('#prev').click()
}

function rightArrowPressed() {
  document.querySelector('#next').click()
}


document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      leftArrowPressed()
      break
    case 39:
      rightArrowPressed()
      break
  }
}
