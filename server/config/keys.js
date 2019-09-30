module.exports = {
    aws:{
        secretAccessKey: 'la++8Xe9cFBQPAMSSfK60t/spctQmESWWr1ywwDx',
        accessKeyId: 'AKIAJEMTQUBPOYBHRRGA',
        region: "eu-central-1",
        bucket: 'test-app-board-storage-aad',
        acl: 'public-read-write'
    },
    mongoURI: 'mongodb+srv://aad:aad@newcluster-d2rra.mongodb.net/BOARD?retryWrites=true&w=majority',
    jwtSecret: 'qwewdcsadf4323',
    sessionSecret: 'we329r324rfd',
    port: process.env.PORT || 3000
    
}