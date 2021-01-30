module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'bb-media-bucket',
            publicFiles: false,
            uniform: false,
            basePath: '',
        },
    },
    //...
}