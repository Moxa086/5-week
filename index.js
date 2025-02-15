const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 999.99 },
  { id: 2, name: 'Phone', category: 'electronics', price: 499.99 },
  { id: 3, name: 'Shoes', category: 'clothing', price: 69.99 },
  { id: 4, name: 'T-shirt', category: 'clothing', price: 19.99 },
];

app.use(express.json());

app.get('/products', (req, res) => {
  const { category } = req.query;

  if (category) {
    const filteredProducts = products.filter(product => product.category === category);
    return res.json(filteredProducts);
  }

  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.listen(port, () => {
  console.log(`E-commerce API is running on http://localhost:${port}`);
});
