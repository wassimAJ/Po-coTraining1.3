import React from "react";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== action.payload);
    case "edit_blogpost":
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
      case 'get_payload':
      return action.payload
    default:
      return;
  }
};

const getBlogPosts = dispatch =>{
  return async ()=>{
    const resp = await jsonServer.get('/bogposts');
    dispatch({type:'get_blogposts', payload:resp.data})
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    await jsonServer.post('./blogposts', {title, content})
    // dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`./blogosts/${id}`)

    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`./blogposts${id}`, {title, content})
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
