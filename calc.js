function calc() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);
  let op = document.getElementById("operator").value;
  let calculatedResult;

  if (op === "add") calculatedResult = a + b + c;
  else if (op === "sub") calculatedResult = a - b - c;
  else if (op === "mul") calculatedResult = a * b * c;
  else if (op === "div") calculatedResult = b !== 0 && c !== 0 ? a / b / c : "Error";

  document.getElementById("result").value = calculatedResult;
}