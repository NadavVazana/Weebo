import { wapService } from "../../services/wap.service"

const initialState = {
    cmp: null,
    currElement: {},
    draft: wapService.getDraft(),
    draftHistory: []

}

export function draftReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DRAFT':
            return { ...state, draft: action.draft }

        case 'SET_DRAFT_HISTORY':
            return { ...state, draftHistory: action.draftHistory }

        case 'SET_ELEMENT':
            return { ...state, currElement: { ...action.element } }


        default: return state
    }
}
