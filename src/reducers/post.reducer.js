import { GET_POSTS } from "../actions/post.action";
import { ADD_POST } from "../actions/post.action";
const initialState = {};


export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;

            //! On ajoute le nouveau post au tableau de post et on renvoie le state
        case ADD_POST:
            return [action.payload, ...state ];

        default:
            return state;
    }
}