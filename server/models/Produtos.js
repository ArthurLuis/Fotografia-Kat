const keystone = require('keystone');

const { Types } = keystone.Field;

const Produto = new keystone.List('Produtos', {
    map: { name: "Titulo" }
});

Produto.add({
    Titulo: { type: Types.Text, require: true, initial: true, },
    Descrição: { type: Types.Textarea, require: true, initial: true, },
    Link: { type: Types.Url, required: false, index: true, initial: true },
});

Produto.register();