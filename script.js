function validateExpression() {
  const expressionInput = document.getElementById('expression');
  const resultParagraph = document.getElementById('result');

  try {
    const result = eval(expressionInput.value);

    if (isNaN(result) || !isFinite(result)) {
      resultParagraph.innerText = 'Invalid Expression';
    } else {
      resultParagraph.innerText = `Result: ${result}`;
    }
  } catch (error) {
    resultParagraph.innerText = 'Invalid Expression';
  }
}
