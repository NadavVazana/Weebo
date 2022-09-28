import io from 'socket.io-client'
const BASE_URL = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'

const SOCKET_LOGIN_USER = 'socket_login_user'
const SOCKET_LOGOUT_USER = 'socket_logout_user'
export const SOCKET_MOUSE_MOVE = 'socket_mouse_move'

export const socketService = createSocketService()

socketService.setup()

function createSocketService(){
    var socket = null
    const socketService={

        setup(){
            socket = io(BASE_URL)
            
        },

        on(eventName,cb){
            socket.on(eventName,cb)
        },

        off(eventName,cb){
            if(!socket) return 
            if(!cb) socket.removeAllListeners(eventName)
            else socket.off(eventName,cb)
        },

        emit(eventName,data){
            socket.emit(eventName,data)

        },

        login(userId){
            socket.emit(SOCKET_LOGIN_USER,userId)
        },

        logout(){
            socket.emit(SOCKET_LOGOUT_USER)
        },

        terminate(){
            socket = null
        }
    }
    return socketService
}