for (let i = 0; i < product.length; i++) {
  document.getElementById("select1").innerHTML += `
    <option value="${product[i].id}">${product[i].title}</option>
    `;
  document.getElementById("select2").innerHTML += `
    <option value="${product[i].id}">${product[i].title}</option>
    `;
}

function item1(selectedId) {
  const notSelectedProducts = product.filter((p) => p.id !== parseInt(selectedId));
  const selectedItem1 = document.getElementById("select2");
  const item1Value = selectedItem1.value;

  selectedItem1.innerHTML = ``;
  for (let prod of notSelectedProducts) {
    if (prod.id == item1Value)
      selectedItem1.innerHTML += `<option selected value="${prod.id}">${prod.title}</option>`;
    else
      selectedItem1.innerHTML += `<option value="${prod.id}">${prod.title}</option>`;
  }
  
  const selectedProduct = product.filter((p) => p.id === parseInt(selectedId))[0];
  document.getElementById("img1").src = selectedProduct.image;
  document.getElementById("price1").innerHTML = `PKR ${selectedProduct.price}`;
  document.getElementById("desc1").innerHTML = selectedProduct.description;
  document.getElementById("brand1").innerHTML = selectedProduct.brand;
}

function item2(selectedId) {
  const notSelectedProducts = product.filter((p) => p.id !== parseInt(selectedId));
  const selectedItem1 = document.getElementById("select1");
  const item1Value = selectedItem1.value;

  selectedItem1.innerHTML = ``;
  for (let prod of notSelectedProducts) {
    if (prod.id == item1Value)
      selectedItem1.innerHTML += `<option selected value="${prod.id}">${prod.title}</option>`;
    else
      selectedItem1.innerHTML += `<option value="${prod.id}">${prod.title}</option>`;
  }
  
  const selectedProduct = product.filter((p) => p.id === parseInt(selectedId))[0];
  document.getElementById("img2").src = selectedProduct.image;
  document.getElementById("price2").innerHTML = `PKR ${selectedProduct.price}`;
  document.getElementById("desc2").innerHTML = selectedProduct.description;
  document.getElementById("brand2").innerHTML = selectedProduct.brand;
}