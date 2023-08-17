import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";

const App = () => {

  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">

          {/* //! On map les données post que l'on récupère du store si poste existe et n'est pas null */}
          {!isEmpty(posts) && posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}


        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
