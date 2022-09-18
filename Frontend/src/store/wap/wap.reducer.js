import { wap } from "../../assets/wap"

const INITIAL_STATE = {
    waps: [],
    wap: {},
    currentWap: null,
}

export function wapReducer(state = INITIAL_STATE, action) {
    var waps

    switch (action.type) {
        //SET CMPS 
        case 'SET_CMPS':
            return { ...state, wap: { ...wap, cmps: [...action.cmps] } }
   
        //SET WAP 
        case 'SET_WAP':
            return { ...state, wap: action.wap }
        case 'SET_WAPS':
            return { ...state, waps: action.waps }
        case 'ADD_WAP':
            waps = [...state.waps, action.wap]
            return { ...state, waps }
        case 'REMOVE_WAP':
            waps = state.waps.filter(wap => wap._id !== action.todoId)
            return { ...state, waps }
        case 'UPATE_WAP':
            waps = state.waps.map(currWap => (currWap._id === action.updatedWap._id) ? action.updatedWap : currWap)
            return { ...state, waps }

        default:
            return state
    }
}