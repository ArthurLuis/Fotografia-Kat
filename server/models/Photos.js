const keystone = require('keystone');

const { Types } = keystone.Field;

const Photo = new keystone.List('Photos', {
    nocreate: true,
    nodelete: true
});

Photo.add({
    LinkParaVerTodasFotos: { type: Types.Url, required: true, index: true, initial: true },
    FotoVertical1: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoVertical2: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoVertical3: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoVertical4: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoVertical5: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal1: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal2: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal3: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal4: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal5: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoHorizontal6: { type: Types.CloudinaryImage, require: true, initial: true, },
    FotoQuadrada: { type: Types.CloudinaryImage, require: true, initial: true, },
});

Photo.register();