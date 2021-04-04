const keystone = require('keystone');

const { Types } = keystone.Field;

const SobreMim = new keystone.List('SobreMim', {
    nocreate: true,
    nodelete: true
});

SobreMim.add({
    SobreMim: { type: Types.Textarea, require: true, initial: true, },
    FotoVertical: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal: { type: Types.CloudinaryImage, require: true, initial: true, },
});

SobreMim.register();