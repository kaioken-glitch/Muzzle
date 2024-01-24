document.addEventListener('DOMContentLoaded', () => {
  const lmnContainer = document.getElementById('lmn');
  let productCount = 0;

  // Fetch data from FakeStoreAPI
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.classList.add('product-image');
        productImage.src = product.image;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerHTML = `
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        `;

        productCard.appendChild(productImage);
        productCard.appendChild(overlay);

        productCard.addEventListener('click', () => {
          // Handle click event (retain overlay or perform other actions)
        });

        lmnContainer.appendChild(productCard);

        productCount++;

        // Check if 4 products are added, then start a new line
        if (productCount % 4 === 0) {
          const newLineBreak = document.createElement('br');
          lmnContainer.appendChild(newLineBreak);
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});