import { SET_CURRENT_USER, CLEAR_STATE } from '../actions/actionConstants';

const initState = {
    Token: null,
    username: null,
    role: null,
    current_user: {}
}

const authReducer = (state=initState, action) => {
    switch(action.type){
        case 'SET_ACCESS_TOKEN':
            return {
                ...state,
                Token: action.token.Token
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.current_user
            }
        case CLEAR_STATE:
            return {
                ...initState
            }
        default:
            return state
    }
}

export default authReducer;