import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { draftReducer } from './draft/draft.reducer'

import { systemReducer } from './system/system.reducer'
import { userReducer } from './user/user.reducer'
import { wapReducer } from './wap/wap.reducer'

const rootReducer = combineReducers({
    systemModule: systemReducer,
    wapModule: wapReducer,
    draftModule: draftReducer,
    userModule : userReducer
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)))


// For debug only!
// store.subscribe(() => {
//     console.log('Store state is:', store.getState())
// })
