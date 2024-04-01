function calculateTotal() {
  var x = parseFloat(document.getElementById('cost').value);
  var y = parseFloat(document.getElementById('liters').value);

  var totalCost = (x * y).toFixed(2);
  document.getElementById('result').innerHTML = 'Total cost of petrol: $' + totalCost;
}