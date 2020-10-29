import {
    FETCH_LINK_ERROR,
    POST_LINK_SUCCESS
} from "./actionTypes";

import axiosOrder from "../axiosOrder";

const fetchLinkError = error => {
    return {type: FETCH_LINK_ERROR, error};
};

const postLinkSuccess = value => {
    return {type: POST_LINK_SUCCESS, value};
};

export const postLink = (data) => {
    return async dispatch => {
        try {
            const response = await axiosOrder.post('/links', {originalUrl: data});
            dispatch(postLinkSuccess(response.data));
        } catch (e) {
            dispatch(fetchLinkError(e));
        }
    };
};