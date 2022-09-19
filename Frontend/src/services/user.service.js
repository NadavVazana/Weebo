import { httpService } from "./http.service"

export const userService={
    login,
    signup,
    logout,
    updateUser,
    getLoggedInUser
}


const USER_KEY = 'user_key'
const LOGIN = 'auth/login/'
const SIGNUP = 'auth/signup/'
const LOGOUT = 'auth/logout/'



async function login(loginDetails){
    try{
        const user =  await httpService.post(LOGIN,loginDetails)
    sessionStorage.setItem(USER_KEY,JSON.stringify(user))
    return user}
    catch(err){
        console.log(err);

        return null
    }
}

function getLoggedInUser(){
    return JSON.parse(sessionStorage.getItem(USER_KEY))
}

async function signup(signUpDetails){
    return await httpService.post(SIGNUP,signUpDetails)
}

async function logout(){
    sessionStorage.clear()
    return await httpService.post(LOGOUT)
}

async function updateUser(userToUpdate){
    try{
   const user =  await httpService.put(`user/${userToUpdate._id}`,userToUpdate)
   sessionStorage.setItem(USER_KEY,JSON.stringify(user))
   return user
    }
    catch(err){
        return err

    }
}