import * as types from './types'

const init = {
    stateExample = null,
}

function reducer(state=init, action){
    switch(action.types){
        case types.EXAMPLE:
            return {
                ...state,
                stateExample: action.payload,
            }
        default:
            return { ...state }
            
    }
}

export default reducer;