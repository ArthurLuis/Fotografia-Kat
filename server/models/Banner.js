const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner', {
    nocreate: true,
    nodelete: true
});

Banner.add({
    Logo: { type: Types.CloudinaryImage, require: true, initial: true, },
    TiposDeEnsaio: { type: Types.TextArray, initial: true, required: true, index: true },
});

Banner.register();