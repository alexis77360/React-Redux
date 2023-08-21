import axios from "axios";


//? On crée une constante qui va contenir le type de l'action
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

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

export const editPost = (data) => {
    return (dispatch) => {
        return axios
            
            //! On envoie les données
            .put(`http://localhost:3000/posts/${data.id}` , data) 
            .then((res) => {
                dispatch({ type: EDIT_POST, payload: data });
            })
    }
}

export const deletePost = (postid) => {

    return (dispatch) => {
        return axios
            
            //! On envoie les données
            .delete(`http://localhost:3000/posts/${postid}`) 
            .then((res) => {
                dispatch({ type: DELETE_POST, payload: postid });
            })
    }
}

export const addPostLike = (data) => {
    return (dispatch) => {
        return axios
            .put(`http://localhost:3000/posts/${data.id}` , data) 
            .then((res) => {
                dispatch({ type: ADD_POST_LIKE, payload: data });
            })
    }
}
