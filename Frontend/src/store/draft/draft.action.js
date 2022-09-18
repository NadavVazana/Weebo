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

//ELEMENTS
export function setElement(element) {
    return (dispatch) => {
        try {

            dispatch({ type: 'SET_ELEMENT', element })
        } catch (err) {
            console.log('could not load element!:', err)
        }
    }
}

//UPDATE DRAFT BY ELEMENT
export function updateDraft(draft, element) {
    return (dispatch) => {
        try {
            const copyDraft={...draft}
            draft = wapService.updateDraft(copyDraft, element)
            dispatch({ type: 'SET_DRAFT', draft })
        } catch (err) {
            console.log('could not update draft!:', err)
        }
    }

}

