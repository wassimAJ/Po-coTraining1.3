import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((e) => e.id == id);

  return (
    <BlogPostForm
      nitialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
