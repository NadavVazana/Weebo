import { wapService } from "../../services/wap.service"
const initialState = {
    cmp: null,
    currElement: {},

    draft: wapService.getDraft()
}

export function draftReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DRAFT':
            return { ...state, draft: action.draft }

            case 'SET_ELEMENT':
                console.log(action.element);
                return { ...state, currElement: {...action.element,info:{isFocus:true}} } 
        default: return state
    }
}
