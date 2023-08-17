import axios from "axios";


//? On crée une constante qui va contenir le type de l'action
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";

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


export const addPost = (data) => {
    return (dispatch) => {
        return axios
            
            //! On envoie les données
            .post("http://localhost:3000/posts" , data) 
            .then((res) => {
                dispatch({ type: ADD_POST, payload: data });
            })
    }
}