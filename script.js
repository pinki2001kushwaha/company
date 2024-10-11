function selectBundle(pairCount, price, discount) {


  document.getElementById('bundle1').classList.remove('selected');
  document.getElementById('bundle2').classList.remove('selected');
  document.getElementById('bundle3').classList.remove('selected');


  document.getElementById('options1').style.display = 'none';
  document.getElementById('options2').style.display = 'none';
  document.getElementById('options3').style.display = 'none';


  document.getElementById(`bundle${pairCount}`).classList.add('selected');

  if (pairCount === 1) {
      document.getElementById('options1').style.display = 'block';
  } 
  else if (pairCount === 2) {
    document.getElementById('options2').style.display = 'block';
}
  else if (pairCount === 3) {
      document.getElementById('options3').style.display = 'block';
  }

  // Update the total price
  const totalElement = document.getElementById('totalPrice');
  totalElement.textContent = price.toFixed(3);
}