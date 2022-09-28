import { wapService } from "../../services/wap.service"
import { cloudService } from '../../services/cloudinary-service'

// Get Draft
export function getDraft() {
    return (dispatch) => {
        try {
            const draft = wapService.getDraft()
            dispatch({ type: 'SET_DRAFT', draft })
            return draft
        } catch (err) {
            console.log('could not get draft!:', err)
        }
    }
}

// Set Draft
export function setDraft(draft) {
    return (dispatch) => {
        try {
            wapService.setDraft(draft)
            dispatch({ type: 'SET_DRAFT', draft })
            dispatch(setDraftHistory(draft))
        } catch (err) {
            console.log('could not set draft!:', err)
        }
    }
}

// Set Draft History
export function setDraftHistory(draft) {
    return (dispatch, getState) => {
        try {
            const state = getState()
            let { draftHistory } = state.draftModule
            if (draft === draftHistory[draftHistory.length - 1]) return
            let copyDraftHistory = [...draftHistory]
            if (draftHistory.length) {
                if (draftHistory[draftHistory.length - 1]._id !== draft._id && draftHistory.length) {
                    copyDraftHistory = []
                }
            }
            draftHistory = wapService.setDraftHistory(draft, copyDraftHistory)
            dispatch({ type: 'SET_DRAFT_HISTORY', draftHistory })
        } catch (err) {
            console.log('could not set draft history!:', err)
        }
    }
}

export function getDraftFromHistory() {
    return (dispatch, getState) => {
        try {
            const state = getState()
            let { draft, draftHistory } = state.draftModule
            if (draftHistory.length !== 1) {
                draftHistory = wapService.changeDraftHistory(draftHistory)
                dispatch({ type: 'SET_DRAFT_HISTORY', draftHistory })
                draft = draftHistory[draftHistory.length - 1]
                dispatch(setDraft(draft))
            }
        } catch (err) {
            console.log('could not set draft!:', err)
        }
    }
}

//Change Theme
export function updateDraftTheme(draft, theme) {
    return (dispatch) => {
        try {
            const copyDraft = { ...draft }
            draft = wapService.updateDraftTheme(copyDraft, theme)
            dispatch(setDraft(draft))
            dispatch(setDraftHistory(draft))
        } catch (err) {
            console.log('could not update draft theme!:', err)
        }
    }
}

// set Element
export function setElement(element) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_ELEMENT', element })
        } catch (err) {
            console.log('could not load element!:', err)
        }
    }
}


// Update Draft
export function updateDraft(draft, element, action) {
    return (dispatch) => {
        try {
            const copyDraft = { ...draft }
            draft = wapService.updateDraft(copyDraft, element, action)
            dispatch(setDraft(draft))
            dispatch(setDraftHistory(draft))
        } catch (err) {
            console.log('could not update draft!:', err)
        }
    }
}

// Set Element Image
export function setElementImage(ev) {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const { draft, currElement } = state.draftModule
            let copyCurrElement = { ...currElement }
            const image = await cloudService.uploadImg(ev)
            copyCurrElement = wapService.uploadImage(currElement, image)
            dispatch(setElement(copyCurrElement))
            dispatch(updateDraft(draft, copyCurrElement))

        } catch (err) {
            console.log('could not update image!:', err)
        }
    }
}


