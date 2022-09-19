import { httpService } from "./http.service"

export const userService={
    login,
    signup,
    logout
}
const USER = 'user/'
const LOGIN = 'auth/login/'
const SIGNUP = 'auth/signup/'
const LOGOUT = 'auth/logout/'



async function login(loginDetails){
    try{
    return await httpService.post(LOGIN,loginDetails)}
    catch(err){
        return null
    }
}

async function signup(signUpDetails){
    // console.log(signUpDetails);
    return await httpService.post(SIGNUP,signUpDetails)
}

async function logout(){
    console.log('dsds');
    
    return await httpService.post(LOGOUT)
}