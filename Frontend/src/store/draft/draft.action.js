import { wapService } from "../../services/wap.service"

export function getDraft() {
    return (dispatch) => {
        const draft = wapService.getDraft()
        dispatch({ type: 'SET_DRAFT', draft })
        return draft
    }
}

export function setDraft(draft) {
    return (dispatch) => {
        wapService.setDraft(draft)
        dispatch({ type: 'SET_DRAFT', draft })
    }
}


export function setElement(element) {
    return (dispatch) => {
        try {

            dispatch({ type: 'SET_ELEMENT', element })
        } catch (err) {
            console.log('could not load element!:', err)
        }
    }
}