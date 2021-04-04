const keystone = require('keystone');

const { Types } = keystone.Field;

const Depoimento = new keystone.List('Depoimentos', {
    map: { name: "Nome" }
});

Depoimento.add({
    Nome: { type: Types.Text, require: true, initial: true, },
    Depoimento: { type: Types.Textarea, require: true, initial: true, },
    Foto: { type: Types.CloudinaryImage, require: true, initial: true, },
});

Depoimento.register();