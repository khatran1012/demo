import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST__ITEMS_SUCCESS,
    FETCH_POST_ERROR
} from '../constant/postConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: [],
    items: []
}

function exampleReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: action.payload
            };
            case FETCH_POST__ITEMS_SUCCESS:
                return {
                    ...state,
                    requesting: false,
                    success: true,
                    items: action.items
                };
        case FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                message: action.message
            };

        default:
            return state;
    }
}

export default exampleReducers;