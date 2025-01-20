
prompt("enter massage");
const fonts = [
  "<h1>this is header number1</h1>",
  "<h2>this is header number2</h2>",
  "<h3>this is header number3</h3>",
  "<h4>this is header number4</h4>",
  "<h5>this is header number5</h5>",
  "<h6>this is header number6</h6>",
];
let text = "";
for (let i = 0; i <6 ; i++) {
  text += fonts[i] + "<br>";
}

document.getElementById("header").innerHTML = text;
