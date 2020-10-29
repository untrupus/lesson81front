import {
    FETCH_LINK_ERROR,
    POST_LINK_SUCCESS
} from "./actionTypes";

const initialState = {
    shortLink: {},
    link: {},
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LINK_ERROR:
            return {...state, error: action.value};
        case POST_LINK_SUCCESS:
            return {...state, shortLink: action.value}
        default:
            return state;
    }
};

export default reducer;