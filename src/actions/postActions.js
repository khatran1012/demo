import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST__ITEMS_SUCCESS,
    FETCH_POST_ERROR
} from '../constant/postConstant';

const getPostSuccess = (payload) => ({
    type: FETCH_POST_SUCCESS,
    payload
})

export const setCartItem = (items) => ({
    type: FETCH_POST__ITEMS_SUCCESS,
    items
})

export const loadPosts = () => async dispatch => {
    try {
        dispatch({ type: FETCH_POST_REQUEST });

        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url)
        const responseProduct = await response.json();
        dispatch(getPostSuccess(responseProduct));
    } catch (error) {
        console.error(error);
        dispatch({
            type: FETCH_POST_ERROR,
            message: error
        });
    }
}