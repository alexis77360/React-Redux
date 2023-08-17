import axios from "axios";


//? On crée une constante qui va contenir le type de l'action
export const GET_USER = "GET_USER";

export const getUser = () => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3000/user")
            .then((res) => {
                //! On communique au reducer le type de l'action et les données
                dispatch({ type: GET_USER, payload: res.data[0] });
            })
    }
}