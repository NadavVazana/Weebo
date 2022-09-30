var gIo = null

const siteService = require('../api/site/site.service')
const ObjectId = require('mongodb').ObjectId
const dbService = require('../services/db.service')
async function setupSocketAPI(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*'
        }
    })

    gIo.on('connection', socket => {
        socket.on('set-up-socket-site',async siteId => {
            console.log(siteId);
            socket.siteId = siteId
            const sockets = await _getAllSockets()
            console.log(sockets);
            // console.log(socket);


        })
        socket.on('add-contact-details', async ({ details, siteId }) => {
            const target = await getUserSocket(siteId)
            target.emit('update-contact-list', {details,siteId})
        })

        socket.on('increase-view-to-site',async site=>{
                siteService.update(site[0])
                const target = await getUserSocket(site[0]._id)
                if(!target) return
                target.emit('increase-views-on-dashboard',site[0])
                
        })

        socket.on('socket_mouse_move',pos=>{
            socket.broadcast.emit('show_user_mouse',pos)
        })

        socket.on('change_draft',draft=>{
            socket.broadcast.emit('draft-updated',draft)
        })






    })
    async function getUserSocket(siteId) {
        const sockets = await _getAllSockets()
        const socket = sockets.find(s =>{
           return s.siteId === siteId.toString()})

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