const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Photo = keystone.list('Photos');
const Banner = keystone.list('Banner');
const Depoimento = keystone.list('Depoimentos');
const SobreMim = keystone.list('SobreMim');
const Produto = keystone.list('Produtos');
const Informações = keystone.list('Informações');


module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/photos', (req, res) => {
    Photo.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/banner', (req, res) => {
    Banner.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });


  app.get('/api/depoimentos', (req, res) => {
    Depoimento.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/sobre-mim', (req, res) => {
    SobreMim.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/produtos', (req, res) => {
    Produto.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/informacoes', (req, res) => {
    Informações.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });


  app.get('*', (req, res) => {
    res.redirect('/');
  });
};