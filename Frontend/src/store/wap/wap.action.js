import { exampleList } from "../../assets/templates"
import { wapService } from "../../services/wap.service"

//WAP
export function loadWap(id) {
    return async (dispatch) => {
        try {
            let wap = await wapService.getById(id)
            dispatch({ type: 'SET_WAP', wap })
            return { ...wap }
        } catch (err) {
            console.log('could not load wap!:', err)
        }
    }
}

export function loadWaps() {
    return async (dispatch) => {
        try {
            let waps = await wapService.getWaps()
            dispatch({ type: 'SET_WAPS', waps })
        } catch (err) {
            console.log('could not load waps!:', err)
        }
    }
}

export function removeWap(wapId) {
    return async (dispatch) => {
        try {
            let removedWapId = await wapService.editWap(wapId)
            dispatch({ type: 'REMOVE_WAP', wapId: removedWapId })
        } catch (err) {
            console.log('could not remove wap:', err)
        }
    }
}

export function addWap(wap) {
    return async (dispatch) => {
        try {
            let newWap = await wapService.addWap(wap)
            dispatch({ type: 'ADD_WAP', wap: newWap })
        } catch (err) {
            console.log('could not add wap!:', err)
        }
    }
}

export function updateWap(wap) {
    return async (dispatch) => {
        try {
            let updatedWap = await wapService.editWap(wap)
            dispatch({ type: 'UPDATE_WAP', updatedWap })
        } catch (err) {
            console.log('could not update wap!:', err)
        }
    }
}


//CMPS
export function setCmps(cmps) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_CMPS', cmps })
        } catch (err) {
            console.log('could not load items!:', err)
        }

    }
}





