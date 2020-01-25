const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(`INSERT INTO products(title, imageUrl, description, price) VALUES (?, ?, ?, ?)`, [this.title, this.imageUrl, this.description, this.price]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static get(id) {
    return db.execute('SELECT * FROM products WHERE id = ?', [id]);
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE id = ?', [id]);
  }
};
