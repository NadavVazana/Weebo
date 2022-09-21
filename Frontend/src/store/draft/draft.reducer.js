import { wapService } from "../../services/wap.service"

const initialState = {
    cmp: null,
    currElement: {},
    draft: wapService.getDraft(),
    duplicate: {},
}

export function draftReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DRAFT':
            return { ...state, draft: action.draft }
        case 'SET_DUPLICATE':
            return { ...state, duplicate: action.duplicate }

        case 'SET_ELEMENT':
            return { ...state, currElement: { ...action.element } }


        default: return state
    }
}
