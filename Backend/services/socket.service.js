var gIo = null
const ObjectId = require('mongodb').ObjectId
const dbService = require('../services/db.service')
async function setupSocketAPI(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*'
        }
    })

    gIo.on('connection', socket => {
        socket.on('set-up-socket-site', siteId => {
            socket.siteId = siteId
            // console.log(socket);


        })
        socket.on('add-contact-details', async ({ details, siteId }) => {
            const target = await getUserSocket(siteId)
            console.log(target);
            target.emit('update-contact-list', {details,siteId})
        })






    })
    async function getUserSocket(siteId) {
        const sockets = await _getAllSockets()
        const socket = sockets.find(s =>{
            // console.log(siteId);
           return s.siteId === siteId})
        return socket
    }

    async function _getAllSockets() {
        const sockets = await gIo.fetchSockets()
        return sockets
    }


}
module.exports = {
    setupSocketAPI
}