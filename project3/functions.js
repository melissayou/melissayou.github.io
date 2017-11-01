function f1(x) {
  return (5*x-3*x*x+13);
}

function f2(a,b,c) {
  let result = "Hello, " + a + " " + b + " " + c + "!";
  return result;
}

function f3(x,y) {
  let fruit, color;
  if (x > y) {
    fruit = "bananas";
    color = "yellow";
  }
  else if (y > x) {
    fruit = "porcupine";
    color = "brown";
  }
  else if (x === y && x < 0 ) {
    fruit = "red apples";
    color = "red";
  } else {
    fruit = "green apples";
    color = "green";
  }

  content.innerHTML = fruit;
  content.style.color = color;
}

function f4(x) {
  var count = 0;
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  for (let i = 0; i < x.length; i++) {
    var char = x.charAt(i);
    if (numbers.indexOf(char) >= 0) {
      if (count === 0) {
        var firstChar = char;
      }
      count++;
    }
  }

  if (((firstChar === '1') && count === 11) || count === 10) {
    var output = 'valid';
    var color = 'green';
  }else {
    var output = 'invalid';
    var color = 'red';
  }
  content.innerHTML = output;
  content.style.color = color;
}

function f5(x) {
  let list = x.split(",");
  return list[2];
}

function f6() {
  var buttons = document.getElementsByTagName("button");
  let length = buttons.length;
  for (let i = 0; i < length; i++) {
    buttons[i].onclick = function(e) {
      //reset all buttons
      document.getElementById("1").style.backgroundColor = 'White';
      document.getElementById("2").style.backgroundColor = 'White';
      document.getElementById("3").style.backgroundColor = 'White';
      document.getElementById("4").style.backgroundColor = 'White';
      document.getElementById("5").style.backgroundColor = 'White';
      let x = parseInt(this.id);
      if (x <= 4) {
        let next = (x + 1).toString();
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
  }
}
