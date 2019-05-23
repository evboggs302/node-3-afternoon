module.exports = {
  create: (req, res) => {
    const { name, description, price, image_url } = req.body;
    const db = req.app.get("db");
    db.create_product([name, description, price, image_url]).then(() =>
      res.sendStatus(200)
    );
  },
  getOne: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.read_product(id).then(prod => {
      res.status(200).send(prod);
    });
  },
  getAll: (req, res) => {
    const db = req.app.get("db");
    db.read_products().then(prods => {
      res.status(200).send(prods);
    });
  },
  update: (req, res) => {
    const { id, desc } = req.query;
    const db = req.app.get("db");
    db.update_product([id, desc]).then(() => res.sendStatus(200));
  },
  delete: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_product(id).then(() => res.sendStatus(200));
  }
};
