import { db } from "../firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const productList = document.getElementById("productList");

async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach(doc => {
    const product = doc.data();
    const productElement = document.createElement("div");
    productElement.classList.add("product-item");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    `;
    productList.appendChild(productElement);
  });
}

fetchProducts();
