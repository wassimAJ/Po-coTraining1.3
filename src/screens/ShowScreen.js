import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route, action }) => {
  const id = route.params.id;
  const { state } = useContext(Context);

  const blogPost = state.find((e) => e.id == id);

 

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;
const styles = StyleSheet.create({});
