function onLoadConfigPress(x){
        var res = x.split("");
        for (var i = 0; i < res.length; i++){
//so begins my obscene number of if statements.
//this was the best way I could figure out to meet the criteria of "colored shape per character"
  if (res[0] == "`" || res[0] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "!" || res[0] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "@" || res[0] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "#" || res[0] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "$" || res[0] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "%" || res[0] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "^" || res[0] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "&" || res[0] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "*" || res[0] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "(" || res[0] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == ")" || res[0] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "-" || res[0] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "+" || res[0] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "q" || res[0] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "w" || res[0] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "e" || res[0] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "r" || res[0] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "t" || res[0] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "y" || res[0] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "u" || res[0] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "i" || res[0] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "o" || res[0] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "p" || res[0] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "[" || res[0] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "}" || res[0] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "|" || res[0] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "a" || res[0] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "s" || res[0] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "d" || res[0] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "f" || res[0] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "g" || res[0] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "h" || res[0] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "j" || res[0] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "k" || res[0] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "l" || res[0] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == ";" || res[0] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "'" || res[0] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "z" || res[0] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "x" || res[0] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "c" || res[0] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "v" || res[0] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "b" || res[0] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "n" || res[0] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "m" || res[0] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "," || res[0] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "." || res[0] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == "?" || res[0] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[0] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(0, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }




















  if (res[1] == "`" || res[1] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "!" || res[1] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "@" || res[1] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "#" || res[1] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "$" || res[1] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "%" || res[1] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "^" || res[1] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "&" || res[1] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "*" || res[1] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "(" || res[1] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == ")" || res[1] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "-" || res[1] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "+" || res[1] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "q" || res[1] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "w" || res[1] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "e" || res[1] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "r" || res[1] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "t" || res[1] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "y" || res[1] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "u" || res[1] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "i" || res[1] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "o" || res[1] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "p" || res[1] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "[" || res[1] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "}" || res[1] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "|" || res[1] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "a" || res[1] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "s" || res[1] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "d" || res[1] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "f" || res[1] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "g" || res[1] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "h" || res[1] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "j" || res[1] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "k" || res[1] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "l" || res[1] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == ";" || res[1] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "'" || res[1] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "z" || res[1] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "x" || res[1] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "c" || res[1] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "v" || res[1] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "b" || res[1] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "n" || res[1] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "m" || res[1] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "," || res[1] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "." || res[1] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == "?" || res[1] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[1] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(35, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }



















if (res[2] == "`" || res[2] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "!" || res[2] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "@" || res[2] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "#" || res[2] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "$" || res[2] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "%" || res[2] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "^" || res[2] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "&" || res[2] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "*" || res[2] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "(" || res[2] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == ")" || res[2] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "-" || res[2] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "+" || res[2] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "q" || res[2] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "w" || res[2] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "e" || res[2] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "r" || res[2] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "t" || res[2] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "y" || res[2] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "u" || res[2] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "i" || res[2] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "o" || res[2] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "p" || res[2] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "[" || res[2] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "}" || res[2] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "|" || res[2] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "a" || res[2] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "s" || res[2] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "d" || res[2] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "f" || res[2] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "g" || res[2] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "h" || res[2] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "j" || res[2] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "k" || res[2] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "l" || res[2] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == ";" || res[2] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "'" || res[2] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "z" || res[2] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "x" || res[2] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "c" || res[2] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "v" || res[2] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "b" || res[2] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "n" || res[2] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "m" || res[2] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "," || res[2] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "." || res[2] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == "?" || res[2] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[2] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(70, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }





















if (res[3] == "`" || res[3] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "!" || res[3] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "@" || res[3] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "#" || res[3] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "$" || res[3] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "%" || res[3] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "^" || res[3] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "&" || res[3] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "*" || res[3] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "(" || res[3] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == ")" || res[3] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "-" || res[3] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "+" || res[3] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "q" || res[3] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "w" || res[3] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "e" || res[3] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "r" || res[3] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "t" || res[3] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "y" || res[3] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "u" || res[3] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "i" || res[3] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "o" || res[3] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "p" || res[3] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "[" || res[3] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "}" || res[3] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "|" || res[3] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "a" || res[3] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "s" || res[3] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "d" || res[3] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "f" || res[3] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "g" || res[3] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "h" || res[3] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "j" || res[3] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "k" || res[3] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "l" || res[3] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == ";" || res[3] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "'" || res[3] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "z" || res[3] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "x" || res[3] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "c" || res[3] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "v" || res[3] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "b" || res[3] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "n" || res[3] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "m" || res[3] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "," || res[3] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "." || res[3] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == "?" || res[3] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[3] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(105, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }
















if (res[4] == "`" || res[4] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "!" || res[4] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "@" || res[4] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "#" || res[4] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "$" || res[4] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "%" || res[4] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "^" || res[4] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "&" || res[4] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "*" || res[4] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "(" || res[4] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == ")" || res[4] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "-" || res[4] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "+" || res[4] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "q" || res[4] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "w" || res[4] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "e" || res[4] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "r" || res[4] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "t" || res[4] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "y" || res[4] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "u" || res[4] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "i" || res[4] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "o" || res[4] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "p" || res[4] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "[" || res[4] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "}" || res[4] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "|" || res[4] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "a" || res[4] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "s" || res[4] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "d" || res[4] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "f" || res[4] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "g" || res[4] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "h" || res[4] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "j" || res[4] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "k" || res[4] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "l" || res[4] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == ";" || res[4] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "'" || res[4] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "z" || res[4] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "x" || res[4] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "c" || res[4] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "v" || res[4] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "b" || res[4] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "n" || res[4] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "m" || res[4] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "," || res[4] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "." || res[4] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == "?" || res[4] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[4] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(140, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }






















if (res[5] == "`" || res[5] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "!" || res[5] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "@" || res[5] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "#" || res[5] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "$" || res[5] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "%" || res[5] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "^" || res[5] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "&" || res[5] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "*" || res[5] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "(" || res[5] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == ")" || res[5] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "-" || res[5] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "+" || res[5] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "q" || res[5] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "w" || res[5] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "e" || res[5] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "r" || res[5] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "t" || res[5] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "y" || res[5] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "u" || res[5] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "i" || res[5] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "o" || res[5] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "p" || res[5] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "[" || res[5] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "}" || res[5] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "|" || res[5] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "a" || res[5] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "s" || res[5] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "d" || res[5] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "f" || res[5] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "g" || res[5] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "h" || res[5] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "j" || res[5] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "k" || res[5] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "l" || res[5] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == ";" || res[5] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "'" || res[5] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "z" || res[5] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "x" || res[5] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "c" || res[5] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "v" || res[5] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "b" || res[5] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "n" || res[5] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "m" || res[5] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "," || res[5] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "." || res[5] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == "?" || res[5] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[5] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(175, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }

























if (res[6] == "`" || res[6] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "!" || res[6] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "@" || res[6] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "#" || res[6] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "$" || res[6] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "%" || res[6] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "^" || res[6] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "&" || res[6] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "*" || res[6] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "(" || res[6] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == ")" || res[6] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "-" || res[6] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "+" || res[6] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "q" || res[6] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "w" || res[6] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "e" || res[6] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "r" || res[6] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "t" || res[6] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "y" || res[6] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "u" || res[6] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "i" || res[6] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "o" || res[6] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "p" || res[6] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "[" || res[6] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "}" || res[6] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "|" || res[6] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "a" || res[6] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "s" || res[6] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "d" || res[6] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "f" || res[6] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "g" || res[6] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "h" || res[6] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "j" || res[6] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "k" || res[6] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "l" || res[6] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == ";" || res[6] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "'" || res[6] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "z" || res[6] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "x" || res[6] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "c" || res[6] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "v" || res[6] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "b" || res[6] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "n" || res[6] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "m" || res[6] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "," || res[6] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "." || res[6] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == "?" || res[6] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[6] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(210, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }

















if (res[7] == "`" || res[7] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "!" || res[7] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "@" || res[7] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "#" || res[7] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "$" || res[7] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "%" || res[7] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "^" || res[7] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "&" || res[7] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "*" || res[7] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "(" || res[7] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == ")" || res[7] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "-" || res[7] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "+" || res[7] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "q" || res[7] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "w" || res[7] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "e" || res[7] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "r" || res[7] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "t" || res[7] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "y" || res[7] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "u" || res[7] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "i" || res[7] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "o" || res[7] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "p" || res[7] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "[" || res[7] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "}" || res[7] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "|" || res[7] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "a" || res[7] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "s" || res[7] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "d" || res[7] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "f" || res[7] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "g" || res[7] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "h" || res[7] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "j" || res[7] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "k" || res[7] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "l" || res[7] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == ";" || res[7] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "'" || res[7] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "z" || res[7] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "x" || res[7] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "c" || res[7] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "v" || res[7] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "b" || res[7] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "n" || res[7] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "m" || res[7] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "," || res[7] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "." || res[7] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == "?" || res[7] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[7] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(245, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }














if (res[8] == "`" || res[8] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "!" || res[8] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "@" || res[8] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "#" || res[8] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "$" || res[8] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "%" || res[8] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "^" || res[8] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "&" || res[8] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "*" || res[8] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "(" || res[8] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == ")" || res[8] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "-" || res[8] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "+" || res[8] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "q" || res[8] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "w" || res[8] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "e" || res[8] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "r" || res[8] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "t" || res[8] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "y" || res[8] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "u" || res[8] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "i" || res[8] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "o" || res[8] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "p" || res[8] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "[" || res[8] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "}" || res[8] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "|" || res[8] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "a" || res[8] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "s" || res[8] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "d" || res[8] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "f" || res[8] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "g" || res[8] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "h" || res[8] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "j" || res[8] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "k" || res[8] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "l" || res[8] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == ";" || res[8] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "'" || res[8] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "z" || res[8] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "x" || res[8] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "c" || res[8] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "v" || res[8] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "b" || res[8] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "n" || res[8] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "m" || res[8] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "," || res[8] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "." || res[8] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == "?" || res[8] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[8] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(280, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }





























if (res[9] == "`" || res[9] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "!" || res[9] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "@" || res[9] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "#" || res[9] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "$" || res[9] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "%" || res[9] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "^" || res[9] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "&" || res[9] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "*" || res[9] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "(" || res[9] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == ")" || res[9] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "-" || res[9] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "+" || res[9] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "q" || res[9] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "w" || res[9] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "e" || res[9] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "r" || res[9] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "t" || res[9] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "y" || res[9] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "u" || res[9] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "i" || res[9] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "o" || res[9] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "p" || res[9] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "[" || res[9] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "}" || res[9] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "|" || res[9] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "a" || res[9] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "s" || res[9] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "d" || res[9] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "f" || res[9] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "g" || res[9] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "h" || res[9] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "j" || res[9] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "k" || res[9] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "l" || res[9] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == ";" || res[9] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "'" || res[9] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "z" || res[9] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "x" || res[9] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "c" || res[9] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "v" || res[9] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "b" || res[9] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "n" || res[9] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "m" || res[9] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "," || res[9] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "." || res[9] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == "?" || res[9] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[9] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(315, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }
















if (res[10] == "`" || res[10] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "!" || res[10] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "@" || res[10] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "#" || res[10] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "$" || res[10] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "%" || res[10] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "^" || res[10] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "&" || res[10] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "*" || res[10] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "(" || res[10] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == ")" || res[10] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "-" || res[10] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "+" || res[10] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "q" || res[10] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "w" || res[10] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "e" || res[10] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "r" || res[10] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "t" || res[10] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "y" || res[10] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "u" || res[10] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "i" || res[10] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "o" || res[10] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "p" || res[10] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "[" || res[10] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "}" || res[10] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "|" || res[10] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "a" || res[10] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "s" || res[10] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "d" || res[10] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "f" || res[10] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "g" || res[10] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "h" || res[10] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "j" || res[10] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "k" || res[10] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "l" || res[10] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == ";" || res[10] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "'" || res[10] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "z" || res[10] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "x" || res[10] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "c" || res[10] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "v" || res[10] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "b" || res[10] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "n" || res[10] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "m" || res[10] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "," || res[10] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "." || res[10] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == "?" || res[10] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[10] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(350, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }














if (res[11] == "`" || res[11] == "~")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'aqua';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "!" || res[11] == "1")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'aquamarine';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "@" || res[11] == "2")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'beige';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "#" || res[11] == "3")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'bisque';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "$" || res[11] == "4")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'black';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "%" || res[11] == "5")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "^" || res[11] == "6")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'blueviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "&" || res[11] == "7")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'brown';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "*" || res[11] == "8")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'burlywood';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "(" || res[11] == "9")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'cadetblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == ")" || res[11] == "0")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'Chartreuse';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "-" || res[11] == "_")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'chocolate';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "+" || res[11] == "=")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'coral';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "q" || res[11] == "Q")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkorange';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "w" || res[11] == "W")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkorchid';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "e" || res[11] == "E")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkred';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "r" || res[11] == "R")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darksalmon';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "t" || res[11] == "T")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkseagreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "y" || res[11] == "Y")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkslateblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "u" || res[11] == "U")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkslategray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "i" || res[11] == "I")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkturquoise';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "o" || res[11] == "O")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkviolet';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "p" || res[11] == "P")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'deeppink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "[" || res[11] == "{")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'deepskyblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "}" || res[11] == "]")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'dimgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "|" || res[11] == "\\")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'dodgerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "a" || res[11] == "A")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'cornflowerblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "s" || res[11] == "S")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'cornsilk';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "d" || res[11] == "D")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'crimson';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "f" || res[11] == "F")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'cyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "g" || res[11] == "G")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkblue';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "h" || res[11] == "H")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkcyan';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "j" || res[11] == "J")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkgray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "k" || res[11] == "K")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "l" || res[11] == "L")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkkhaki';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == ";" || res[11] == ":")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'darkmagenta';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "'" || res[11] == '\"')
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'firebrick';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "z" || res[11] == "Z")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'floralwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "x" || res[11] == "X")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'forestgreen';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "c" || res[11] == "C")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'fuchsia';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "v" || res[11] == "V")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'gainsboro';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "b" || res[11] == "B")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'ghostwhite';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "n" || res[11] == "N")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'gold';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "m" || res[11] == "M")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'goldenrod';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "," || res[11] == "<")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "." || res[11] == ">")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == "?" || res[11] == "/")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'greenyellow';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == " ")
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'hotpink';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
  }
  if (res[11] == null)
      {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(385, 0, 30, 30);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();
  }




  }
  }