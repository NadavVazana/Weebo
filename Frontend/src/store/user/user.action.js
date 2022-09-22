import { showSuccessMsg } from "../../services/event-bus.service"
import { userService } from "../../services/user.service"

export function loginUser(userToLogin){
    return async (dispatch)=>{
        const user = await userService.login(userToLogin)
        if(!user) return user
        dispatch({type:'LOGIN_USER',user})
        return user
    }
}

export function logoutUser(){
    return async (dispatch) =>{
    showSuccessMsg('Logged out')

        await userService.logout()
        dispatch({type:'LOGOUT_USER'})
    }
}


export function updateUser(user){
    return async (dispatch) =>{
        await userService.updateUser(user)
        dispatch({type:'UPDATE_USER',user})
    
    }
}



