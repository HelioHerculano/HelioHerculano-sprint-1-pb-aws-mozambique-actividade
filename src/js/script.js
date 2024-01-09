verifyPIN();

function verifyPIN(rightPin = 1500) {
  const minDiff = 100;
  const maxDiff = 100;
  do {
    var pin = prompt("Informe o teu o PIN:");

    if (pin.length >= 4) {
      if (!isNaN(pin)) {
        if (pin == rightPin) {
          alert("Parabéns");
        } else if (pin < rightPin && rightPin - pin <= minDiff) {
          alert("O PIN que introduziu é menor,tente um PIN maior!");
        } else if (pin < rightPin && rightPin - pin > minDiff) {
          alert("O PIN que introduziu é muito menor, tente um PIN muito maior");
        } else if (pin > rightPin && pin - rightPin > maxDiff) {
          alert(
            "O PIN que introduziu é muito maior, tente um PIN muito menor!"
          );
        } else if (pin > rightPin && pin - rightPin <= maxDiff) {
          alert("O PIN que introduziu é maior, tente um PIN menor!");
        }
      } else {
        alert(`O teu PIN deve ser um número, porfavor volte a tentar`);
      }
    } else {
      alert(
        `O teu PIN deve ter no minimo 4 digito, mas o PIN que você forneceu só tem ${pin.length} digitos, porfavor volte a tentar`
      );
    }
  } while (pin != rightPin);
}
