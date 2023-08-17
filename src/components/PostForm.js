import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";


const PostForm = () => {
  const form = useRef()
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    //! Pour récuperer dans le form avec useRef
    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    };

    //! On attend que le post soit ajouté avant de faire un getPosts
    await dispatch(addPost(postData));
    dispatch(getPosts());

    form.current.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={ (e) => handleForm(e)}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
