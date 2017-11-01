function f1(x) {
  return 5x-3x^2+13;
}

function f2(a,b,c) {
  var result = "Hello, " + a + " " + b + " " + c + "!";
  return result;
}

function f3(x,y) {
  var fruit, color;
  if (x > y) {
    fruit = "bananas",
    color = "yellow"
  }
  else if (y > x) {
    fruit = "porcupine",
    color = "brown"
  }
  else if (x === y && x < 0 ) {
    fruit = "red apples",
    color = "red"
  } else {
    fruit = "green apples",
    color = "green"
  }

content.innerHTML = fruit;
content.style.color = color;
}

function f4(x) {
  var count = 0;
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  for (int i = 0; i < x.length; i ++) {
    var char = x.charAt(i);
    if (numbers.indexof(char) >= 0) {
      if (count === 0) {
        var firstChar = char;
      }
      count ++;
    }
  }

  if (((firstChar === '1') && count === 10) || count === 11) {
    var ouuput = 'valid';
    var color = 'green';
  }else {
    var ouuput = 'invalid';
    var color = 'red';
  }
  content.innerHTML = output;
  content.style.color = color;
}

function f5(x) {
  var list = x.split(",");
  return list[2];
}

function f6() {
  var buttons = document.getElementByTagName("button");
  var length = buttons.length;
  for (int i = 0; i < length; i++) {
    var x = parseInt(this.id);
    buttons[i].onclick = handleClick(x);
  }
}

function handleClick(x) {
  //reset all buttons
  document.getElementById("1").style.backgroundColor = 'White';
  document.getElementById("2").style.backgroundColor = 'White';
  document.getElementById("3").style.backgroundColor = 'White';
  document.getElementById("4").style.backgroundColor = 'White';
  document.getElementById("5").style.backgroundColor = 'White';
  if (x <= 4) {
    var next = (x + 1).toString();
    document.getElementById(next).style.backgroundColor = "Blue";
  }
  if (x === 5) {
    document.getElementById("1").style.backgroundColor = 'red';
    document.getElementById("2").style.backgroundColor = 'red';
    document.getElementById("3").style.backgroundColor = 'red';
    document.getElementById("4").style.backgroundColor = 'red';
    document.getElementById("5").style.backgroundColor = 'red';
  }

}
