/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/worksheets/uv/uv.handler.js',
    client: '/static/worksheets/uv/uv.client.js',
    bundle: '/static/worksheets/uv/uv.bundle.js',
    config: '/static/worksheets/uv/uv.config.js',
    sw: '/static/worksheets/uv/uv.sw.js',
};