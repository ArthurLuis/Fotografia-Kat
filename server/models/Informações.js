const keystone = require('keystone');

const { Types } = keystone.Field;

const Informações = new keystone.List('Informações', {
    nocreate: true,
    nodelete: true
}
);

Informações.add({
    LogoBranca: { type: Types.CloudinaryImage, require: true, initial: true, },
    Instagram: { type: Types.Text, require: true, initial: true, },
    LinkInstagram: { type: Types.Url, required: true, index: true, initial: true },
    Whatsapp: { type: Types.Text, require: true, initial: true, },
});

Informações.register();