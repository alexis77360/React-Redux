import axios from "axios";


//? On crée une constante qui va contenir le type de l'action
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3000/posts")
            .then((res) => {
                //! On communique au reducer le type de l'action et les données
                dispatch({ type: GET_POSTS, payload: res.data });
            })
    }
}