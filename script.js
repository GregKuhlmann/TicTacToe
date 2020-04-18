var turn = "X"
var counter = 0

function checkWinner() {
  var box00 = document.getElementById("0_0").innerText
  var box01 = document.getElementById("0_1").innerText
  var box02 = document.getElementById("0_2").innerText
  var box10 = document.getElementById("1_0").innerText
  var box11 = document.getElementById("1_1").innerText
  var box12 = document.getElementById("1_2").innerText
  var box20 = document.getElementById("2_0").innerText
  var box21 = document.getElementById("2_1").innerText
  var box22 = document.getElementById("2_2").innerText

  if (box00 == turn && box01 == turn && box02 == turn) {
    return true
  }
  if (box10 == turn && box11 == turn && box12 == turn) {
    return true
  }
  if (box20 == turn && box21 == turn && box22 == turn) {
    return true
  }
  if (box00 == turn && box10 == turn && box20 == turn) {
    return true
  }
  if (box01 == turn && box11 == turn && box21 == turn) {
    return true
  }
  if (box02 == turn && box12 == turn && box22 == turn) {
    return true
  }
  if (box00 == turn && box11 == turn && box22 == turn) {
    return true
  }
  if (box02 == turn && box11 == turn && box20 == turn) {
    return true
  }
}

function reset() {
  document.getElementById("0_0").innerText = ""
  document.getElementById("0_1").innerText = ""
  document.getElementById("0_2").innerText = ""
  document.getElementById("1_0").innerText = ""
  document.getElementById("1_1").innerText = ""
  document.getElementById("1_2").innerText = ""
  document.getElementById("2_0").innerText = ""
  document.getElementById("2_1").innerText = ""
  document.getElementById("2_2").innerText = ""
  counter = 0
  turn = "X"
}

function updateBox(box) {
  if (box.innerText == "") {
    box.innerText = turn
    if (checkWinner()) {
      alert(turn + " won the game!")
      reset()
      return
    }
    if (turn == "X") {
      turn = "O"
    } else {
      turn = "X"
    }
    counter = counter + 1
    if (counter == 9) {
      alert("Draw!")
      reset()
    }
  }
}
