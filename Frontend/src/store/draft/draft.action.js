import { wapService } from "../../services/wap.service"
import { cloudService } from '../../services/cloudinary-service'

// Get Draft
export function getDraft() {
    return (dispatch) => {
        const draft = wapService.getDraft()
        dispatch({ type: 'SET_DRAFT', draft })
        return draft
    }
}

// Set Draft
export function setDraft(draft) {
    return (dispatch) => {
        wapService.setDraft(draft)
        dispatch({ type: 'SET_DRAFT', draft })
    }
}

// Update Draft
export function updateDraft(draft, element, isRemove) {
    return (dispatch) => {
        try {
            const copyDraft = { ...draft }
            draft = isRemove ? wapService.removeElement(copyDraft, element) : wapService.updateDraft(copyDraft, element)
            dispatch({ type: 'SET_DRAFT', draft })
        } catch (err) {
            console.log('could not update draft!:', err)
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

// Set Duplicate Element
export function setDuplicate(duplicate) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_DUPLICATE', duplicate })
        } catch (err) {
            console.log('could not duplicate draft!:', err)
        }
    }
}

//Duplicate Element 
export function duplicateElement(draft, element) {
    return (dispatch) => {
        try {
            const copyDraft = { ...draft }
            draft = wapService.duplicateElement(copyDraft, element)
            dispatch({ type: 'SET_DRAFT', draft })
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
            if (currElement.type === 'container') {
                let backgroundImage = `url(${image})`
                copyCurrElement = {
                    ...copyCurrElement, styles: {...copyCurrElement?.styles, backgroundImage }
                }
            } else {
                copyCurrElement = {
                    ...copyCurrElement, info: { ...copyCurrElement?.info, image }
                }
            }
            dispatch(setElement(copyCurrElement))
            dispatch(updateDraft(draft, copyCurrElement))
        } catch (err) {
            console.log('could not update image!:', err)
        }
    }
}


