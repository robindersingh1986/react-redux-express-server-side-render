import { POST_REGISTER_DATA, POST_REGISTER_DATA_SUCCESS, POST_REGISTER_DATA_FAILURE } from '../actions';

const initialState = {
    status: null,
    error: null
};

export default function (state = initialState, action) {
    const { type, result, error} = action;

    switch(type) {
        case POST_REGISTER_DATA:
        return state;

        case POST_REGISTER_DATA_SUCCESS:
        console.log('POST_REGISTER_DATA_SUCCESS called : ', action);
        return { ...state, ...result, status: 200 };

        case POST_REGISTER_DATA_FAILURE:
        return { ...state, status: 500, error};

        default:
        return state;
    }
}